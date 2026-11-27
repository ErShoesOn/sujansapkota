"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
} from "react";
import { Download, Info, Plus, RotateCcw, Trash2, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { calculateAverageBid, type BidderInput } from "@/lib/averageBid";
import {
  createAverageBidPdfView,
  type AverageBidPdfView,
} from "@/lib/downloadAverageBidPdf";
import { cn } from "@/lib/utils";

type Row = BidderInput & { id: number };

const MAX_BIDDERS = 50;

const inputClass =
  "w-full rounded-lg border border-line bg-white px-3 py-2 text-sm text-navy-900 outline-none transition-colors placeholder:text-muted focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20";

const methodSteps = [
  "A bid more than 30% below the engineer's estimate is marked No automatically. Those bids are excluded from the average and cannot win; all other entered bids are treated as responsive.",
  "Average = sum of responsive bids divided by the number of responsive bids, rounded to the selected decimal places.",
  "Difference is the absolute gap between each responsive bid and the average, so bids above and below the average count equally.",
  "The winner is the responsive bid with the smallest difference from the average. The result also shows the winning bid as a percentage of the estimate and how far below the estimate it is.",
  "Tie-break: if two bids are equally close to the average, the lower bid price ranks first.",
  "If two bids are identical in price and difference, the result is flagged as a tie to resolve under the bidding document.",
];

const sampleBidders: BidderInput[] = [
  { name: "COMP1", amount: "9500000" },
  { name: "COMP2", amount: "9200000" },
  { name: "COMP3", amount: "9000000" },
  { name: "COMP4", amount: "8800000" },
  { name: "COMP5", amount: "8600000" },
  { name: "COMP6", amount: "8700000" },
  { name: "COMP7", amount: "8450000" },
  { name: "COMP8", amount: "9545000" },
  { name: "COMP9", amount: "9327000" },
  { name: "COMP10", amount: "8012400" },
  { name: "COMP11", amount: "7865100" },
  { name: "COMP12", amount: "7500000" },
  { name: "COMP13", amount: "7315000" },
  { name: "COMP14", amount: "7245000" },
  { name: "COMP15", amount: "7036000" },
  { name: "COMP16", amount: "7345000" },
  { name: "COMP17", amount: "7050000" },
  { name: "COMP18", amount: "6845800" },
  { name: "COMP19", amount: "6625000" },
  { name: "COMP20", amount: "7800000" },
  { name: "COMP21", amount: "7948000" },
  { name: "COMP22", amount: "8524000" },
  { name: "COMP23", amount: "9945000" },
  { name: "COMP24", amount: "9968000" },
  { name: "COMP25", amount: "9999000" },
];

function makeRows(count: number): Row[] {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    name: "",
    amount: "",
  }));
}

function formatNumber(value: number | null, digits: number) {
  if (value === null) return "—";
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value);
}

function formatNpr(value: number | null, digits: number) {
  return value === null ? "—" : `NPR ${formatNumber(value, digits)}`;
}

function formatPercent(value: number | null) {
  return value === null ? "—" : `${(value * 100).toFixed(2)}%`;
}

function ResultItem({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <dt className="text-[10px] font-medium uppercase tracking-[0.14em] text-gold-300">
        {label}
      </dt>
      <dd
        className={cn(
          "mt-2 break-words text-sm font-semibold text-white sm:text-base",
          highlight && "text-gold-300",
        )}
      >
        {value}
      </dd>
    </div>
  );
}

