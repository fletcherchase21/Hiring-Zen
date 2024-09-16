import { Hero } from "@/components";
import CompanyScroller from "@/components/company-scroller";
import TinyDots from "@/components/core/tiny-dots";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="">
        <div className="w-full">
          <Link href="/" className="">
            <span className="text-xl md:text-2xl xl:text-4xl text-center block my-2 md:my-5 font-bold">Hiring Zen</span>
          </Link>
        </div>
        <div className="layout-wide rounded-3xl relative main overflow-hidden">
          <TinyDots />
          <div className="relative z-10">
            <Hero />
          </div>

        </div>
      </main>
    </>
  );
}
