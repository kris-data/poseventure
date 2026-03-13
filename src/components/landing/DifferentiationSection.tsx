export function DifferentiationSection() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Why PoseVenture is different
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <DiffCard
            title="Not more ideas — better decisions"
            description="Most AI tools generate startup ideas. PoseVenture helps you decide which one is worth building."
          />
          <DiffCard
            title="Sharpened opportunities"
            description="Turn vague startup thoughts into structured venture opportunities."
          />
          <DiffCard
            title="Strategic clarity before costly execution"
            description="Think like a strategist before building like an operator."
          />
        </div>
      </div>
    </section>
  );
}

function DiffCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="text-center">
      <h3 className="text-xl font-semibold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
}
