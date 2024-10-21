import { AboutUs, CTA, FAQ, Hero, HowItWorks, Overwhelmed, PricingCalculator, WhyChooseUs } from "@/components";
import TinyDots from "@/components/core/tiny-dots";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="layout-wide rounded-3xl relative main overflow-hidden">
        <TinyDots />
        <div className="relative z-10">
          <Hero />
          <AboutUs />
          <WhyChooseUs />
          <Overwhelmed />
          <HowItWorks />
          <CTA />
          <PricingCalculator />
          <FAQ />
        </div>
      </div>
    </>
  );
}
