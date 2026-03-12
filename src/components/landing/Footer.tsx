import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-slate-300 py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">PoseVenture</h3>
            <p className="text-slate-400 leading-relaxed max-w-md">
              A venture opportunity discovery system that helps founders transform weak signals into structured opportunities worth building.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Product
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/discover"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Discover
                </Link>
              </li>
              <li>
                <span className="text-slate-500">Analysis (coming soon)</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400">© 2026 PoseVenture</p>
            <div className="flex gap-8">
              <Link href="/privacy" className="text-sm text-slate-400 hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-sm text-slate-400 hover:text-white transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
