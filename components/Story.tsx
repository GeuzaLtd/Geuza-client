"use client";

import { useState } from "react";
import Image from "next/image";
import { Recycle, HeartHandshake, Users, ChevronDown } from "lucide-react";

const accordionItems = [
  {
    icon: Recycle,
    title: "Eco-Crutches",
    content:
      "To create a sustainable future by transforming electronic waste into high-quality, affordable assistive devices. We are dedicated to reducing environmental impact while improving accessibility for people with disabilities.",
  },
  {
    icon: HeartHandshake,
    title: "Walkers",
    content:
      "We envision a world where every individual has access to the tools they need to live a full and independent life, and where a circular economy benefits both people and the planet. Our goal is to be a global leader in inclusive innovation.",
  },
  {
    icon: Users,
    title: "Prosthetics",
    content:
      "Our work is made possible by a dedicated community of engineers, designers, volunteers, and partners. Together, we are building a movement that empowers individuals and fosters a sense of belonging and shared purpose.",
  },
];

export default function Story() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full px-20 py-20 bg-white">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center text-center space-y-6">
        {/* Title part */}
        <div className="flex flex-col items-center space-y-4 w-1/2 mx-auto">
          <span className="bg-[#FF79001A] text-[#FF7900] text-xs font-medium px-4 py-2 rounded-full uppercase">
            Our story
          </span>
          <h2 className="text-5xl font-bold text-[#348E38] leading-tight">
            Transforming E-Waste into Empowerment
          </h2>
          <p className="text-[#3C4049] text-base max-w-2xl">
            Born from a vision to address both disability access and
            environmental waste, GEUZA has grown into a movement for inclusive
            circular solutions.
          </p>
        </div>

        {/* Content part */}
        <div className="w-full flex items-center justify-between space-x-16 pt-20">
          {/* Left: Accordions */}
          <div className="flex-1 space-y-4">
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
          <div className="flex-1">
            <div className="w-full h-[400px] relative aspect-square">
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
