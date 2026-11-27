import type { AverageBidResult } from "@/lib/averageBid";

type Rgb = [number, number, number];

export type AverageBidPdfInput = {
  officeName: string;
  projectName: string;
  tenderNo: string;
  estimate: string;
  decimals: number;
  result: AverageBidResult;
};

const NAVY: Rgb = [10, 28, 51];
const GOLD: Rgb = [197, 154, 69];
const LIGHT: Rgb = [246, 247, 249];
const BORDER: Rgb = [220, 225, 231];
const MUTED: Rgb = [92, 103, 115];
const WHITE: Rgb = [255, 255, 255];

const PAGE_WIDTH = 210;
const PAGE_HEIGHT = 297;
const MARGIN = 14;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2;
const HEADER_HEIGHT = 40;
const CONTENT_TOP = HEADER_HEIGHT + 8;

function clean(value: string | null | undefined): string {
  return (value || "-").replace(/—/g, "-").trim() || "-";
}

function formatNumber(value: number | null, digits: number): string {
  if (value === null) return "-";
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value);
}

function formatNpr(value: number | null, digits: number): string {
  return value === null ? "-" : `NPR ${formatNumber(value, digits)}`;
}

function formatPercent(value: number | null): string {
  return value === null ? "-" : `${(value * 100).toFixed(2)}%`;
}

function formatBelowEstimate(value: number | null): string {
  if (value === null) return "-";
  if (Math.abs(value) < 0.00005) return "0.00% below estimate";
  return value > 0
    ? `${(value * 100).toFixed(2)}% below estimate`
    : `${(Math.abs(value) * 100).toFixed(2)}% above estimate`;
}

function safeFileName(value: string): string {
  return (
    value
      .replace(/[^a-z0-9]+/gi, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 60) || "average-bid-result"
  );
}

