"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-b from-slate-50 to-white py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 leading-tight">
              Find a venture opportunity worth building.
            </h1>
            <div className="text-lg text-slate-600 leading-relaxed space-y-4">
              <p className="font-medium text-xl">Most founders do not lack ideas.</p>
              <p className="font-medium text-xl">They lack confidence to commit.</p>
              <p>
                PoseVenture helps turn weak signals, rough ideas, and market observations into structured venture opportunities.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                asChild
                className="px-8 py-6 text-base rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium"
              >
                <Link href="/discover">Start Venture Discovery</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-base rounded-xl border-slate-300 text-slate-700 font-medium hover:bg-slate-100"
              >
                See Example
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl border-2 border-slate-200 bg-white p-8 shadow-xl">
              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
                  <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                </div>
                
                <div className="space-y-4">
                  <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Input Signal
                  </div>
                  <div className="rounded-lg bg-slate-50 border border-slate-200 p-4">
                    <p className="text-sm text-slate-600 italic">
                      "I notice parents struggling with AI homework tools..."
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center py-2">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent"></div>
                  <div className="mx-4 text-indigo-600 font-bold">↓</div>
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent"></div>
                </div>

                <div className="space-y-4">
                  <div className="text-xs font-medium text-indigo-600 uppercase tracking-wider">
                    Structured Opportunity
                  </div>
                  <div className="rounded-lg bg-indigo-50 border-2 border-indigo-200 p-4 space-y-3">
                    <div className="flex items-start gap-2">
                      <div className="text-xs font-semibold text-indigo-900 min-w-[60px]">Target:</div>
                      <div className="text-xs text-indigo-900">Parents of K-6 students</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="text-xs font-semibold text-indigo-900 min-w-[60px]">Problem:</div>
                      <div className="text-xs text-indigo-900">Want AI help without dependency</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="text-xs font-semibold text-indigo-900 min-w-[60px]">Insight:</div>
                      <div className="text-xs text-indigo-900">Balance of support + autonomy</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
