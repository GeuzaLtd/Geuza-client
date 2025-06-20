"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const testimonials = [
  {
    logo: "/images/logo.png",
    name: "Jane Doe",
    message:
      "Geuza's devices have changed my life. The quality and affordability are unmatched!",
  },
  {
    logo: "/images/logo.png",
    name: "John Smith",
    message:
      "I love the mission behind Geuza. Their products are both sustainable and empowering.",
  },
  {
    logo: "/images/logo.png",
    name: "Amina Mwangi",
    message:
      "Thanks to Geuza, my son now has access to a prosthetic that fits and works perfectly.",
  },
  {
    logo: "/images/logo.png",
    name: "Samuel Kimani",
    message:
      "The support team was amazing and the delivery was fast. Highly recommend!",
  },
  {
    logo: "/images/logo.png.png",
    name: "Fatima Ali",
    message:
      "It feels good to know my purchase also helps the environment. Geuza is the future!",
  },
];

export default function Testimonial() {
  return (
    <section className="w-full px-20 py-20 bg-white">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center text-center space-y-8">
        {/* Section Header */}
        <div className="flex flex-col items-center space-y-4 w-1/2 mx-auto">
          <span className="bg-[#FF79001A] text-[#FF7900] text-xs font-medium px-4 py-2 rounded-full uppercase">
            Testimonial
          </span>
          <h2 className="text-5xl font-bold text-[#348E38] leading-tight">
            What our clients say.
          </h2>
        </div>

        {/* Swiper Carousel */}
        <div className="w-full pt-10 pb-8">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={32}
            slidesPerView={3}
            loop={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            grabCursor
            centeredSlides
            style={{ paddingBottom: 40 }}
          >
            {testimonials.map((testimonial, idx) => (
              <SwiperSlide key={idx}>
                {({ isActive, isPrev, isNext }) => (
                  <div
                    className={`border border-[#EBECEF] rounded-xl bg-white flex flex-col items-start justify-between w-[376px] h-[159.59px] mx-auto p-6 transition-all duration-300
                      ${isActive ? "translate-y-8 z-10" : "translate-y-0 z-0"}
                    `}
                  >
                    {/* Header: logo + name */}
                    <div className="flex items-start space-x-3 mb-2">
                      <div className="w-8 h-8 overflow-hidden">
                        <Image
                          src={testimonial.logo}
                          alt={testimonial.name}
                          width={32}
                          height={32}
                          className="object-cover"
                        />
                      </div>
                      <span className="text-black font-bold text-base">
                        {testimonial.name}
                      </span>
                    </div>
                    {/* Message */}
                    <p className="text-black/70 text-sm font-light text-left">
                      {testimonial.message}
                    </p>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
