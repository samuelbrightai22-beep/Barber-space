"use client";

import { ArrowRight } from "lucide-react";
import { services } from "@/lib/site-data";

export function Services() {
  const handleSeeAll = (e: React.MouseEvent) => {
    e.preventDefault();
    document
      .querySelector("#pricing")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-end justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              What We Do
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold sm:text-4xl">
              Eight services, one address
            </h2>
          </div>
          <a
            href="#pricing"
            onClick={handleSeeAll}
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
          >
            See all services <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.slice(0, 4).map((s) => (
            <article
              key={s.slug}
              className="group overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-md"
            >
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                {/* Using next/image would require remote config; plain img works for static export */}
                { }
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-serif text-lg font-semibold">
                    {s.title}
                  </h3>
                  <span className="font-serif text-lg font-bold text-primary">
                    {s.price}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
