import Image from "next/image";
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
          src="/images/team.jpeg"
          alt="Company Thumbnail"
          className="w-full h-[350px] relative"
          imageClassName="object-[center_35%]"
        />

        {/* Content Section */}
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 xl:px-48 py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
          <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-start lg:space-x-16 space-y-6 lg:space-y-0 px-4 sm:px-6 md:px-10 py-8 sm:py-12 md:py-16 lg:py-20">
            {/* Left part - Large text */}
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#348E38] leading-tight">
                Bringing sustainability and technology into assistive devices.
              </h2>
            </div>

            {/* Right part - Paragraph and statistics */}
            <div className="flex-1 space-y-4 sm:space-y-6 md:space-y-8">
              <h3 className="text-[#FF7900] font-semibold text-sm sm:text-md">
                Who are we ?
              </h3>
              {/* Paragraph */}
              <p className="text-[#3C4049] text-sm sm:text-base leading-relaxed">
                Geuza is powered by a multidisciplinary, impact-driven team with
                over 30 years of combined experience across engineering,
                technology, science, healthcare, and sustainable innovation.
                Together, we are building Africa’s first line of affordable,
                smart, and eco-friendly assistive devices from recycled
                materials, shaping a future where mobility is accessible to all.
              </p>
            </div>
          </div>
          <div className="w-full max-w-7xl mx-auto space-y-8 sm:space-y-12 md:space-y-16">
            {/* Story Title */}
            <div className="text-center">
              <span className="bg-[#FF79001A] text-[#FF7900] text-xs font-medium px-3 sm:px-4 py-2 rounded-full uppercase">
                Our story
              </span>
            </div>

            {/* Company Image */}
            <div className="w-full flex justify-center">
              <div className="w-full max-w-4xl h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] relative">
                <Image
                  src="/images/company-2.jpeg"
                  alt="Company"
                  fill
                  className="object-cover object-[center_35%] rounded-xl"
                />
              </div>
            </div>

            {/* Mission and Vision */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-16 space-y-6 lg:space-y-0">
              {/* Mission */}
              <div className="flex-1">
                <h3 className="text-[#FF7900] text-sm font-semibold mb-2 sm:mb-3 uppercase tracking-wide">
                  Mission
                </h3>
                <p className="text-[#3C4049] text-sm sm:text-base leading-relaxed">
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
                <h3 className="text-[#FF7900] text-sm font-semibold mb-2 sm:mb-3 uppercase tracking-wide">
                  Vision
                </h3>
                <p className="text-[#3C4049] text-sm sm:text-base leading-relaxed">
                  At Geuza, we envision an inclusive Africa where innovation,
                  sustainability, and technology converge to transform mobility.
                  We are committed to restoring that independence through every
                  breakthrough assistive device we design.
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
        <div className="h-[0.5px] bg-black mx-4 sm:mx-6 md:mx-10 lg:mx-20" />
        <Partners />
        <Team />
      </main>
      <Footer />
    </>
  );
}
