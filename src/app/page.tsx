import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Team } from "@/components/sections/team";
import { Testimonials } from "@/components/sections/testimonials";
import { BookingCTA } from "@/components/sections/booking-cta";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <WhyChooseUs />
        <Team />
        <Testimonials />
        <BookingCTA />
      </main>
      <Footer />
    </div>
  );
}
