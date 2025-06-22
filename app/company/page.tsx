import Image from "next/image";
import { Recycle, HeartHandshake, TrendingUp } from "lucide-react";
import Partners from "@/components/Partners";
import Team from "@/components/Team";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";

export default function CompanyPage() {
  return (
    <>
      <Banner />
      <Navbar />
      <main className="min-h-screen">
        {/* Thumbnail Image */}
        <div className="w-full h-[500px] relative">
          <Image
            src="/images/company.jpg"
            alt="Company Thumbnail"
            fill
            className="object-cover object-[center_10%]"
          />
        </div>

        {/* Content Section */}
        <div className="w-full px-48 py-20 bg-white">
          <div className="w-full max-w-7xl mx-auto flex items-start space-x-16 px-10 py-20">
            {/* Left part - Large text */}
            <div className="flex-1">
              <h2 className="text-4xl font-bold text-[#348E38] leading-tight">
                Turning discarded E-waste into assistive products.
              </h2>
            </div>

            {/* Right part - Paragraph and statistics */}
            <div className="flex-1 space-y-8">
              {/* Paragraph */}
              <p className="text-[#3C4049] text-sm leading-relaxed">
                At GEUZA, we believe in a circular economy that empowers
                communities. By transforming e-waste into crutches, walkers, and
                prosthetics, we deliver sustainable, affordable, and impactful
                solutions for people with disabilities.
              </p>
            </div>
          </div>
          <div className="w-full max-w-7xl mx-auto space-y-16">
            {/* Story Title */}
            <div className="text-center">
              <span className="bg-[#FF79001A] text-[#FF7900] text-xs font-medium px-4 py-2 rounded-full uppercase">
                Our story
              </span>
            </div>

            {/* Company Image */}
            <div className="w-full flex justify-center">
              <div className="w-full max-w-4xl h-[400px] relative">
                <Image
                  src="/images/company.jpg"
                  alt="Company"
                  fill
                  className="object-cover object-[center_10%] rounded-xl"
                />
              </div>
            </div>

            {/* Mission and Vision */}
            <div className="flex items-start space-x-16">
              {/* Mission */}
              <div className="flex-1">
                <h3 className="text-[#FF7900] text-sm font-semibold mb-3 uppercase tracking-wide">
                  Mission
                </h3>
                <p className="text-[#3C4049] text-sm leading-relaxed">
                  To create a sustainable future by transforming electronic
                  waste into high-quality, affordable assistive devices. We are
                  dedicated to reducing environmental impact while improving
                  accessibility for people with disabilities, ensuring that
                  every individual has access to the tools they need to live a
                  full and independent life.
                </p>
              </div>

              {/* Vision */}
              <div className="flex-1">
                <h3 className="text-[#FF7900] text-sm font-semibold mb-3 uppercase tracking-wide">
                  Vision
                </h3>
                <p className="text-[#3C4049] text-sm leading-relaxed">
                  We envision a world where every individual has access to the
                  tools they need to live a full and independent life, and where
                  a circular economy benefits both people and the planet. Our
                  goal is to be a global leader in inclusive innovation,
                  fostering communities that embrace sustainability and
                  accessibility.
                </p>
              </div>
            </div>

            {/* Three Value Sections */}
            <div className="grid grid-cols-3 gap-8">
              {/* Promote Environmental Sustainability */}
              <div className="border border-[#EBECEF] rounded-2xl p-8 flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-16 h-16 bg-[#F6F7F8] rounded-full flex items-center justify-center">
                  <Recycle size={32} className="text-black" />
                </div>
                <h4 className="text-[#3C4049] font-normal text-lg">
                  Promote Environmental Sustainability
                </h4>
              </div>

              {/* Empower People with Disabilities */}
              <div className="border border-[#EBECEF] rounded-2xl p-8 flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-16 h-16 bg-[#F6F7F8] rounded-full flex items-center justify-center">
                  <HeartHandshake size={32} className="text-black" />
                </div>
                <h4 className="text-[#3C4049] font-normal text-lg">
                  Empower People with Disabilities Through Innovation
                </h4>
              </div>

              {/* Scale Ethical Production */}
              <div className="border border-[#EBECEF] rounded-2xl p-8 flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-16 h-16 bg-[#F6F7F8] rounded-full flex items-center justify-center">
                  <TrendingUp size={32} className="text-black" />
                </div>
                <h4 className="text-black font-normal text-lg">
                  Scale Ethical Production of Assistive Technology
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[0.5px] bg-black mx-20" />
        <Partners />
        <Team />
      </main>
      <Footer />
    </>
  );
}
