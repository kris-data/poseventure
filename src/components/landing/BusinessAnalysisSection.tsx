import Link from "next/link";
import { Button } from "@/components/ui/button";

export function BusinessAnalysisSection() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Know if it's worth building
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Once your opportunity is clear, PoseVenture helps you analyze whether it is truly worth building.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnalysisCard
            title="TAM / SAM / SOM"
            description="Total addressable market sizing and segmentation"
          />
          <AnalysisCard
            title="Competitor landscape"
            description="Comprehensive competitive analysis and positioning"
          />
          <AnalysisCard
            title="Pricing benchmark"
            description="Market-validated pricing strategies and models"
          />
          <AnalysisCard
            title="Venture score"
            description="Quantified opportunity assessment and viability"
          />
          <AnalysisCard
            title="Investor readiness score"
            description="Funding potential and pitch preparation metrics"
          />
          <AnalysisCard
            title="Startup roadmap"
            description="Phased execution plan with key milestones"
          />
        </div>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            asChild
            className="px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium"
          >
            <Link href="/discover">Analyze This Opportunity</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function AnalysisCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
      <h3 className="text-base font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
}
