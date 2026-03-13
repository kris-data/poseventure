export function BeforeAfterExampleSection() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            From vague idea → real opportunity
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="space-y-4">
            <div className="inline-block px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-xs font-medium">
              Before
            </div>
            <div className="rounded-2xl border-2 border-slate-300 bg-slate-50 p-8">
              <div className="text-sm font-medium text-slate-500 mb-3">Vague idea</div>
              <p className="text-lg text-slate-700 leading-relaxed">
                "I want to build something in AI education."
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-medium">
              Sharpened
            </div>
            <div className="rounded-2xl border-2 border-indigo-300 bg-white p-8 shadow-lg">
              <div className="text-sm font-medium text-indigo-600 mb-3">Real opportunity</div>
              <p className="text-lg text-slate-900 leading-relaxed font-medium mb-6">
                "AI learning mentor for parents of elementary students who want AI help without losing children's independent thinking habits."
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-xs text-indigo-700">
                  • clearer target
                </span>
                <span className="px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-xs text-indigo-700">
                  • sharper problem
                </span>
                <span className="px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-xs text-indigo-700">
                  • stronger opportunity angle
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
