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
        <div className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] relative">
          <Image
            src="/images/company.jpg"
            alt="Products Thumbnail"
            fill
            className="object-cover object-[center_10%]"
          />
        </div>

        {/* Content Section */}
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
          <div className="w-full max-w-7xl mx-auto space-y-8 sm:space-y-12 md:space-y-16">
            <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-start lg:space-x-16 space-y-6 lg:space-y-0 px-4 sm:px-6 md:px-10 py-8 sm:py-12 md:py-16 lg:py-20">
              <div className="flex-1">
                <h2 className="w-full lg:w-3/4 text-2xl sm:text-3xl md:text-4xl font-bold text-[#348E38] leading-tight">
                  E-waste into Assistive Products
                </h2>
              </div>

              {/* Right part - Paragraph and statistics */}
              <div className="flex-1 space-y-4 sm:space-y-6 md:space-y-8">
                <h3 className="text-[#FF7900] font-semibold text-sm sm:text-md">
                  Why ?
                </h3>
                {/* Paragraph */}
                <p className="text-[#3C4049] text-sm sm:text-base leading-relaxed">
                  At GEUZA, we champion a circular economy by merging technology
                  and sustainability to transform e-waste into smart, affordable
                  mobility aids crutches, walkers, and prosthetics that empower
                  people with disabilities.
                </p>
              </div>
            </div>
            {/* Products Title */}
            <div className="text-center">
              <h1 className="w-full sm:w-4/5 md:w-3/5 lg:w-1/5 mx-auto text-2xl sm:text-3xl md:text-4xl font-bold text-[#348E38] mb-4">
                Some of the devices
              </h1>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="border border-[#EBECEF] rounded-xl sm:rounded-2xl p-4 sm:p-6 h-auto sm:h-[250px] flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6"
                >
                  {/* Product Image */}
                  <div className="w-full sm:w-32 h-48 sm:h-[246px] flex-shrink-0 py-1">
                    <Image
                      src={product.thumbnailImage}
                      alt={product.name}
                      width={128}
                      height={246}
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 flex flex-col justify-between h-full space-y-3 sm:space-y-0">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-black mb-2 sm:mb-3">
                        {product.name}
                      </h3>
                      <p className="text-[#3C4049] text-sm leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    <Link
                      href={`/shop`}
                      className="text-[#348E38] underline font-medium text-sm hover:text-[#2a6f2e] transition-colors self-start sm:self-auto"
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
