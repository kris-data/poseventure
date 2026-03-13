export function ProductOutputSection() {
  return (
    <section className="w-full py-24 bg-slate-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            What you get from Venture Discovery
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <OutputCard
            icon="👥"
            title="Target"
            description="Precisely defined customer segment with clear characteristics"
          />
          <OutputCard
            icon="⚡"
            title="Problem"
            description="Validated pain point that creates real urgency"
          />
          <OutputCard
            icon="💡"
            title="Insight"
            description="Strategic angle that differentiates your approach"
          />
          <OutputCard
            icon="🎯"
            title="Opportunity"
            description="Clear venture statement ready for execution"
            emphasis
          />
        </div>
      </div>
    </section>
  );
}

function OutputCard({
  icon,
  title,
  description,
  emphasis = false,
}: {
  icon: string;
  title: string;
  description: string;
  emphasis?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border bg-white p-6 ${
        emphasis ? "border-indigo-300 shadow-md" : "border-slate-200 shadow-sm"
      }`}
    >
      <div className="text-3xl mb-4">{icon}</div>
      <h3
        className={`text-lg font-semibold mb-3 ${
          emphasis ? "text-indigo-900" : "text-slate-900"
        }`}
      >
        {title}
      </h3>
      <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
}
