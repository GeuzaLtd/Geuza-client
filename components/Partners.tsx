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
  // interface Partner {
  //   id: string;
  //   name: string;
  //   logo: string;
  //   createdAt: string;
  //   updatedAt: string;
  // }

  const dispatch = useDispatch<AppDispatch>();
  const token = useSelector((state: RootState) => state.auth.token);
  const { partners } = useSelector((state: RootState) => state.partners);
  useEffect(() => {
    dispatch(fetchPartners({ token: token || "" }));
  }, [dispatch, token]);
  return (
    <section className="w-full px-20 py-10 bg-white">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between space-x-8">
        {/* Section Title */}
        <span className="text-[#3C4049] text-sm font-light whitespace-nowrap">
          Trusted and Funded by
        </span>
        {/* Swiper Carousel */}
        <div className="flex-1 min-w-0">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={32}
            slidesPerView={3}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            grabCursor
            centeredSlides={false}
          >
            {partners.slice(0, 5).map((partner, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex items-center justify-center h-32 w-full">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={200}
                    height={0}
                    className="object-contain max-h-16"
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
