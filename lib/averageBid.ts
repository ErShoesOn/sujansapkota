export type Responsive = "Yes" | "No";

export type BidderInput = {
  name: string;
  amount: string;
};

export type BidderResult = BidderInput & {
  sn: number;
  amountValue: number | null;
  responsive: Responsive;
  responsiveReason: string;
  difference: number | null;
  rank: number | null;
  result: string;
  percentOfEstimate: number | null;
};

export type AverageBidResult = {
  totalBids: number;
  responsiveBids: number;
  excludedLowBids: number;
  average: number | null;
  winner: BidderResult | null;
  winningBid: number | null;
  difference: number | null;
  percentOfEstimate: number | null;
  belowEstimatePercent: number | null;
  tie: string;
  rows: BidderResult[];
};

const LOW_BID_LIMIT = 0.7;

function parseAmount(value: string): number | null {
  if (!value.trim()) return null;
  const amount = Number(value);
  return Number.isFinite(amount) && amount > 0 ? amount : null;
}

function round(value: number, decimals: number): number {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}

export function calculateAverageBid(
  bidders: BidderInput[],
  estimateInput: string,
  decimalInput: number,
): AverageBidResult {
  const decimals = Math.min(6, Math.max(0, decimalInput || 0));
  const estimate = parseAmount(estimateInput);

  const evaluated = bidders.map((bidder, index) => {
    const amountValue = parseAmount(bidder.amount);
    const isLow =
      estimate !== null && amountValue !== null && amountValue < estimate * LOW_BID_LIMIT;

    const responsive: Responsive = amountValue !== null && !isLow ? "Yes" : "No";
    const responsiveReason =
      amountValue === null
        ? "No bid entered"
        : estimate === null
          ? "Estimate not entered — check not applied"
          : isLow
            ? "More than 30% below estimate"
            : "Within 30% of estimate";

    return {
      ...bidder,
      sn: index + 1,
      amountValue,
      responsive,
      responsiveReason,
    };
  });

  const validBidders = evaluated.filter((bidder) => bidder.amountValue !== null);
  const responsiveBidders = validBidders.filter((bidder) => bidder.responsive === "Yes");

  const total = responsiveBidders.reduce(
    (sum, bidder) => sum + (bidder.amountValue ?? 0),
    0,
  );
  const average =
    responsiveBidders.length > 0
      ? round(total / responsiveBidders.length, decimals)
      : null;

  const rows: BidderResult[] = evaluated.map((bidder) => {
    const amount = bidder.amountValue;
    const canRank = bidder.responsive === "Yes" && amount !== null;
    const difference =
      canRank && average !== null && amount !== null
        ? round(Math.abs(amount - average), decimals)
        : null;

    return {
      ...bidder,
      difference,
      rank: null,
      result:
        amount === null
          ? ""
          : bidder.responsive === "No"
            ? "Disqualified (non-responsive)"
            : "",
      percentOfEstimate:
        amount !== null && estimate !== null ? amount / estimate : null,
    };
  });

  const ranked = rows.filter(
    (row): row is BidderResult & { difference: number; amountValue: number } =>
      row.difference !== null && row.amountValue !== null,
  );

  ranked.forEach((row) => {
    const betterCount = ranked.filter(
      (other) =>
        other.difference < row.difference ||
        (other.difference === row.difference && other.amountValue < row.amountValue),
    ).length;
    row.rank = betterCount + 1;
    row.result = row.rank === 1 ? "WINNER" : `Rank ${row.rank}`;
  });

  const winner = ranked.find((row) => row.rank === 1) ?? null;
  const identicalWinners = winner
    ? ranked.filter(
        (row) =>
          row.difference === winner.difference &&
          row.amountValue === winner.amountValue,
      ).length
    : 0;

  return {
    totalBids: validBidders.length,
    responsiveBids: responsiveBidders.length,
    excludedLowBids: validBidders.filter((bidder) => bidder.responsive === "No").length,
    average,
    winner,
    winningBid: winner?.amountValue ?? null,
    difference: winner?.difference ?? null,
    percentOfEstimate:
      winner && estimate !== null ? winner.amountValue / estimate : null,
    belowEstimatePercent:
      winner && estimate !== null
        ? (estimate - winner.amountValue) / estimate
        : null,
    tie:
      identicalWinners > 1
        ? "TIE: identical bids — resolve per bidding document"
        : "No tie",
    rows,
  };
}