async function createAverageBidPdfBlob(input: AverageBidPdfInput): Promise<Blob> {
  const [{ jsPDF }, { autoTable }] = await Promise.all([
    import("jspdf"),
    import("jspdf-autotable"),
  ]);

  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const { officeName, projectName, tenderNo, estimate, decimals, result } = input;
  const generatedAt = new Date().toLocaleString("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  doc.setProperties({
    title: "Average Bid Calculator Report",
    subject: clean(projectName || tenderNo || "Average bid calculation"),
    author: "Er Sujan Sapkota",
    creator: "www.sapkotasujan.com.np",
  });

  function drawHeader() {
    doc.setFillColor(...NAVY);
    doc.rect(0, 0, PAGE_WIDTH, HEADER_HEIGHT, "F");

    doc.setTextColor(...WHITE);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(15);
    doc.text("Er Sujan Sapkota", MARGIN, 15);

    doc.setFontSize(8);
    doc.setTextColor(...GOLD);
    doc.text("Public Procurement Consultant", MARGIN, 22);
    doc.text("www.sapkotasujan.com.np", PAGE_WIDTH - MARGIN, 22, {
      align: "right",
    });

    doc.setDrawColor(...GOLD);
    doc.setLineWidth(0.5);
    doc.line(MARGIN, 27, PAGE_WIDTH - MARGIN, 27);

    doc.setTextColor(...WHITE);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.text("Average Bid Calculator Report", MARGIN, 35);
  }

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(...MUTED);
  doc.text(`Generated: ${generatedAt}`, MARGIN, CONTENT_TOP);

  function addSectionTitle(title: string, y: number) {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(...NAVY);
    doc.text(title, MARGIN, y);
    return y + 3;
  }

  function lastTableY(fallback: number) {
    return (doc as unknown as { lastAutoTable?: { finalY: number } }).lastAutoTable
      ?.finalY ?? fallback;
  }

  let y = addSectionTitle("Tender details", CONTENT_TOP + 8);

  autoTable(doc, {
    startY: y,
    head: [["Field", "Value"]],
    body: [
      ["Office name", clean(officeName)],
      ["Project / package", clean(projectName)],
      ["IFB / tender no.", clean(tenderNo)],
      [
        "Engineer's estimate",
        estimate.trim() ? formatNpr(Number(estimate), decimals) : "Not entered",
      ],
      ["Rounding decimals", String(decimals)],
    ],
    theme: "grid",
    margin: { top: HEADER_HEIGHT + 6, left: MARGIN, right: MARGIN, bottom: 18 },
    headStyles: {
      fillColor: NAVY,
      textColor: WHITE,
      fontStyle: "bold",
      fontSize: 8,
    },
    bodyStyles: { fontSize: 8, textColor: NAVY },
    columnStyles: { 0: { cellWidth: 45, fontStyle: "bold" } },
    styles: { lineColor: BORDER, cellPadding: 2.2 },
  });

  y = addSectionTitle("Result summary", lastTableY(y) + 9);

  autoTable(doc, {
    startY: y,
    head: [["Metric", "Value"]],
    body: [
      ["Total bids received", String(result.totalBids)],
      ["Responsive bids used", String(result.responsiveBids)],
      ["Excluded as >30% below estimate", String(result.excludedLowBids)],
      ["Average of responsive bids", formatNpr(result.average, decimals)],
      ["Winning bidder", clean(result.winner?.name)],
      ["Winning bid", formatNpr(result.winningBid, decimals)],
      ["Difference from average", formatNpr(result.difference, decimals)],
      ["Winning bid as % of estimate", formatPercent(result.percentOfEstimate)],
      ["Winner below estimate by", formatBelowEstimate(result.belowEstimatePercent)],
      ["Tie check", clean(result.tie)],
    ],
    theme: "grid",
    margin: { top: HEADER_HEIGHT + 6, left: MARGIN, right: MARGIN, bottom: 18 },
    headStyles: {
      fillColor: NAVY,
      textColor: WHITE,
      fontStyle: "bold",
      fontSize: 8,
    },
    bodyStyles: { fontSize: 8, textColor: NAVY },
    columnStyles: { 0: { cellWidth: 70, fontStyle: "bold" } },
    styles: { lineColor: BORDER, cellPadding: 2.2 },
    didParseCell: (data) => {
      if (data.section === "body" && data.column.index === 1) {
        const label = String(data.row.cells[0]?.text?.[0] || "");
        if (
          label === "Average of responsive bids" ||
          label === "Winning bidder" ||
          label === "Winning bid" ||
          label === "Winner below estimate by"
        ) {
          data.cell.styles.textColor = GOLD;
          data.cell.styles.fontStyle = "bold";
        }
      }
    },
  });

  y = addSectionTitle("Bidder evaluation", lastTableY(y) + 9);

  autoTable(doc, {
    startY: y,
    head: [
      [
        "S.N.",
        "Bidder",
        "Bid amount (NPR)",
        "Responsive",
        "Difference",
        "Rank",
        "Result",
        "% estimate",
      ],
    ],
    body: result.rows.map((row, index) => [
      String(index + 1),
      clean(row.name),
      row.amountValue === null ? "-" : formatNumber(row.amountValue, decimals),
      row.responsive,
      row.difference === null ? "-" : formatNumber(row.difference, decimals),
      row.rank === null ? "-" : String(row.rank),
      clean(row.result),
      formatPercent(row.percentOfEstimate),
    ]),
    theme: "grid",
    margin: { top: HEADER_HEIGHT + 6, left: MARGIN, right: MARGIN, bottom: 18 },
    headStyles: {
      fillColor: NAVY,
      textColor: WHITE,
      fontStyle: "bold",
      fontSize: 7.5,
      halign: "center",
    },
    bodyStyles: { fontSize: 7, textColor: NAVY, valign: "middle" },
    styles: { lineColor: BORDER, cellPadding: 1.8 },
    alternateRowStyles: { fillColor: LIGHT },
    columnStyles: {
      0: { cellWidth: 10, halign: "center" },
      1: { cellWidth: 25 },
      2: { cellWidth: 31, halign: "right" },
      3: { cellWidth: 18, halign: "center", fontStyle: "bold" },
      4: { cellWidth: 31, halign: "right" },
      5: { cellWidth: 12, halign: "center" },
      6: { cellWidth: 34, fontStyle: "bold" },
      7: { cellWidth: 13, halign: "right" },
    },
    didParseCell: (data) => {
      if (data.section !== "body") return;
      const row = result.rows[data.row.index];
      if (!row) return;

      if (row.result === "WINNER") {
        data.cell.styles.textColor = GOLD;
      }
      if (row.responsive === "No" && data.column.index === 3) {
        data.cell.styles.textColor = MUTED;
      }
    },
  });

  y = lastTableY(y) + 9;
  const note =
    "This report applies the 30% low-bid rule and the workbook method. If no estimate was entered, the low-bid check was not applied and all entered bids were treated as responsive. Confirm the rule, rounding and tie-break against the bidding document and current Public Procurement Regulations before official use. The award decision rests with the public entity and evaluation committee.";
  const noteLines = doc.splitTextToSize(note, CONTENT_WIDTH);
  if (y + noteLines.length * 4 > PAGE_HEIGHT - 22) {
    doc.addPage();
    y = CONTENT_TOP;
  }
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.5);
  doc.setTextColor(...MUTED);
  doc.text(noteLines, MARGIN, y);

  const pageCount = doc.getNumberOfPages();
  for (let page = 1; page <= pageCount; page += 1) {
    doc.setPage(page);
    drawHeader();
    doc.setDrawColor(...BORDER);
    doc.setLineWidth(0.3);
    doc.line(MARGIN, PAGE_HEIGHT - 13, PAGE_WIDTH - MARGIN, PAGE_HEIGHT - 13);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7);
    doc.setTextColor(...MUTED);
    doc.text(
      "Generated by Er Sujan Sapkota | Calculation support only - not an official award decision",
      MARGIN,
      PAGE_HEIGHT - 8,
    );
    doc.text(`Page ${page} of ${pageCount}`, PAGE_WIDTH - MARGIN, PAGE_HEIGHT - 8, {
      align: "right",
    });
  }

  return doc.output("blob") as Blob;
}

function reportFileName(input: AverageBidPdfInput): string {
  const fileBase = safeFileName(
    input.projectName || input.tenderNo || "average-bid-result",
  );
  const date = new Date().toISOString().slice(0, 10);
  return `${fileBase}-average-bid-result-${date}.pdf`;
}

export type AverageBidPdfView = {
  url: string;
  filename: string;
};

export async function createAverageBidPdfView(
  input: AverageBidPdfInput,
): Promise<AverageBidPdfView> {
  const blob = await createAverageBidPdfBlob(input);

  return {
    url: URL.createObjectURL(blob),
    filename: reportFileName(input),
  };
}
