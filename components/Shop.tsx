"use client";

import { ShoppingCart, Headphones, Truck, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { IoArrowForward } from "react-icons/io5";

const devices = [
  {
    image: "/images/device-1.png",
    title: "Eco-Crutch",
    status: "In stock",
  },
  {
    image: "/images/device-2.png",
    title: "Walker Pro",
    status: "Out of stock",
  },
  {
    image: "/images/device-3.png",
    title: "Smart Prosthetic Arm",
    status: "In stock",
  },
  {
    image: "/images/device-4.png",
    title: "Eco-Wheelchair",
    status: "In stock",
  },
  {
    image: "/images/device-5.png",
    title: "Assistive Glove",
    status: "Out of stock",
  },
];

const support = [
  {
    icon: Headphones,
    title: "Online Support",
    desc: "24/7 assistance for all your needs.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    desc: "Quick and safe shipping worldwide.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payment",
    desc: "Your transactions are protected.",
  },
];

export default function Shop() {
  return (
    <section className="w-full px-20 py-20 bg-white">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center text-center space-y-8">
        {/* Section Header */}
        <div className="flex flex-col items-center space-y-4 w-1/2 mx-auto">
          <span className="bg-[#FF79001A] text-[#FF7900] text-xs font-medium px-4 py-2 rounded-full uppercase">
            Shop
          </span>
          <h2 className="text-5xl font-bold text-[#348E38] leading-tight">
            Assistive devices.
          </h2>
        </div>

        {/* Swiper Carousel */}
        <div className="w-full pt-10 pb-8">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={40}
            slidesPerView={3.5}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            // navigation
            grabCursor
            style={{ paddingBottom: 40 }}
          >
            {devices.map((device, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-[#F1F2F4] space-x-3 flex flex-col justify-between h-[380px] w-[300px] mx-auto shadow-sm p-6 relative">
                  <div className="w-full h-full relative mb-4">
                    <Image
                      src={device.image}
                      alt={device.title}
                      fill
                      className="object-contain rounded-xl"
                    />
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex flex-col items-start">
                      <span className="text-black font-semibold text-lg">
                        {device.title}
                      </span>
                      <span
                        className={`text-xs mt-1 ${
                          device.status === "In stock"
                            ? "text-[#348E38]"
                            : "text-gray-400"
                        }`}
                      >
                        {device.status}
                      </span>
                    </div>
                    <button className="bg-white rounded-full p-3 shadow hover:bg-gray-100 transition-colors">
                      <ShoppingCart size={20} className="text-black" />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Support/Info Section */}
        <div className="w-full border border-black/10 flex items-center justify-between px-8 py-6 mt-8 bg-white">
          {support.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-4 flex-1 justify-center"
            >
              <item.icon size={32} className="text-[#348E38]" />
              <div className="flex flex-col items-start">
                <span className="text-black font-light text-base">
                  {item.title}
                </span>
                <span className="text-xs text-[#666666] mt-1">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button className="flex items-center space-x-2 bg-[#FF7900] text-white px-6 py-3 rounded-[5px] hover:bg-[#e66a00] transition-colors">
            <span>Explore more</span>
            <IoArrowForward size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
