import Image from "next/image";
import { Recycle, HeartHandshake, TrendingUp } from "lucide-react";
import Partners from "@/components/Partners";
import Team from "@/components/Team";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Values from "@/components/Values";

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
              <h3 className="text-[#FF7900] font-semibold text-md">
                Who are we ?
              </h3>
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
            <Values
              value1="Promote Environmental Sustainability"
              value2="Empower People with Disabilities Through Innovation"
              value3="Scale Ethical Production of Assistive Technology"
            />
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
