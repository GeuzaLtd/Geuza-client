import Image from "next/image";
import { Recycle, HeartHandshake, TrendingUp } from "lucide-react";
import Partners from "@/components/Partners";
import Team from "@/components/Team";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Values from "@/components/Values";
import ThumbnailImage from "@/components/ThumbnailImage";

export default function CompanyPage() {
  return (
    <>
      <Banner />
      <Navbar />
      <main className="min-h-screen">
        {/* Thumbnail Image */}
        <ThumbnailImage
          src="/images/company.jpg"
          alt="Company Thumbnail"
          className="w-full h-[350px] relative"
        />

        {/* Content Section */}
        <div className="w-full px-48 py-20 bg-white">
          <div className="w-full max-w-7xl mx-auto flex items-start space-x-16 px-10 py-20">
            {/* Left part - Large text */}
            <div className="flex-1">
              <h2 className="text-4xl font-bold text-[#348E38] leading-tight">
                Bringing sustainability and technology into assistive devices.
              </h2>
            </div>

            {/* Right part - Paragraph and statistics */}
            <div className="flex-1 space-y-8">
              <h3 className="text-[#FF7900] font-semibold text-md">
                Who are we ?
              </h3>
              {/* Paragraph */}
              <p className="text-[#3C4049] text-sm leading-relaxed">
                GEUZA is a Rwandan-based social enterprise committed to
                innovation, inclusion, and sustainability. Our team combines
                expertise in biomedical engineering, recycling, and tech to
                create assistive devices from electronic waste.
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
                  At Geuza, our mission is to transform lives by designing
                  smart, affordable mobility devices that combines sustainable
                  materials with advanced technology. We are committed to making
                  mobility accessible, safe, and empowering ensuring every
                  product we create delivers purpose-driven impact for those who
                  need it most.
                </p>
              </div>

              {/* Vision */}
              <div className="flex-1">
                <h3 className="text-[#FF7900] text-sm font-semibold mb-3 uppercase tracking-wide">
                  Vision
                </h3>
                <p className="text-[#3C4049] text-sm leading-relaxed">
                  At Geuza, we envision an inclusive Africa where innovation,
                  sustainability, and technology converge to transform mobility.
                  We are driven by the belief that every individual deserves the
                  freedom to move with dignity and we are committed to restoring
                  that independence through every breakthrough assistive device
                  we design.
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
