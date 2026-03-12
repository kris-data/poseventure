export function ProblemSection() {
  return (
    <section className="w-full py-32 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            Most founders don't lack ideas.
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            They lack confidence to commit. They see signals everywhere — but struggle to structure them into an opportunity worth building.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProblemCard
            title="Too many vague signals"
            description="You notice interesting changes and frustrations, but they remain scattered observations rather than structured opportunities."
          />
          <ProblemCard
            title="No framework for clarity"
            description="You lack a systematic way to transform weak signals into clear, compelling venture opportunities."
          />
          <ProblemCard
            title="Can't commit with confidence"
            description="Without structure, it's hard to know which opportunity deserves your full commitment."
          />
        </div>
      </div>
    </section>
  );
}

function ProblemCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 shadow-sm p-8 hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold text-slate-900 mb-4">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
}
