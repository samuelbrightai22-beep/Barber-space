"use client";

import { services } from "@/lib/site-data";
import { Check } from "lucide-react";

const includedFeatures = [
  "Walk-ins welcome, appointments preferred",
  "Hot towel finish on every cut",
  "Straight razor detailing on request",
  "Same barber every time, if you book ahead",
];

export function BookingCTA() {
  return (
    <section
      id="book"
      className="bg-secondary/30 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Pricing table */}
        <div id="pricing" className="mb-20 scroll-mt-24">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Pricing
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold sm:text-4xl">
              The menu, plain and simple
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground">
              No hidden fees, no &ldquo;consultation surcharge&rdquo;. The price
              on the menu is the price you pay at the chair.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.slug}
                className="flex items-center justify-between rounded-lg border border-border bg-card p-5 transition-shadow hover:shadow-md"
              >
                <div className="pr-4">
                  <h3 className="font-serif text-lg font-semibold">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {s.description.split(".")[0]}.
                  </p>
                </div>
                <div className="font-serif text-2xl font-bold text-primary">
                  {s.price}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            {includedFeatures.map((f) => (
              <span key={f} className="inline-flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-primary" />
                {f}
              </span>
            ))}
          </div>
        </div>

        {/* Booking CTA */}
        <div className="relative overflow-hidden rounded-2xl bg-[#0e1117] px-6 py-14 text-center text-[#fbf6ec] sm:px-12 sm:py-16">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, #d29951 0%, transparent 50%), radial-gradient(circle at 80% 80%, #b5732a 0%, transparent 50%)",
            }}
            aria-hidden
          />
          <div className="relative">
            <h2 className="font-serif text-3xl font-bold sm:text-4xl">
              Pick a day, pick a barber, sit down
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-[#fbf6ec]/80">
              Booking takes less than a minute. Choose your barber, choose
              your service, pick a time. We will have the chair ready.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="tel:+12125550148"
                className="inline-flex h-12 items-center justify-center rounded-md border border-[#d29951] bg-[#d29951] px-6 text-sm font-semibold text-[#0e1117] transition-colors hover:bg-[#bd8838]"
              >
                Book a Chair
              </a>
              <a
                href="tel:+12125550148"
                className="inline-flex h-12 items-center justify-center rounded-md border border-[#fbf6ec]/30 px-6 text-sm font-semibold text-[#fbf6ec] transition-colors hover:border-[#fbf6ec]/60"
              >
                Call the shop
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
