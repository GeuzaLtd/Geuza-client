import Image from "next/image";

export default function Impact() {
  return (
    <section className="w-full bg-white">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-start md:space-x-16 px-4 md:px-10 py-10 md:py-20 space-y-8 md:space-y-0">
        {/* Left part - Large text */}
        <div className="flex-1 mb-6 md:mb-0">
          <h2 className="text-2xl md:text-5xl font-bold text-[#348E38] leading-tight">
            Bringing sustainability and technology into assistive devices.
          </h2>
        </div>

        {/* Right part - Paragraph and statistics */}
        <div className="flex-1 space-y-6 md:space-y-8">
          {/* Paragraph */}
          <p className="text-[#3C4049] text-sm md:text-base leading-relaxed">
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
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
                <div className="grid grid-cols-2 md:flex md:flex-row w-full gap-4 md:gap-0">
                  {/* Statistic 1 */}
                  <div className="text-center flex-1">
                    <div className="text-xl md:text-2xl font-bold text-black mb-1">
                      500+
                    </div>
                    <div className="text-xs font-light text-[#3C4049]">
                      Devices Created
                    </div>
                  </div>
                  {/* Statistic 2 */}
                  <div className="text-center flex-1">
                    <div className="text-xl md:text-2xl font-bold text-black mb-1">
                      65+
                    </div>
                    <div className="text-xs font-light text-[#3C4049]">
                      Lives Empowered
                    </div>
                  </div>
                  {/* Statistic 3 */}
                  <div className="text-center flex-1">
                    <div className="text-xl md:text-2xl font-bold text-black mb-1">
                      2.5K
                    </div>
                    <div className="text-xs font-light text-[#3C4049]">
                      E-Waste Items
                    </div>
                  </div>
                  {/* Statistic 4 */}
                  <div className="text-center flex-1">
                    <div className="text-xl md:text-2xl font-bold text-black mb-1">
                      15
                    </div>
                    <div className="text-xs font-light text-[#3C4049]">
                      Partners
                    </div>
                  </div>
                </div>
                {/* Dividers - Only show on md and up */}
                <div className="hidden md:flex absolute left-1/4 w-px h-12 bg-[#EBECEE]"></div>
                <div className="hidden md:flex absolute left-1/2 w-px h-12 bg-[#EBECEE]"></div>
                <div className="hidden md:flex absolute left-3/4 w-px h-12 bg-[#EBECEE]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-48 md:h-screen relative">
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