export function AverageBidCalculator() {
  const [officeName, setOfficeName] = useState("");
  const [projectName, setProjectName] = useState("");
  const [tenderNo, setTenderNo] = useState("");
  const [estimate, setEstimate] = useState("");
  const [rows, setRows] = useState<Row[]>(() => makeRows(5));
  const [viewingPdf, setViewingPdf] = useState(false);
  const [pdfView, setPdfView] = useState<AverageBidPdfView | null>(null);
  const [pdfError, setPdfError] = useState("");
  const nextId = useRef(6);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closePdfButtonRef = useRef<HTMLButtonElement>(null);
  const pdfTriggerRef = useRef<HTMLButtonElement>(null);

  const decimalsNumber = 2;
  const result = useMemo(
    () => calculateAverageBid(rows, estimate, decimalsNumber),
    [rows, estimate, decimalsNumber],
  );
  const hasBids = rows.some(
    (row) => row.name.trim() !== "" && row.amount.trim() !== "",
  );

  useEffect(() => {
    if (!pdfView) return;

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
      URL.revokeObjectURL(pdfView.url);
    };
  }, [pdfView]);

  useEffect(() => {
    if (!pdfView) return;

    const trigger = pdfTriggerRef.current;
    closePdfButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setPdfView(null);
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = Array.from(
        dialogRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      requestAnimationFrame(() => trigger?.focus());
    };
  }, [pdfView]);

  function updateRow(id: number, patch: Partial<BidderInput>) {
    setRows((current) =>
      current.map((row) => (row.id === id ? { ...row, ...patch } : row)),
    );
  }

  function addRow() {
    if (rows.length >= MAX_BIDDERS) return;
    setRows((current) => [
      ...current,
      { id: nextId.current++, name: "", amount: "" },
    ]);
  }

  function removeRow(id: number) {
    setRows((current) => current.filter((row) => row.id !== id));
  }

  function clearBids() {
    setRows(makeRows(5));
    nextId.current = 6;
  }

  function loadExample() {
    setProjectName("Sample Road Upgrading Package");
    setTenderNo("IFB-001/2083-84");
    setEstimate("10000000");
    setRows(sampleBidders.map((bidder, index) => ({ ...bidder, id: index + 1 })));
    nextId.current = sampleBidders.length + 1;
  }

  async function handleViewPdf(event: ReactMouseEvent<HTMLButtonElement>) {
    pdfTriggerRef.current = event.currentTarget;
    setViewingPdf(true);
    setPdfError("");

    try {
      const view = await createAverageBidPdfView({
        officeName,
        projectName,
        tenderNo,
        estimate,
        decimals: decimalsNumber,
        result,
      });
      setPdfView(view);
    } catch (error) {
      console.error("Failed to prepare PDF", error);
      setPdfError("Could not open the PDF preview. Please try again.");
    } finally {
      setViewingPdf(false);
    }
  }

  return (
    <>
      <Container>
        <section className="rounded-2xl border border-line bg-white p-6 shadow-card sm:p-8">
          <h2 className="text-xl font-bold tracking-tight text-navy-900">
            Tender details
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            These details are for reference. Only the bidder entries affect the
            calculation.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.1em] text-navy-900">
                Office name
              </span>
              <input
                type="text"
                value={officeName}
                onChange={(event) => setOfficeName(event.target.value)}
                placeholder="e.g. Road Division Office"
                className={inputClass}
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.1em] text-navy-900">
                Project / package name
              </span>
              <input
                type="text"
                value={projectName}
                onChange={(event) => setProjectName(event.target.value)}
                placeholder="e.g. Road Upgrading Package"
                className={inputClass}
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.1em] text-navy-900">
                IFB / tender no.
              </span>
              <input
                type="text"
                value={tenderNo}
                onChange={(event) => setTenderNo(event.target.value)}
                placeholder="e.g. IFB-001/2083-84"
                className={inputClass}
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.1em] text-navy-900">
                Engineer&apos;s estimate (NPR)
              </span>
              <input
                type="number"
                min="0"
                step="any"
                inputMode="decimal"
                value={estimate}
                onChange={(event) => setEstimate(event.target.value)}
                placeholder="0"
                className={inputClass}
              />
            </label>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={loadExample}
              className="inline-flex items-center gap-2 rounded-full border border-navy-900/20 bg-white px-5 py-2.5 text-sm font-semibold text-navy-900 transition-colors hover:border-gold-500"
            >
              <RotateCcw aria-hidden="true" className="h-4 w-4" />
              Load workbook example
            </button>
            <button
              type="button"
              onClick={clearBids}
              className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-muted transition-colors hover:border-gold-500 hover:text-navy-900"
            >
              Clear bids
            </button>
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-line bg-white p-6 shadow-soft sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-navy-900">
                Bidder entries
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Enter up to {MAX_BIDDERS} bidders. A bid more than 30% below the
                engineer&apos;s estimate is marked &quot;No&quot; automatically and is
                excluded from the average and winner selection.
              </p>
            </div>
            <button
              type="button"
              onClick={addRow}
              disabled={rows.length >= MAX_BIDDERS}
              className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-800 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Plus aria-hidden="true" className="h-4 w-4" />
              Add bidder
            </button>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[980px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-line text-[11px] font-semibold uppercase tracking-[0.1em] text-muted">
                  <th className="px-3 py-3">S.N.</th>
                  <th className="px-3 py-3">Bidder name</th>
                  <th className="px-3 py-3">Bid amount (NPR)</th>
                  <th className="px-3 py-3">Responsive? (auto)</th>
                  <th className="px-3 py-3">Difference</th>
                  <th className="px-3 py-3">Rank</th>
                  <th className="px-3 py-3">Result</th>
                  <th className="px-3 py-3">% of estimate</th>
                  <th aria-label="Remove" className="px-3 py-3" />
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {rows.map((row, index) => {
                  const calc = result.rows[index];
                  return (
                    <tr key={row.id} className="align-middle">
                      <td className="px-3 py-2 text-muted">{index + 1}</td>
                      <td className="px-3 py-2">
                        <input
                          type="text"
                          value={row.name}
                          onChange={(event) =>
                            updateRow(row.id, { name: event.target.value })
                          }
                          aria-label={`Bidder ${index + 1} name`}
                          placeholder="Bidder name"
                          className={inputClass}
                        />
                      </td>
                      <td className="px-3 py-2">
                        <input
                          type="number"
                          min="0"
                          step="any"
                          inputMode="decimal"
                          value={row.amount}
                          onChange={(event) =>
                            updateRow(row.id, { amount: event.target.value })
                          }
                          aria-label={`Bidder ${index + 1} bid amount`}
                          placeholder="0"
                          className={inputClass}
                        />
                      </td>
                      <td className="px-3 py-2">
                        <span
                          className={cn(
                            "font-semibold",
                            calc.responsive === "Yes" ? "text-navy-900" : "text-muted",
                          )}
                        >
                          {calc.responsive}
                        </span>
                        <span className="mt-1 block text-[10px] leading-snug text-muted">
                          {calc.responsiveReason}
                        </span>
                      </td>
                      <td className="px-3 py-2 font-medium text-navy-900">
                        {formatNpr(calc.difference, decimalsNumber)}
                      </td>
                      <td className="px-3 py-2 text-navy-900">{calc.rank ?? "—"}</td>
                      <td
                        className={cn(
                          "px-3 py-2 font-semibold",
                          calc.result === "WINNER"
                            ? "text-gold-600"
                            : "text-muted",
                        )}
                      >
                        {calc.result || "—"}
                      </td>
                      <td className="px-3 py-2 text-muted">
                        {formatPercent(calc.percentOfEstimate)}
                      </td>
                      <td className="px-3 py-2 text-right">
                        <button
                          type="button"
                          onClick={() => removeRow(row.id)}
                          aria-label={`Remove bidder ${index + 1}`}
                          className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-line text-muted transition-colors hover:border-red-300 hover:text-red-600"
                        >
                          <Trash2 aria-hidden="true" className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        <div className="mt-8 grid gap-8 md:grid-cols-2 md:items-start">
          <div className="flex flex-col gap-4">
            <section className="depth-glow rounded-2xl border border-white/10 bg-navy-950 p-6 text-white shadow-card sm:p-8">
              <div>
                <p className="eyebrow text-gold-300">Result</p>
                <h2 className="mt-2 text-xl font-bold tracking-tight text-white sm:text-2xl">
                  Average bidding outcome
                </h2>
                {(projectName || tenderNo) && (
                  <p className="mt-2 text-sm text-white/70">
                    {projectName}
                    {projectName && tenderNo ? " · " : ""}
                    {tenderNo}
                  </p>
                )}
              </div>

              <dl className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <ResultItem
                  label="Total bids received"
                  value={String(result.totalBids)}
                />
                <ResultItem
                  label="Responsive bids used"
                  value={String(result.responsiveBids)}
                />
                <ResultItem
                  label="Excluded as >30% below estimate"
                  value={String(result.excludedLowBids)}
                />
                <ResultItem
                  label="Average of responsive bids"
                  value={formatNpr(result.average, decimalsNumber)}
                  highlight
                />
                <ResultItem
                  label="Winning bidder"
                  value={result.winner?.name || "—"}
                  highlight
                />
                <ResultItem
                  label="Winning bid"
                  value={formatNpr(result.winningBid, decimalsNumber)}
                />
                <ResultItem
                  label="Difference from average"
                  value={formatNpr(result.difference, decimalsNumber)}
                />
                <ResultItem
                  label="Winning bid as % of estimate"
                  value={formatPercent(result.percentOfEstimate)}
                />
                <ResultItem label="Tie check" value={result.tie} />
              </dl>

            </section>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={handleViewPdf}
                disabled={viewingPdf || !hasBids}
                aria-busy={viewingPdf}
                className="inline-flex items-center gap-2 rounded-full border border-gold-500 bg-gold-500 px-6 py-3 text-sm font-bold text-navy-950 shadow-soft transition-all hover:-translate-y-0.5 hover:border-gold-400 hover:bg-gold-400 hover:shadow-card disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {viewingPdf ? "Preparing PDF..." : "View Result as PDF"}
              </button>
              {!hasBids && (
                <p className="w-full text-center text-xs text-muted">
                  Enter at least one bidder name and amount to create a report.
                </p>
              )}
              {pdfError && (
                <p
                  role="alert"
                  className="w-full rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-xs font-medium text-red-700"
                >
                  {pdfError}
                </p>
              )}
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-line bg-cream p-4">
              <Info aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
              <p className="text-sm leading-relaxed text-charcoal/85">
                This calculator applies the 30% low-bid rule and the rest of the workbook
                method. If no estimate is entered, the 30% check cannot be applied and all
                entered bids are treated as responsive. Confirm the rule, rounding and
                tie-break against your bidding document and current Public Procurement
                Regulations before use. The award decision rests with the public entity and
                evaluation committee.
              </p>
            </div>
          </div>

          <section className="rounded-2xl border border-line bg-white p-6 shadow-soft sm:p-8">
            <p className="eyebrow">Method &amp; assumptions</p>
            <h2 className="mt-2 text-xl font-bold tracking-tight text-navy-900 sm:text-2xl">
              How this calculation works
            </h2>
            <ol className="mt-6 space-y-4">
              {methodSteps.map((step, index) => (
                <li
                  key={step}
                  className="flex gap-3 rounded-xl border border-line bg-cream p-4"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy-900 text-xs font-bold text-gold-400">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-charcoal/85">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-xs leading-relaxed text-muted">
              The engineer&apos;s estimate is used for the automatic 30% responsiveness check. If it is not entered, the check cannot be applied and all entered bids are treated as responsive. Confirm the rule, rounding and tie-break against your bidding document and current Public Procurement Regulations before official use.
            </p>
          </section>
        </div>
      </Container>

      {pdfView && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          role="presentation"
        >
          <div
            className="absolute inset-0 bg-navy-950/80 backdrop-blur-sm"
            onClick={() => setPdfView(null)}
            aria-hidden="true"
          />
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="pdf-preview-title"
            className="relative flex h-full max-h-[920px] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-white shadow-float"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line px-5 py-4 sm:px-7">
              <div>
                <h3
                  id="pdf-preview-title"
                  className="text-lg font-bold tracking-tight text-navy-900"
                >
                  Average bid result
                </h3>
                <p className="mt-1 text-xs text-muted sm:text-sm">
                  Preview the report below. Download it only if you need a copy.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={pdfView.url}
                  download={pdfView.filename}
                  className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-navy-800"
                >
                  <Download aria-hidden="true" className="h-3.5 w-3.5" />
                  Download PDF
                </a>
                <button
                  ref={closePdfButtonRef}
                  type="button"
                  onClick={() => setPdfView(null)}
                  aria-label="Close PDF preview"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-gold-500 hover:text-navy-900"
                >
                  <X aria-hidden="true" className="h-4 w-4" />
                </button>
              </div>
            </div>
            <iframe
              src={pdfView.url}
              title="Average bid result PDF"
              className="min-h-0 w-full flex-1 border-0 bg-navy-950"
            />
          </div>
        </div>
      )}
    </>
  );
}
