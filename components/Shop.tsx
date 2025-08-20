"use client";

import { ShoppingCart, Headphones, Truck, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { IoArrowForward } from "react-icons/io5";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/redux/features/productSlice";
import { RootState, AppDispatch } from "@/redux/store";

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
  const dispatch = useDispatch<AppDispatch>();
  const { products } = useSelector((state: RootState) => state.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <section className="w-full px-4 md:px-20 py-16 md:py-20 bg-white">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center text-center space-y-8">
        {/* Section Header */}
        <div className="flex flex-col items-center space-y-4 w-full md:w-1/2 mx-auto">
          <span className="bg-[#FF79001A] text-[#FF7900] text-xs font-medium px-4 py-2 rounded-full uppercase">
            Shop
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#348E38] leading-tight">
            Assistive devices.
          </h2>
        </div>

        {/* Swiper Carousel */}
        <div className="w-full pt-6 md:pt-10 pb-8">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={16}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            grabCursor
            style={{ paddingBottom: 40 }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {products.map((device, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-[#F1F2F4] flex flex-col justify-between h-[340px] md:h-[380px] w-[90vw] max-w-xs mx-auto shadow-sm p-4 md:p-6 relative">
                  <div className="w-full h-40 md:h-full relative mb-4">
                    <Image
                      src={device.thumbnailImage}
                      alt={device.name}
                      fill
                      className="object-contain rounded-xl"
                    />
                  </div>
                  <div className="flex items-start justify-between mt-4">
                    <div className="flex flex-col items-start">
                      <span className="text-black text-start font-semibold text-lg">
                        {device.name}
                      </span>
                      <span
                        className={`text-xs mt-1 ${
                          device.minimum > 0 ||
                          device.name.includes("Coming soon")
                            ? "text-[#348E38]"
                            : "text-gray-400"
                        }`}
                      >
                        {device.name.includes("Coming soon")
                          ? "Coming soon"
                          : device.minimum > 0
                          ? "In stock"
                          : "Out of stock"}
                      </span>
                    </div>
                    <button className="bg-white rounded-full p-2 md:p-3 shadow hover:bg-gray-100 transition-colors">
                      <ShoppingCart size={20} className="text-black" />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Support/Info Section */}
        <div className="w-full border border-black/10 flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-8 py-6 mt-8 bg-white space-y-4 md:space-y-0 md:space-x-0">
          {support.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center  space-x-4 flex-1 justify-center w-full md:w-auto"
            >
              <item.icon
                size={28}
                className="text-[#348E38] md:w-8 md:h-8 w-7 h-7"
              />
              <div className="flex flex-col items-start">
                <span className="text-black font-light text-sm md:text-base">
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
