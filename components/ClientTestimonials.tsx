"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Kandabuka Francine",
    role: "Assistive Device Recipient",
    testimonial:
      "Before receiving the crutches from Geuza, moving was very difficult for me. Because I could not afford proper assistive devices, I had to walk with difficulty on one leg, and this often caused severe back pain. Now I am very happy because these crutches will help me move more freely and safely. Geuza is truly bringing solutions to people with disabilities in our community.",
    picture_url: "/images/kandabuka-francine.png",
  },
  {
    name: "Aimable Irihose",
    role: "Executive Director – Rwandan Organization for People with Physical Disabilities and Wheelchair Users",
    testimonial:
      "We are delighted to work with Geuza as a strong and reliable partner. Their initiative to locally produce affordable and improved assistive devices is very important for our community. It addresses the major challenges we face in Rwanda, including limited access, high costs, and poor-quality devices. Geuza's work aligns with the vision of improving accessibility and quality of life for people with disabilities, and we look forward to continuing this valuable partnership.",
    picture_url: "/images/aimable-irihose.png",
  },
  {
    name: "Mpakaniye Mugarura",
    role: "Assistive Device Recipient",
    testimonial:
      "I am very grateful to receive these assistive devices from Geuza. After injuring my back in a fall, moving around especially on slopes, going up or down became very difficult for me. These devices will help me move more safely and with greater confidence. I sincerely thank Geuza for this support, which has brought me great joy and hope.",
    picture_url: "/images/mpakaniye-mugarura.png",
  },
  {
    name: "Munyankindi Paul",
    role: "Assistive Device Recipient",
    testimonial:
      "I am very happy to receive good-quality crutches from Geuza. The wooden crutches I previously used often caused blisters on my hands and made it difficult to walk safely, especially on slopes where I sometimes almost fell. Because I could not afford better ones, moving around was challenging. Now, with these new crutches, I feel safer and more comfortable. I sincerely thank Geuza and encourage other people with disabilities to reach out for support.",
    picture_url: "/images/munyankindi-paul.png",
  },
];

export default function ClientTestimonials() {
  return (
    <section className="w-full bg-white py-16 md:py-24 overflow-hidden">
      {/* Header */}
      <div className="text-center space-y-3 px-4 mb-12 md:mb-16">
        <span className="inline-block bg-[#FF79001A] text-[#FF7900] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full">
          Testimonials
        </span>
        {/* <h2 className="text-3xl md:text-4xl font-bold text-[#3C4049]">
          What people are saying
        </h2> */}
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={24}
        centeredSlides
        loop
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        grabCursor
        pagination={{
          clickable: true,
          bulletClass: "swiper-bullet",
          bulletActiveClass: "swiper-bullet-active",
        }}
        breakpoints={{
          0: { slidesPerView: 1.1 },
          768: { slidesPerView: 1.5 },
          1024: { slidesPerView: 2.2 },
          1280: { slidesPerView: 2.6 },
        }}
        style={{ paddingBottom: "56px" }}
      >
        {testimonials.map((t, idx) => (
          <SwiperSlide key={idx}>
            {({ isActive }) => (
              <div
                className={`
                  flex flex-row bg-white rounded-2xl border border-[#EBECEE] overflow-hidden
                  transition-all duration-500
                  ${isActive ? "shadow-xl scale-100 opacity-100" : "shadow-sm scale-95 opacity-60"}
                `}
              >
                {/* Left: text */}
                <div className="flex-1 p-6 md:p-8 flex flex-col justify-between gap-4">
                  {/* Quote mark */}
                  <span className="text-4xl font-serif text-[#348E38] leading-none select-none">
                    &ldquo;
                  </span>
                  <p className="text-[#3C4049] text-sm leading-relaxed line-clamp-6">
                    {t.testimonial}
                  </p>
                  <div>
                    <p className="font-bold text-[#3C4049] text-sm md:text-base">
                      {t.name}
                    </p>
                    <p className="text-[#FF7900] text-xs mt-0.5 leading-snug">
                      {t.role}
                    </p>
                  </div>
                </div>

                {/* Right: photo */}
                <div className="relative w-28 md:w-40 flex-shrink-0">
                  <Image
                    src={t.picture_url}
                    alt={t.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .swiper-bullet {
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 9999px;
          background: #EBECEE;
          margin: 0 4px;
          cursor: pointer;
          transition: all 0.3s;
        }
        .swiper-bullet-active {
          background: #FF7900;
          width: 24px;
        }
      `}</style>
    </section>
  );
}
