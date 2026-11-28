import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { AverageBidCalculator } from "@/components/calculator/AverageBidCalculator";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Average Bid Calculator | Public Procurement Nepal",
  description:
    "Calculate the average of responsive bids using an automatic 30% low-bid check against the engineer's estimate, identify the winner, see how far the winning bid is below the estimate and view the result as a PDF.",
  path: "/average-bid-calculator",
});

export default function AverageBidCalculatorPage() {
  return (
    <>
      <PageHeader
        eyebrow="Calculator"
        title="Average bid calculator"
        description="Apply the automatic 30% low-bid check, calculate the average, identify the winner, see how far below the estimate the winning bid is and view the result as PDF."
        breadcrumbs={[
          { name: "Average Bid Calculator", path: "/average-bid-calculator" },
        ]}
      />

      <section className="bg-cream py-16 sm:py-20">
        <AverageBidCalculator />
      </section>
    </>
  );
}
