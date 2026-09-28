"use client";

import { useEffect, useState } from "react";
import { Menu, X, Phone, Scissors } from "lucide-react";
import { navItems } from "@/lib/site-data";
import { Button } from "@/components/ui/button";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    href: string
  ) => {
    e.preventDefault();
    setOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleClick(e, "#home")}
          className="flex items-center gap-2"
          aria-label="Brass and Blade home"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary text-primary">
            <Scissors className="h-5 w-5" />
          </span>
          <span className="font-serif text-xl font-bold tracking-tight">
            BRASS <span className="text-primary">&amp;</span> BLADE
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={(e) => handleClick(e, item.href)}
              className="px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:+12125550148"
            className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary"
          >
            <Phone className="h-4 w-4 text-primary" />
            (212) 555-0148
          </a>
          <Button
            onClick={(e) => handleClick(e, "#book")}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Book a Chair
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={(e) => handleClick(e, item.href)}
                className="px-3 py-2 text-left text-sm font-medium text-foreground/80 hover:text-primary"
              >
                {item.label}
              </button>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-border pt-4">
              <a
                href="tel:+12125550148"
                className="flex items-center gap-2 text-sm font-semibold text-foreground"
              >
                <Phone className="h-4 w-4 text-primary" />
                (212) 555-0148
              </a>
              <Button
                onClick={(e) => {
                  setOpen(false);
                  handleClick(e, "#book");
                }}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Book a Chair
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
