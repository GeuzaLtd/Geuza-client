"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useDispatch, useSelector } from "react-redux";
import { fetchTestimonials } from "@/redux/features/testimonialSlice";
import { RootState, AppDispatch } from "@/redux/store";
import { useEffect } from "react";
interface Testimonial {
  id: string;
  authorName: string;
  testimonial: string;
  companyImage: string;
  companyName: string;
}

export default function Testimonial() {
  const dispatch = useDispatch<AppDispatch>();
  const { token } = useSelector((state: RootState) => state.auth);
  const { testimonials } = useSelector(
    (state: RootState) => state.testimonials
  );
  const testimonialsToDisplay = [...testimonials, ...testimonials];
  useEffect(() => {
    dispatch(fetchTestimonials({ token: token || "" }));
  }, [dispatch, token]);
  return (
    <section className="w-full px-4 md:px-20 py-16 md:py-20 bg-white">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center text-center space-y-8">
        {/* Section Header */}
        <div className="flex flex-col items-center space-y-4 w-full md:w-1/2 mx-auto">
          <span className="bg-[#FF79001A] text-[#FF7900] text-xs font-medium px-4 py-2 rounded-full uppercase">
            Testimonials
          </span>
          {/* <h2 className="text-3xl md:text-5xl font-bold text-[#348E38] leading-tight">
            What our clients say.
          </h2> */}
        </div>

        {/* Debug Info
        <div className="text-sm text-gray-500 mb-4">
          Loaded {testimonials.length} testimonials
        </div> */}

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
            }}
            loop={testimonialsToDisplay.length > 3}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            grabCursor
            centeredSlides
            style={{ paddingBottom: 40 }}
          >
            {testimonialsToDisplay.map((testimonial, idx) => (
              <SwiperSlide key={idx}>
                {({ isActive }) => (
                  <div
                    className={`border border-[#EBECEF] rounded-xl bg-white flex flex-col items-start justify-between w-full max-w-xs md:w-[376px] h-auto md:h-[159.59px] mx-auto p-4 md:p-6 transition-all duration-300
                      ${isActive ? "translate-y-8 z-10" : "translate-y-0 z-0"}
                    `}
                  >
                    {/* Header: logo + name */}
                    <div className="flex items-start space-x-3 mb-2">
                      <div className="w-8 h-8 overflow-hidden">
                        <Image
                          src={testimonial.companyImage}
                          alt={testimonial.companyName}
                          width={32}
                          height={32}
                          className="object-cover"
                        />
                      </div>
                      <span className="text-black font-bold text-sm md:text-base">
                        {testimonial.companyName}
                      </span>
                    </div>
                    {/* Message */}
                    <p className="text-black/70 text-xs md:text-sm font-light text-left">
                      {testimonial.testimonial}
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
