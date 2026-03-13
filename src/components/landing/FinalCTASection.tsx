import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FinalCTASection() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col items-center text-center space-y-6">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight max-w-4xl">
            Stop chasing more ideas. Start building the right one.
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            Discover your one big venture opportunity with PoseVenture.
          </p>
          <Button
            size="lg"
            asChild
            className="px-10 py-6 text-lg rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium mt-4"
          >
            <Link href="/discover">Start Venture Discovery</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
