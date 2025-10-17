import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";

const DonatePage: React.FC = () => {
  return (
    <main className="w-full h-screen">
      <Banner />
      <Navbar />
      {/* First section */}
      <section className="flex flex-col justify-center items-center gap-6 px-6 py-20 max-w-5xl mx-auto">
        <h1 className="text-[40px] font-semibold leading-tight text-foreground">
          Help us continue our work today
        </h1>
        <p className="text-[16px] text-muted-foreground max-w-2xl text-center">
          Your donation helps fund programs, support partners, and create
          lasting change in the communities we serve.
        </p>
        <div className="flex items-center gap-4">
          <Button
            className="rounded-[12px] bg-[#ff7900] hover:bg-[#e76a00]"
            size="lg"
          >
            Donate Now
          </Button>
          <button className="rounded-[12px] px-4 py-2 border border-[#348e38] text-[#348e38] bg-transparent hover:border-[#2e7c32] hover:text-[#2e7c32]">
            Learn Our Mission
          </button>
        </div>
      </section>

      {/* Second section with background image */}
      <section className="w-full h-[40vh] relative">
        {/* Background - use a decorative gradient fallback if no image available */}
        <div className="absolute inset-0">
          <Image
            src="/images/donate.jpg"
            alt="Donate background"
            fill
            className="object-cover w-full h-full"
            sizes="100vw"
          />
        </div>

        {/* Bottom-right overlay panel */}
        <div className="absolute bottom-6 right-6 bg-[#348e38]/50 rounded-md p-[15px]">
          <div className="flex items-center gap-4">
            <div className="flex flex-col">
              <span className="text-white text-[16px] font-semibold">
                Support a Project
              </span>
              <span className="text-white text-[14px]">
                Give once or monthly
              </span>
            </div>
            <div className="w-[50px] h-[50px] bg-[#348e38] flex items-center justify-center rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DonatePage;
