"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Linkedin, Twitter, Instagram } from "lucide-react";
import "swiper/css";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
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
    image: "/images/noelle.jpeg",
    name: "Marie Noëlle Kanyamuneza",
    position: "Technical Manager",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
  },
  {
    image: "/images/ariane.jpeg",
    name: "Ariane MUKESHIMANA",
    position: "Operations Manager",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
  },
  {
    image: "/images/toussaint.jpg",
    name: "Toussaint MANZI",
    position: "Software Engineer",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
  },
];

export default function Team() {
  return (
    <section className="w-full px-20 py-20 bg-white">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center text-center space-y-8">
        {/* Section Header */}
        <div className="flex flex-col items-center space-y-4 w-1/2 mx-auto">
          <span className="bg-[#FF79001A] text-[#FF7900] text-xs font-medium px-4 py-2 rounded-full uppercase">
            Our team
          </span>
          <h2 className="text-5xl font-bold text-[#348E38] leading-tight">
            The people behind GEUZA.
          </h2>
        </div>

        {/* Swiper Carousel */}
        <div className="w-full pt-10 pb-8">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={32}
            slidesPerView={4}
            loop={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            grabCursor
            centeredSlides={false}
            style={{ paddingBottom: 40 }}
          >
            {team.map((person, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex flex-col items-center w-[280px] mx-auto">
                  <div className="w-[280px] h-[280px] relative mb-4">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      className="object-cover object-[center_30%] rounded-[12px]"
                    />
                  </div>
                  <span className="text-black font-semibold text-base mb-1">
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
