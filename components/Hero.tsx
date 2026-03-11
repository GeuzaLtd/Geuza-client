import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="w-full min-h-[calc(100vh-100px)] bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 py-10 md:px-20 md:py-20"
      style={{ backgroundImage: "url(/images/hero.png)" }}
    >
      <div className="w-full max-w-4xl flex flex-col items-center space-y-8 md:space-y-12">
        {/* Part 1: Short text */}
        <div className="text-center">
          <p className="text-white text-base md:text-lg font-light">
            &apos;Geuza&apos; A Swahili word meaning &quot;to transform&quot;
          </p>
        </div>

        {/* Part 2: Bigger text */}
        <div className="text-center">
          <h1 className="text-white text-3xl md:text-7xl font-bold leading-tight md:leading-tight">
            Transforming E-Waste into Smart Assistive Devices
          </h1>
        </div>

        {/* Part 3: Photos and text */}
        <div className="flex flex-col md:flex-row items-center md:space-x-6 space-y-4 md:space-y-0">
          {/* Three rounded photos */}
          <div className="flex items-center -space-x-2 md:-space-x-3 border border-[#CBEA7B] rounded-full p-1 md:p-2">
            <div className="w-8 h-8 md:w-[50px] md:h-[50px] rounded-full overflow-hidden">
              <Image
                src="/images/1.webp"
                alt="Person 1"
                width={50}
                height={50}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-8 h-8 md:w-[50px] md:h-[50px] rounded-full overflow-hidden">
              <Image
                src="/images/2.jpeg"
                alt="Person 2"
                width={50}
                height={50}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-8 h-8 md:w-[50px] md:h-[50px] rounded-full overflow-hidden">
              <Image
                src="/images/3.png"
                alt="Person 3"
                width={50}
                height={50}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="text-white text-base md:text-lg font-medium text-center md:text-left">
            65+ Lives Empowered 
          </div>
        </div>
      </div>
    </section>
  );
}
