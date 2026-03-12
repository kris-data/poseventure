"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-slate-200">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-slate-900">PoseVenture</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/discover"
              className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
            >
              Discover
            </Link>
            <button
              className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
              onClick={() => {
                document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              How it works
            </button>
            <span className="text-sm font-medium text-slate-400">
              Analysis <span className="text-xs">(coming soon)</span>
            </span>
          </div>

          <Button asChild className="px-6 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm">
            <Link href="/discover">Start Discovery</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
