export function ProblemSection() {
  return (
    <section id="why" className="w-full py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Why starting a venture still feels so hard
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProblemCard
            title="Too many ideas"
            description="AI makes brainstorming easy, but most ideas are not real opportunities."
          />
          <ProblemCard
            title="No confidence to start"
            description="People can generate ideas, but still struggle to decide which one is worth building."
          />
          <ProblemCard
            title="Market research is too hard"
            description="Traditional analysis is slow, expensive, and too expert-driven for early founders."
          />
        </div>
      </div>
    </section>
  );
}

function ProblemCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-8">
      <h3 className="text-xl font-semibold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
}
