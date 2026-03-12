export function ProductOutputSection() {
  return (
    <section className="w-full py-32 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            What you get from venture discovery
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A structured opportunity framework that gives you confidence to commit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <OutputCard
            title="Target"
            description="A precisely defined user segment with clear characteristics and context."
          />
          <OutputCard
            title="Problem"
            description="The core frustration, unmet need, or emerging desire your target experiences."
          />
          <OutputCard
            title="Insight"
            description="The strategic angle or unique perspective that makes this opportunity compelling."
          />
          <OutputCard
            title="Opportunity"
            description="A structured venture opportunity hypothesis ready for deeper validation and analysis."
            highlight
          />
        </div>
      </div>
    </section>
  );
}

function OutputCard({
  title,
  description,
  highlight = false,
}: {
  title: string;
  description: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-8 transition-all ${
        highlight
          ? "border-indigo-400 bg-indigo-50 shadow-md"
          : "border-slate-200 bg-white shadow-sm"
      }`}
    >
      <h3
        className={`text-2xl font-bold mb-4 ${
          highlight ? "text-indigo-900" : "text-slate-900"
        }`}
      >
        {title}
      </h3>
      <p
        className={`text-base leading-relaxed ${
          highlight ? "text-indigo-800" : "text-slate-600"
        }`}
      >
        {description}
      </p>
    </div>
  );
}
