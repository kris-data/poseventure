"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-slate-200 backdrop-blur-sm bg-white/95">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="text-xl font-bold text-slate-900">PoseVenture</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <button
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              onClick={() => {
                document.getElementById("why")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Why
            </button>
            <button
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              onClick={() => {
                document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              How It Works
            </button>
            <button
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              onClick={() => {
                document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Pricing
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors hidden sm:block">
              See Example
            </button>
            <Button asChild className="px-6 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm">
              <Link href="/discover">Start Venture Discovery</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
