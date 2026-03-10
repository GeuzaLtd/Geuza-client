import Image from "next/image";

export default function Impact() {
  return (
    <section className="w-full bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-10 py-12 md:py-20">
        {/* Top label */}
        <div className="mb-8 md:mb-12">
          <span className="inline-block bg-[#348E38]/10 text-[#348E38] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full">
            E-Waste Recycling
          </span>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left – Image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative w-full h-72 md:h-[460px] rounded-2xl overflow-hidden">
              <Image
                src="/images/ewaste-image.png"
                alt="E-Waste Recycling"
                fill
                className="object-cover"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-sm">
                <p className="text-xs text-[#3C4049] font-light">Recycled so far</p>
                <p className="text-xl font-bold text-[#348E38]">900+ Items</p>
              </div>
            </div>
          </div>

          {/* Right – Content */}
          <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-[#348E38] leading-tight">
              Turning e-waste into life-changing assistive devices.
            </h2>

            <p className="text-[#3C4049] text-sm md:text-base leading-relaxed">
              At GEUZA, we champion a circular economy by merging technology and
              sustainability to transform e-waste into smart, affordable mobility
              aids — crutches, walkers, and prosthetics — that empower people with
              disabilities. Every device we build diverts harmful electronics from
              landfills and gives them a second life.
            </p>

            {/* Impact statistics */}
            <div className="space-y-3">
              <h3 className="text-[#FF7900] font-semibold text-sm uppercase tracking-wide">
                Our impact so far
              </h3>

              <div className="border border-[#EBECEE] rounded-xl p-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-black mb-1">500+</div>
                    <div className="text-xs font-light text-[#3C4049]">Devices Created</div>
                  </div>
                  <div className="text-center border-l border-[#EBECEE]">
                    <div className="text-2xl font-bold text-black mb-1">65+</div>
                    <div className="text-xs font-light text-[#3C4049]">Lives Empowered</div>
                  </div>
                  <div className="text-center border-l border-[#EBECEE]">
                    <div className="text-2xl font-bold text-black mb-1">2.5K</div>
                    <div className="text-xs font-light text-[#3C4049]">E-Waste Items</div>
                  </div>
                  <div className="text-center border-l border-[#EBECEE]">
                    <div className="text-2xl font-bold text-black mb-1">15</div>
                    <div className="text-xs font-light text-[#3C4049]">Partners</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
