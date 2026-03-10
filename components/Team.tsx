"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

const team = [
  {
    image: "/images/nicole.jpeg",
    name: "Aline Nicole UWAMARIYA",
    position: "Co-Founder & CEO",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
  },
  {
    image: "/images/abdul.jpeg",
    name: "Abdulrahman NIYONIZEYE",
    position: "Co-Founder & Business Growth Lead",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
  },
  {
    image: "/images/innocent_picture.png",
    name: "Innocent MBONYINSHUTI",
    position: "Prosthetist and Orthotist",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
  },
  {
    image: "/images/ariane.jpeg",
    name: "Ariane MUKESHIMANA",
    position: "Operations Manager Operation & Administrative Manager",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
  },
  {
    image: "/images/rebero_picture.png",
    name: "William REBERO",
    position: "Accountant Consultant",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
  },
];

export default function Team() {
  return (
    <section className="w-full px-4 md:px-20 py-16 md:py-20 bg-white">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center text-center space-y-8">
        {/* Section Header */}
        <div className="flex flex-col items-center space-y-4 w-full md:w-1/2 mx-auto">
          <span className="bg-[#FF79001A] text-[#FF7900] text-xs font-medium px-4 py-2 rounded-full uppercase">
            Our team
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#348E38] leading-tight">
            The people behind GEUZA.
          </h2>
        </div>

        {/* Swiper Carousel */}
        <div className="w-full pt-6 md:pt-10 pb-8">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={16}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            loop={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            grabCursor
            centeredSlides={false}
            style={{ paddingBottom: 40 }}
          >
            {team.map((person, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex flex-col items-center w-full max-w-xs md:w-[280px] mx-auto">
                  <div className="w-full h-56 md:w-[280px] md:h-[280px] relative mb-4">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      className="object-cover object-[center_30%] rounded-[12px]"
                    />
                  </div>
                  <span className="text-black font-semibold text-sm md:text-base mb-1">
                    {person.name}
                  </span>
                  <span className="text-[#3C4049] text-xs mb-3">
                    {person.position}
                  </span>
                  <div className="flex items-center space-x-3 mt-2">
                    <Link
                      href={person.linkedin}
                      className="border border-[#EBECEF] rounded-full p-2 hover:bg-gray-50 transition-colors"
                    >
                      <FaLinkedin size={14} className="text-black" />
                    </Link>
                    <Link
                      href={person.twitter}
                      className="border border-[#EBECEF] rounded-full p-2 hover:bg-gray-50 transition-colors"
                    >
                      <FaSquareXTwitter size={14} className="text-black" />
                    </Link>
                    <Link
                      href={person.instagram}
                      className="border border-[#EBECEF] rounded-full p-2 hover:bg-gray-50 transition-colors"
                    >
                      <AiFillInstagram size={14} className="text-black" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
