export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="w-full py-24 bg-slate-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            From vague ideas to structured opportunities
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            PoseVenture is not just another idea generator. It helps you structure opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StepCard
            number="1"
            title="Bring your signal, problem, or rough idea"
            description="Start with any vague startup thought or market signal"
          />
          <StepCard
            number="2"
            title="PoseVenture structures it into an opportunity"
            description="Our system transforms signals into target, problem, insight, and opportunity"
          />
          <StepCard
            number="3"
            title="Analyze whether it's worth building"
            description="Get comprehensive business analysis and validation"
          />
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-600 italic max-w-2xl mx-auto">
            PoseVenture helps founders think like strategists before they build like operators.
          </p>
        </div>
      </div>
    </section>
  );
}

function StepCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="relative">
      <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center shadow-lg">
        <span className="text-white font-bold text-xl">{number}</span>
      </div>
      <div className="rounded-2xl border border-slate-200 bg-white p-8 pt-10">
        <h3 className="text-lg font-semibold text-slate-900 mb-3">{title}</h3>
        <p className="text-slate-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
