"use client";

import { ArrowRight } from "lucide-react";
import { stats } from "@/lib/site-data";

export function WhyChooseUs() {
  const handleStory = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector("#team")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="bg-secondary/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left text */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Why Choose Us
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold sm:text-4xl">
              The small things that make a real barbershop
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Anyone can put clippers to head. What keeps people coming back is
              everything else. The way we run the shop, the way we talk to you,
              the way the chair feels when you sit down.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We take our time. We ask questions. We remember what you asked
              for last time. That is the difference between a haircut and a
              barbershop, and we have been doing it on Mulberry Street for a
              decade.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-serif text-3xl font-bold text-primary sm:text-4xl">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground sm:text-sm">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#team"
              onClick={handleStory}
              className="mt-8 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
            >
              Read our story <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Right image */}
          <div className="relative">
            <div className="overflow-hidden rounded-lg border border-border">
              { }
              <img
                src="/images/why-choose-us-image.png"
                alt="A barber concentrating on a fresh line up"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-lg border border-border bg-card p-4 shadow-md sm:block">
              <div className="font-serif text-2xl font-bold text-primary">
                10 yrs
              </div>
              <div className="text-xs text-muted-foreground">
                on Mulberry Street
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
