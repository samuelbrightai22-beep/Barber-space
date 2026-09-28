"use client";

import { ArrowRight } from "lucide-react";
import { team } from "@/lib/site-data";

export function Team() {
  return (
    <section id="team" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-end justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Meet the Team
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold sm:text-4xl">
              The hands behind every great cut
            </h2>
            <p className="mt-3 max-w-xl text-base text-muted-foreground">
              Five barbers on the floor, six days a week. Pick one when you
              book or let us pair you with the right chair for what you want
              done.
            </p>
          </div>
          <a
            href="#book"
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
          >
            See the full team <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <article key={m.slug} className="group text-center">
              <div className="relative overflow-hidden rounded-lg border border-border bg-secondary">
                { }
                <img
                  src={m.image}
                  alt={m.name}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-5 font-serif text-xl font-semibold">
                {m.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-primary">
                {m.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {m.bio}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
