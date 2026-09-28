"use client";

import { Quote } from "lucide-react";
import { testimonials } from "@/lib/site-data";

export function Testimonials() {
  const t = testimonials[0];

  return (
    <section
      id="blog"
      className="relative overflow-hidden bg-[#0e1117] py-20 text-[#fbf6ec] sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 lg:items-center">
          {/* Image left */}
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-lg border border-[#d29951]/30">
              { }
              <img
                src={t.image}
                alt={t.author}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>

          {/* Quote right */}
          <div className="lg:col-span-7">
            <Quote className="h-12 w-12 text-[#d29951]" />
            <blockquote className="mt-6 font-serif text-2xl font-medium leading-snug sm:text-3xl lg:text-4xl">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <div>
                <div className="font-semibold">{t.author}</div>
                <div className="text-sm text-[#fbf6ec]/60">{t.detail}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
