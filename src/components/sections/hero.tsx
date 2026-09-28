"use client";

import { Phone, Star, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { openingHours } from "@/lib/site-data";

export function Hero() {
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    href: string
  ) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#0e1117] text-[#fbf6ec]"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(14,17,23,0.92) 0%, rgba(14,17,23,0.7) 50%, rgba(14,17,23,0.4) 100%), url('/images/hero-bg-image.jpg')",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left content */}
          <div className="lg:col-span-7">
            <span className="inline-block rounded-full border border-[#d29951]/40 bg-[#d29951]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#d29951]">
              Master Barbershop &middot; Est. 2014
            </span>
            <h1 className="mt-6 font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Sharp cuts.
              <br />
              Honest shaves.
              <br />
              <span className="text-[#d29951]">Real barbers.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#fbf6ec]/80 sm:text-lg">
              A proper barbershop on Mulberry Street since 2014. Five chairs,
              six days a week, and the kind of cut you keep coming back for.
              Walk in, sit down, let us handle the rest.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                size="lg"
                onClick={(e) => handleScroll(e, "#book")}
                className="bg-[#b5732a] text-[#fbf6ec] hover:bg-[#a06621]"
              >
                Book a Chair
              </Button>
              <a
                href="#services"
                onClick={(e) => handleScroll(e, "#services")}
                className="text-sm font-semibold underline-offset-4 hover:underline"
              >
                See the Menu &rarr;
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-[#d29951] text-[#d29951]"
                    />
                  ))}
                </div>
                <span className="text-sm">
                  <strong className="font-semibold">4.9</strong> from{" "}
                  <strong className="font-semibold">1,240</strong> reviews
                </span>
              </div>
              <div className="h-8 w-px bg-[#fbf6ec]/20" />
              <div className="text-sm">
                Trusted by{" "}
                <strong className="font-semibold text-[#d29951]">8,600</strong>{" "}
                regulars
              </div>
            </div>
          </div>

          {/* Right card — opening hours */}
          <div className="lg:col-span-5 lg:col-start-9">
            <div className="rounded-lg border border-[#d29951]/30 bg-[#1b2028]/80 p-6 backdrop-blur">
              <div className="flex items-center gap-2 text-[#d29951]">
                <Clock className="h-5 w-5" />
                <h2 className="font-serif text-xl font-semibold">
                  Opening Hours
                </h2>
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                {openingHours.map((row) => (
                  <li
                    key={row.day}
                    className="flex items-center justify-between border-b border-[#fbf6ec]/10 pb-2 last:border-0 last:pb-0"
                  >
                    <span className="text-[#fbf6ec]/70">{row.day}</span>
                    <span className="font-medium">{row.hours}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 space-y-3 border-t border-[#fbf6ec]/10 pt-4">
                <p className="flex items-center gap-2 text-sm text-[#fbf6ec]/70">
                  <MapPin className="h-4 w-4 text-[#d29951]" />
                  187 Mulberry St, Downtown
                </p>
                <a
                  href="tel:+12125550148"
                  className="flex items-center gap-2 text-sm font-semibold hover:text-[#d29951]"
                >
                  <Phone className="h-4 w-4 text-[#d29951]" />
                  (212) 555-0148
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
