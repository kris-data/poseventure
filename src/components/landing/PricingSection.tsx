import Link from "next/link";
import { Button } from "@/components/ui/button";

export function PricingSection() {
  return (
    <section id="pricing" className="w-full py-24 bg-slate-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Start free. Go deeper when you're ready.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <PricingCard
            stage="Stage 1"
            title="Venture Discovery"
            price="Free"
            subtitle="2 free discoveries per day"
            features={[
              "2 discoveries per day",
              "Strategic sharpening engine",
              "Target, Problem, Insight, Opportunity framework",
              "Transform vague ideas into clear opportunities",
            ]}
            ctaText="Start Discovery"
            ctaLink="/discover"
          />
          <PricingCard
            stage="Stage 2"
            title="Business Analysis Report"
            price="Paid"
            subtitle="Market, competition, pricing, investor readiness, roadmap"
            features={[
              "Startup execution roadmap",
              "Investor readiness assessment",
              "Venture viability score",
              "Pricing benchmark research",
              "Competitor landscape mapping",
              "TAM / SAM / SOM analysis",
            ]}
            ctaText="Analyze Opportunity"
            ctaLink="/discover"
            recommended
          />
          <PricingCard
            stage="Stage 3"
            title="Market Validation"
            price="Paid"
            subtitle="Concept screening, testing, demand validation"
            features={[
              "Go/no-go recommendation",
              "Validation report with insights",
              "Customer feedback collection",
              "Market demand testing",
              "Concept screening with target users",
            ]}
            ctaText="Validate Market"
            ctaLink="/discover"
          />
        </div>
      </div>
    </section>
  );
}

function PricingCard({
  stage,
  title,
  price,
  subtitle,
  features,
  ctaText,
  ctaLink,
  recommended = false,
}: {
  stage: string;
  title: string;
  price: string;
  subtitle: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  recommended?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border bg-white p-8 relative ${
        recommended
          ? "border-indigo-300 shadow-lg ring-2 ring-indigo-100"
          : "border-slate-200 shadow-sm"
      }`}
    >
      {recommended && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="px-4 py-1 rounded-full bg-indigo-600 text-white text-xs font-semibold">
            Recommended
          </span>
        </div>
      )}
      
      <div className="mb-6">
        <div className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">
          {stage}
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">{title}</h3>
        <div className="text-3xl font-bold text-slate-900 mb-2">{price}</div>
        <p className="text-sm text-slate-600">{subtitle}</p>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-indigo-600 mt-0.5">✓</span>
            <span className="text-sm text-slate-700">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        asChild
        variant={recommended ? "default" : "outline"}
        className={`w-full rounded-xl py-5 font-medium ${
          recommended
            ? "bg-indigo-600 hover:bg-indigo-700 text-white"
            : "border-slate-300 text-slate-700 hover:bg-slate-50"
        }`}
      >
        <Link href={ctaLink}>{ctaText}</Link>
      </Button>
    </div>
  );
}
