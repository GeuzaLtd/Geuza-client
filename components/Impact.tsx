import Image from "next/image";

export default function Impact() {
  return (
    <section className="w-full bg-white">
      <div className="w-full max-w-7xl mx-auto flex items-start space-x-16 px-10 py-20">
        {/* Left part - Large text */}
        <div className="flex-1">
          <h2 className="text-5xl font-bold text-[#348E38] leading-tight">
            Bringing sustainability and technology into assistive devices.
          </h2>
        </div>

        {/* Right part - Paragraph and statistics */}
        <div className="flex-1 space-y-8">
          {/* Paragraph */}
          <p className="text-[#3C4049] text-sm leading-relaxed">
            At GEUZA, we champion a circular economy by merging technology and
            sustainability to transform e-waste into smart, affordable mobility
            aids crutches, walkers, and prosthetics that empower people with
            disabilities.
          </p>

          {/* Impact statistics */}
          <div className="space-y-4">
            <h3 className="text-[#FF7900] font-semibold text-md">
              Our impact so far
            </h3>

            <div className="border border-[#EBECEE] rounded-xl p-4">
              <div className="flex items-center justify-between">
                {/* Statistic 1 */}
                <div className="text-center flex-1">
                  <div className="text-2xl font-bold text-black mb-1">500+</div>
                  <div className="text-xs font-light text-[#3C4049]">
                    Devices Created
                  </div>
                </div>

                {/* Divider */}
                <div className="w-px h-12 bg-[#EBECEE] mx-2"></div>

                {/* Statistic 2 */}
                <div className="text-center flex-1">
                  <div className="text-2xl font-bold text-black mb-1">65+</div>
                  <div className="text-xs font-light text-[#3C4049]">
                    Lives Empowered
                  </div>
                </div>

                {/* Divider */}
                <div className="w-px h-12 bg-[#EBECEE] mx-2"></div>

                {/* Statistic 3 */}
                <div className="text-center flex-1">
                  <div className="text-2xl font-bold text-black mb-1">2.5K</div>
                  <div className="text-xs font-light text-[#3C4049]">
                    E-Waste Items
                  </div>
                </div>

                {/* Divider */}
                <div className="w-px h-12 bg-[#EBECEE] mx-2"></div>

                {/* Statistic 4 */}
                <div className="text-center flex-1">
                  <div className="text-2xl font-bold text-black mb-1">15</div>
                  <div className="text-xs font-light text-[#3C4049]">
                    Partners
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-screen relative">
        <Image
          src="/images/company.jpeg"
          alt="Impact Image"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
