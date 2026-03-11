"use client";

import { useState } from "react";
import Image from "next/image";
import { Recycle, HeartHandshake, Users, ChevronDown } from "lucide-react";

const accordionItems = [
  {
    icon: Recycle,
    title: "Sustainability",
    content:
      "We advance a circular innovation model that transforms electronic waste into high-quality, affordable assistive technologies, reducing environmental harm while expanding access to essential support solutions for people living with disabilities, injuries, aging-related conditions, and other long-term health needs.",
  },
  {
    icon: HeartHandshake,
    title: "Inclusion",
    content:
      "GEUZA envisions a future where access to assistive technology is not a privilege but a universal standard, where innovation restores independence, circular solutions protect our planet, and no one is left behind in the progress of technology.",
  },
  {
    icon: Users,
    title: "Innovation",
    content:
      " At the intersection of circular engineering and health technology, electronic waste is transformed into smart assistive devices powered by IoT sensors and intelligent data systems, unlocking new possibilities for rehabilitation, accessibility, and the future of assistive technology.",
  },
];

export default function Story() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full px-4 md:px-20 py-16 md:py-20 bg-white">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center text-center space-y-6">
        {/* Title part */}
        <div className="flex flex-col items-center space-y-4 w-full md:w-1/2 mx-auto">
          <span className="bg-[#FF79001A] text-[#FF7900] text-xs font-medium px-4 py-2 rounded-full uppercase">
            Our story
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#348E38] leading-tight">
            Transforming E-Waste into Empowerment
          </h2>
          <p className="text-[#3C4049] text-base md:max-w-2xl">
             As the digital world grows, so does electronic waste. GEUZA transforms this growing burden into inclusive, sustainable innovation that expands access to essential assistive technologies while protecting our planet.
          </p>
        </div>

        {/* Content part */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between md:space-x-16 pt-10 md:pt-20 space-y-10 md:space-y-0">
          {/* Left: Accordions */}
          <div className="flex-1 w-full md:w-auto space-y-4">
            {accordionItems.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-[#FF790033] p-4 rounded-[12px]">
                      <item.icon size={20} className="text-[#FF7900]" />
                    </div>
                    <span className="text-[#348E38] font-semibold text-lg">
                      {item.title}
                    </span>
                  </div>
                  <ChevronDown
                    size={24}
                    className={`text-gray-500 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-5 pb-5 text-left">
                    <p className="text-[#3C4049] text-sm leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right: Image */}
          <div className="flex-1 w-full md:w-auto">
            <div className="w-full h-64 md:h-[400px] relative aspect-square">
              <Image
                src="/images/5.jpg"
                alt="Our Story Image"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
