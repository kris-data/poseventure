export function HeroFlowDiagram() {
  return (
    <div className="w-full max-w-4xl mx-auto mt-16">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <FlowCard label="Signals" />
        <FlowArrow />
        <FlowCard label="Target" />
        <FlowArrow />
        <FlowCard label="Problem" />
        <FlowArrow />
        <FlowCard label="Insight" />
        <FlowArrow />
        <FlowCard label="Opportunity" highlight />
      </div>
      <p className="text-center text-sm text-slate-500 mt-6">
        Structure weak signals into a venture opportunity.
      </p>
    </div>
  );
}

function FlowCard({ label, highlight = false }: { label: string; highlight?: boolean }) {
  return (
    <div
      className={`rounded-xl px-6 py-4 text-center min-w-[120px] ${
        highlight
          ? "bg-indigo-600 text-white font-semibold"
          : "bg-white border border-slate-200 text-slate-700 font-medium"
      }`}
    >
      {label}
    </div>
  );
}

function FlowArrow() {
  return (
    <div className="hidden md:block text-slate-400 text-2xl">→</div>
  );
}
