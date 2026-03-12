export function BusinessAnalysisSection() {
  return (
    <section className="w-full py-32 bg-slate-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            Validate if your opportunity is worth building
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Evaluate market potential, competition, and execution risks before committing to build.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnalysisCard
            title="Market potential"
            description="Understand the addressable market size and growth opportunity"
          />
          <AnalysisCard
            title="Competitive landscape"
            description="Analyze existing players and identify your positioning"
          />
          <AnalysisCard
            title="Revenue model"
            description="Explore pricing strategies and monetization approaches"
          />
          <AnalysisCard
            title="Execution risks"
            description="Identify key challenges and critical success factors"
          />
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-500 text-base font-medium">
            Business analysis coming soon in Stage 2
          </p>
        </div>
      </div>
    </section>
  );
}

function AnalysisCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-8 hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold text-slate-900 mb-4">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
}
