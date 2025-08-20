"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Link from "next/link";

const deviceImages = [
  "/images/device-1.png",
  "/images/device-2.png",
  "/images/device-3.png",
  "/images/device-4.png",
  "/images/device-5.png",
  "/images/device-6.png",
  "/images/device-7.png",
  "/images/device-8.webp",
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left: Logo and Swiper */}
      <div className="w-full md:w-1/2 bg-white p-6 md:p-12 flex flex-col items-center relative">
        {/* Logo always visible at the top */}
        <div className="w-full flex justify-start mb-8 md:mb-0">
          <Link href="/" className="block">
            <Image
              src="/images/logo.png"
              alt="Geuza Logo"
              width={120}
              height={40}
              className="object-contain"
            />
          </Link>
        </div>
        {/* Swiper and extra images/text only on md+ */}
        <div className="hidden md:flex-1 md:flex md:flex-col md:items-center md:justify-center w-full">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            className="w-60 h-60 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px]"
          >
            {deviceImages.map((img, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex items-center justify-center w-full h-full">
                  <Image
                    src={img}
                    alt={`Device ${idx + 1}`}
                    width={320}
                    height={320}
                    className="object-contain rounded-xl"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex items-center space-x-4 md:space-x-6 mt-6 md:mt-0">
            {/* Three rounded photos */}
            <div className="flex items-center -space-x-3 border border-[#CBEA7B] rounded-full p-2">
              <div className="w-9 h-9 md:w-[45px] md:h-[45px] rounded-full overflow-hidden">
                <Image
                  src="/images/1.webp"
                  alt="Person 1"
                  width={36}
                  height={36}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-9 h-9 md:w-[45px] md:h-[45px] rounded-full overflow-hidden">
                <Image
                  src="/images/2.jpeg"
                  alt="Person 2"
                  width={36}
                  height={36}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-9 h-9 md:w-[45px] md:h-[45px] rounded-full overflow-hidden">
                <Image
                  src="/images/3.png"
                  alt="Person 3"
                  width={36}
                  height={36}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Text */}
            <div className="text-black text-sm md:text-base font-medium">
              65+ Lives Empowered
            </div>
          </div>
        </div>
      </div>
      {/* Right: Form */}
      <div className="flex-1 flex items-center justify-center bg-white w-full -mt-42 md:mt-0">
        <div className="w-full max-w-md p-4 md:p-8">{children}</div>
      </div>
    </div>
  );
}
