"use client";
import Image from "next/image";
import Link from "next/link";
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Partners from "@/components/Partners";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/redux/features/productSlice";
import { RootState, AppDispatch } from "@/redux/store";
import { useEffect } from "react";

// const products = [
//   {
//     id: 1,
//     image: "/images/device-1.png",
//     name: "Eco-Crutch",
//     description:
//       "A sustainable crutch made from recycled electronic waste, providing comfort and stability while reducing environmental impact.",
//   },
//   {
//     id: 2,
//     image: "/images/device-2.png",
//     name: "Walker Pro",
//     description:
//       "Innovative walker designed with recycled materials, offering enhanced mobility and support for users with walking difficulties.",
//   },
//   {
//     id: 3,
//     image: "/images/device-3.png",
//     name: "Smart Prosthetic Arm",
//     description:
//       "Advanced prosthetic arm crafted from e-waste materials, featuring modern design and improved functionality for amputees.",
//   },
//   {
//     id: 4,
//     image: "/images/device-4.png",
//     name: "Eco-Wheelchair",
//     description:
//       "Sustainable wheelchair built with recycled components, ensuring accessibility while promoting environmental responsibility.",
//   },
//   {
//     id: 5,
//     image: "/images/device-5.png",
//     name: "Assistive Glove",
//     description:
//       "Smart glove designed to assist with daily tasks, made from repurposed electronic materials for enhanced grip and dexterity.",
//   },
//   {
//     id: 6,
//     image: "/images/device-6.png",
//     name: "Mobility Scooter",
//     description:
//       "Electric mobility scooter constructed with recycled parts, providing independence and freedom of movement for users.",
//   },
// ];

export default function ProductsPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { products } = useSelector((state: RootState) => state.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <>
      <Banner />
      <Navbar />
      <main className="min-h-screen">
        {/* Thumbnail Image */}
        <div className="w-full h-[500px] relative">
          <Image
            src="/images/company.jpg"
            alt="Products Thumbnail"
            fill
            className="object-cover object-[center_10%]"
          />
        </div>

        {/* Content Section */}
        <div className="w-full px-20 py-20 bg-white">
          <div className="w-full max-w-7xl mx-auto space-y-16">
            <div className="w-full max-w-7xl mx-auto flex items-start space-x-16 px-10 py-20">
              <div className="flex-1">
                <h2 className="w-3/4 text-4xl font-bold text-[#348E38] leading-tight">
                  E-waste into Assistive Products
                </h2>
              </div>

              {/* Right part - Paragraph and statistics */}
              <div className="flex-1 space-y-8">
                <h3 className="text-[#FF7900] font-semibold text-md">Why ?</h3>
                {/* Paragraph */}
                <p className="text-[#3C4049] text-sm leading-relaxed">
                  At GEUZA, we champion a circular economy by merging technology
                  and sustainability to transform e-waste into smart, affordable
                  mobility aids crutches, walkers, and prosthetics that empower
                  people with disabilities.
                </p>
              </div>
            </div>
            {/* Products Title */}
            <div className="text-center">
              <h1 className="w-1/5 mx-auto text-4xl font-bold text-[#348E38] mb-4">
                Some of the devices
              </h1>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 gap-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="border border-[#EBECEF] rounded-2xl p-6 h-[250px] flex items-center space-x-6"
                >
                  {/* Product Image */}
                  <div className="w-32 h-[246px] flex-shrink-0 py-1">
                    <Image
                      src={product.thumbnailImage}
                      alt={product.name}
                      width={128}
                      height={246}
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 flex flex-col justify-between h-full">
                    <div>
                      <h3 className="text-xl font-bold text-black mb-3">
                        {product.name}
                      </h3>
                      <p className="text-[#3C4049] text-sm leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    <Link
                      href={`/shop`}
                      className="text-[#348E38] underline font-medium text-sm hover:text-[#2a6f2e] transition-colors"
                    >
                      View in store
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Partners />
      <Footer />
    </>
  );
}
