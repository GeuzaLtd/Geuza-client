"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState, AppDispatch } from "@/redux/store";
import { fetchPartners } from "@/redux/features/partnerSlice";

export default function Partners() {
  const dispatch = useDispatch<AppDispatch>();
  const token = useSelector((state: RootState) => state.auth.token);
  const { partners } = useSelector((state: RootState) => state.partners);

  // Duplicate partners for better sliding experience
  const partnersToDisplay = [...partners, ...partners];

  useEffect(() => {
    dispatch(fetchPartners({ token: token || "" }));
  }, [dispatch, token]);
  return (
    <section className="w-full px-4 md:px-20 py-8 md:py-10 bg-white">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between md:space-x-8 space-y-4 md:space-y-0">
        {/* Section Title */}
        <span className="text-[#3C4049] text-sm font-light whitespace-nowrap mb-2 md:mb-0">
          Trusted and Funded by
        </span>
        {/* Swiper Carousel */}
        <div className="flex-1 min-w-0 w-full">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={16}
            breakpoints={{
              0: { slidesPerView: 1.5 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop={partnersToDisplay.length > 3}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            grabCursor
            centeredSlides={false}
          >
            {partnersToDisplay.map((partner, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex items-center justify-center h-20 md:h-32 w-full">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={120}
                    height={0}
                    className="object-contain max-h-12 md:max-h-16"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
