import { AboutUs, Hero, HowItWorks, WhyChooseUs } from "@/components";
import CompanyScroller from "@/components/company-scroller";
import TinyDots from "@/components/core/tiny-dots";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="">
        <div className="w-full">
          <Link href="/" className="py-2 flex items-center">
            {/* <span className="text-xl md:text-2xl xl:text-4xl text-center block my-2 md:my-5 font-bold">Hiring Zen</span> */}
            <Image 
              src="/images/logo.svg" 
              alt="Hiring Zen" 
              width={100} 
              height={100} 
              className="h-16 sm:h-20 w-full"
            />
          </Link>
        </div>
        <div className="layout-wide rounded-3xl relative main overflow-hidden">
          <TinyDots />
          <div className="relative z-10">
            <Hero />
            <AboutUs />
            <WhyChooseUs />
            <HowItWorks />
          </div>

        </div>
      </main>
    </>
  );
}
