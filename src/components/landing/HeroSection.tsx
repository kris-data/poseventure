"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroFlowDiagram } from "./HeroFlowDiagram";

export function HeroSection() {
  return (
    <section className="w-full bg-slate-50 py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col items-center text-center space-y-8">
          <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 leading-tight max-w-4xl">
            Find a venture opportunity worth building.
          </h1>
          <div className="text-xl text-slate-600 max-w-3xl leading-relaxed space-y-2">
            <p className="font-medium">Most founders don't lack ideas.</p>
            <p className="font-medium">They lack confidence to commit.</p>
            <p>
              PoseVenture transforms weak signals into structured opportunities—so you can build with clarity.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button
              size="lg"
              asChild
              className="px-8 py-6 text-lg rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium"
            >
              <Link href="/discover">Start Discovery</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg rounded-xl border-slate-300 text-slate-700 font-medium hover:bg-slate-100"
              onClick={() => {
                document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              See How It Works
            </Button>
          </div>

          <HeroFlowDiagram />
        </div>
      </div>
    </section>
  );
}
