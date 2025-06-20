"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

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
    <div className="min-h-screen flex">
      {/* Left: Logo and Swiper */}
      <div className="flex flex-col items-center justify-center w-1/2 bg-white p-12 relative">
        <div className="absolute top-8 left-8">
          <Image
            src="/images/logo.png"
            alt="Geuza Logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </div>
        <div className="flex-1 flex items-center justify-center w-full">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            className="w-[400px] h-[400px]"
          >
            {deviceImages.map((img, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex items-center justify-center w-full h-full">
                  <Image
                    src={img}
                    alt={`Device ${idx + 1}`}
                    width={500}
                    height={500}
                    className="object-contain rounded-xl"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex items-center space-x-6">
          {/* Three rounded photos */}
          <div className="flex items-center -space-x-3 border border-[#CBEA7B] rounded-full p-2">
            <div className="w-[45px] h-[45px] rounded-full overflow-hidden">
              <Image
                src="/images/1.webp"
                alt="Person 1"
                width={45}
                height={45}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[45px] h-[45px] rounded-full overflow-hidden">
              <Image
                src="/images/2.jpeg"
                alt="Person 2"
                width={45}
                height={45}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[45px] h-[45px] rounded-full overflow-hidden">
              <Image
                src="/images/3.png"
                alt="Person 3"
                width={45}
                height={45}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="text-black text-base font-medium">
            65+ Lives Empowered
          </div>
        </div>
      </div>
      {/* Right: Form */}
      <div className="flex-1 flex items-center justify-center bg-white">
        <div className="w-full max-w-md p-8">{children}</div>
      </div>
    </div>
  );
}
