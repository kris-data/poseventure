export function BeforeAfterSection() {
  return (
    <section id="how-it-works" className="w-full py-32 bg-slate-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            From vague signals to structured opportunities
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            PoseVenture transforms early signals into clear opportunities you can confidently pursue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-4">
              Before
            </div>
            <div className="rounded-2xl border border-slate-300 bg-slate-100 shadow-sm p-8 space-y-5 opacity-80">
              <StateItem label="Vague signals" variant="before" />
              <StateItem label="Scattered observations" variant="before" />
              <StateItem label="Unclear opportunities" variant="before" />
              <StateItem label="No structure" variant="before" />
            </div>
          </div>

          <div className="space-y-4">
            <div className="text-sm font-medium text-indigo-600 uppercase tracking-wider mb-4">
              After using PoseVenture
            </div>
            <div className="rounded-2xl border-2 border-indigo-300 bg-white shadow-md p-8 space-y-5">
              <StateItem label="Clear target user" variant="after" />
              <StateItem label="Structured problem" variant="after" />
              <StateItem label="Strategic insight" variant="after" />
              <StateItem label="Defined opportunity" variant="after" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StateItem({ label, variant }: { label: string; variant: "before" | "after" }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`w-2.5 h-2.5 rounded-full ${
          variant === "before" ? "bg-slate-400" : "bg-indigo-600"
        }`}
      />
      <span
        className={`text-base ${
          variant === "before" ? "text-slate-600" : "text-slate-900 font-semibold"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
