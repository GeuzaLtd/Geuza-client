"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { handleWhatsAppInteraction } from "@/utils/func";

const DonatePage: React.FC = () => {
  const handleDonateClick = () => {
    const message =
      "Hi! I'm interested in making a donation to support Geuza's mission. Could you please provide me with donation details?";
    handleWhatsAppInteraction(message);
  };

  return (
    <main className="w-full h-screen">
      <Banner />
      <Navbar />
      {/* First section */}
      <section className="flex flex-col justify-center items-center gap-6 px-6 py-20 max-w-5xl mx-auto">
        <h1 className="text-[40px] font-semibold leading-tight text-foreground">
          Support Mobility for All
        </h1>
        <p className="text-[16px] text-muted-foreground max-w-3xl text-center">
          Your donation directly transforms lives by providing essential
          mobility solutions to those who need them most. Every contribution
          goes 100% toward providing these products directly to beneficiaries,
          creating independence and breaking barriers in communities across the
          region.
        </p>
        <div className="flex items-center gap-4">
          <Button
            onClick={handleDonateClick}
            className="rounded-[12px] bg-[#ff7900] hover:bg-[#e76a00]"
            size="lg"
          >
            Donate Now
          </Button>
          <Link
            href="/company"
            className="rounded-[12px] px-4 py-2 border border-[#348e38] text-[#348e38] bg-transparent hover:border-[#2e7c32] hover:text-[#2e7c32] cursor-pointer"
          >
            Learn Our Mission
          </Link>
        </div>
      </section>

      {/* Second section with background image */}
      <section className="w-full h-[40vh] relative">
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
        <div
          className="absolute bottom-6 right-6 bg-[#348e38]/50 rounded-md p-[15px] hover:bg-[#348e38]/70 cursor-pointer"
          onClick={handleDonateClick}
        >
          <div className="flex items-center gap-4">
            <div className="flex flex-col">
              <span className="text-white text-[16px] font-semibold">
                Chat to Donate
              </span>
              <span className="text-white text-[14px]">
                Quick & secure via WhatsApp
              </span>
            </div>
            <div className="w-[50px] h-[50px] bg-[#348e38] flex items-center justify-center rounded-md cursor-pointer hover:bg-[#2e7c32]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787" />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DonatePage;
