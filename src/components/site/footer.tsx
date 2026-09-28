"use client";

import { useState } from "react";
import {
  Scissors,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  ArrowUp,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { services, team, navItems } from "@/lib/site-data";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast({
      title: "You're on the list",
      description: "Check your inbox for a confirmation from Brass & Blade.",
    });
    setEmail("");
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="border-t border-border bg-secondary/40"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="space-y-4">
            <a
              href="#home"
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
            <p className="text-sm text-muted-foreground leading-relaxed">
              A proper barbershop on Mulberry Street since 2014. Five chairs,
              six days a week, and the kind of cut you keep coming back for.
            </p>
            <div className="space-y-1 pt-2 text-sm">
              <a
                href="tel:+12125550148"
                className="flex items-center gap-2 text-foreground hover:text-primary"
              >
                <Phone className="h-4 w-4 text-primary" />
                (212) 555-0148
              </a>
              <a
                href="mailto:hello@brassandblade.co"
                className="flex items-center gap-2 text-foreground hover:text-primary"
              >
                <Mail className="h-4 w-4 text-primary" />
                hello@brassandblade.co
              </a>
            </div>
            <div className="flex gap-3 pt-2">
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: Facebook, label: "Facebook" },
                { Icon: Twitter, label: "Twitter" },
                { Icon: Youtube, label: "YouTube" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#book"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Book a Chair
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">
              Our Services
            </h3>
            <ul className="space-y-2 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <a
                    href={`#services`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Barbers + newsletter */}
          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-lg font-semibold mb-4">
                Our Barbers
              </h3>
              <ul className="space-y-2 text-sm">
                {team.map((m) => (
                  <li key={m.slug}>
                    <a
                      href="#team"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {m.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold mb-4">
                Join the List
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Seasonal tips, shop news, and the occasional chair discount.
                No spam.
              </p>
              <form onSubmit={handleJoin} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Email address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-background"
                />
                <Button
                  type="submit"
                  size="icon"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                  aria-label="Join the list"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Brass &amp; Blade Barbershop. All
            rights reserved.
          </p>
          <button
            onClick={scrollTop}
            className="flex items-center gap-2 text-xs font-medium text-foreground hover:text-primary"
            aria-label="Back to top"
          >
            Back to top
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border">
              <ArrowUp className="h-3 w-3" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
