import Image from "next/image";
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
      <main className="min-h-screen bg-white">

        {/* ── 1. HERO ───────────────────────────────────────────────────── */}
        <section className="w-full bg-white py-16 md:py-24 px-4 md:px-10 overflow-hidden">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left: text */}
            <div className="flex-1 space-y-6">
              <span className="inline-block bg-[#348E38]/10 text-[#348E38] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full">
                Our Story
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-[#3C4049] leading-tight">
                We turn{" "}
                <span className="text-[#348E38]">e-waste</span>{" "}
                into devices that{" "}
                <span className="text-[#FF7900]">move lives.</span>
              </h1>
              <p className="text-[#3C4049] text-base md:text-lg leading-relaxed max-w-lg">
                Geuza — Swahili for &ldquo;to transform&rdquo; — is Africa&apos;s
                first company engineering smart, affordable assistive devices
                from recycled electronic materials.
              </p>
              <div className="flex flex-wrap gap-6 pt-2">
                <div>
                  <p className="text-3xl font-bold text-[#348E38]">500+</p>
                  <p className="text-xs text-[#3C4049]">Devices created</p>
                </div>
                <div className="border-l border-[#EBECEE] pl-6">
                  <p className="text-3xl font-bold text-[#348E38]">900+</p>
                  <p className="text-xs text-[#3C4049]">E-waste items recycled</p>
                </div>
                <div className="border-l border-[#EBECEE] pl-6">
                  <p className="text-3xl font-bold text-[#348E38]">65+</p>
                  <p className="text-xs text-[#3C4049]">Lives empowered</p>
                </div>
              </div>
            </div>

            {/* Right: current product on light green bg */}
            <div className="w-full lg:w-[380px] flex-shrink-0">
              <div className="relative bg-[#F0FAF0] rounded-3xl flex items-center justify-center p-6 h-[420px]">
                <Image
                  src="/images/our current product.png"
                  alt="Geuza Crutches — Current Product"
                  width={260}
                  height={380}
                  className="object-contain drop-shadow-xl"
                />
                <div className="absolute bottom-5 left-5 bg-white rounded-xl px-4 py-2 shadow-sm">
                  <p className="text-[10px] text-[#FF7900] font-semibold uppercase tracking-wide">Current Product</p>
                  <p className="text-sm font-bold text-[#3C4049]">Geuza  Crutches</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. THE PROBLEM ────────────────────────────────────────────── */}
        <section className="w-full bg-[#348E38] py-14 md:py-20 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-5">
            <p className="text-[#CBEA7B] text-xs font-semibold uppercase tracking-widest">
              The problem we solve
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Millions of tonnes of e-waste. Millions of people without mobility aids.
            </h2>
            <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Africa generates over 2.9 million tonnes of e-waste annually — most buried
              in landfills. At the same time, 50+ million Africans live with a disability
              and cannot access affordable assistive devices. We saw two crises and built one answer.
            </p>
          </div>
        </section>

        {/* ── 3. BRAND STATEMENT CARD ──────────────────────────────────── */}
        <section className="w-full bg-white py-16 md:py-24 px-4 md:px-10">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* picture_hero_design.png as a contained card */}
            <div className="w-full lg:w-[300px] flex-shrink-0">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/picture_hero_design.png"
                  alt="Transforming E-Waste into Empowerment"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Text */}
            <div className="flex-1 space-y-6">
              <span className="inline-block bg-[#FF79001A] text-[#FF7900] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full">
                Our founding idea
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#348E38] leading-tight">
                &ldquo;What if the electronic devices thrown away today could help someone walk tomorrow?&rdquo;
              </h2>
              <p className="text-[#3C4049] text-sm md:text-base leading-relaxed">
                Geuza was born from a single radical insight — that discarded electronics
                still hold enormous material value. Recycled metals and salvaged components,
                when reimagined through precision engineering, can be shaped into world-class
                assistive devices at a fraction of conventional cost.
              </p>
              <p className="text-[#3C4049] text-sm md:text-base leading-relaxed">
                That insight became a company. That company is building Africa&apos;s first
                line of smart, eco-friendly mobility aids.
              </p>
            </div>
          </div>
        </section>

        {/* ── 4. THE JOURNEY TIMELINE ──────────────────────────────────── */}
        <section className="w-full bg-[#F9FAFB] py-16 md:py-24 px-4 md:px-10">
          <div className="max-w-6xl mx-auto space-y-14">
            <div className="text-center space-y-3">
              <span className="inline-block bg-[#348E38]/10 text-[#348E38] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full">
                How we got here
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#3C4049]">
                From a wooden pallet to a production line
              </h2>
            </div>

            {/* Step 1 — Raw Material */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#348E38] text-white font-bold flex items-center justify-center text-lg shadow">
                1
              </div>
              <div className="relative w-full md:w-64 h-52 rounded-2xl overflow-hidden shadow flex-shrink-0">
                <Image
                  src="/images/geuza-team-testing-raw-material.jpeg"
                  alt="Testing raw recycled material"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="flex-1 space-y-2">
                <p className="text-[#FF7900] text-xs font-semibold uppercase tracking-wide">Step 1 — It Starts With the Waste</p>
                <h3 className="text-xl md:text-2xl font-bold text-[#3C4049]">Granule by granule. Testing what e-waste can become.</h3>
                <p className="text-[#3C4049] text-sm leading-relaxed">
                  Before any device is built, our team analyses recovered e-waste materials —
                  testing their properties, durability, and suitability for structural use.
                  This is where transformation begins: at a workbench, with discarded material
                  and a question — can this support a human being?
                </p>
              </div>
            </div>

            <div className="border-l-2 border-dashed border-[#348E38]/30 h-8 ml-6" />

            {/* Step 2 — V1 Prototype */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#348E38] text-white font-bold flex items-center justify-center text-lg shadow">
                2
              </div>
              <div className="relative w-full md:w-64 h-52 rounded-2xl overflow-hidden shadow flex-shrink-0">
                <Image
                  src="/images/Our V1- Crutches(Prototype).jpeg"
                  alt="V1 Prototype"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 space-y-2">
                <p className="text-[#FF7900] text-xs font-semibold uppercase tracking-wide">Step 2 — The First Prototype</p>
                <h3 className="text-xl md:text-2xl font-bold text-[#3C4049]">Two crutches. A wooden pallet. Proof it worked.</h3>
                <p className="text-[#3C4049] text-sm leading-relaxed">
                  Our very first device was built by hand from salvaged metal tubing recovered from
                  discarded electronics. Imperfect, raw, and laid on a pallet — but it worked.
                  It proved that e-waste could support a human body in motion.
                </p>
              </div>
            </div>

            <div className="border-l-2 border-dashed border-[#348E38]/30 h-8 ml-6" />

            {/* Step 3 — Production */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#348E38] text-white font-bold flex items-center justify-center text-lg shadow">
                3
              </div>
              <div className="relative w-full md:w-64 h-52 rounded-2xl overflow-hidden shadow flex-shrink-0">
                <Image
                  src="/images/production.jpeg"
                  alt="Production Workshop"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 space-y-2">
                <p className="text-[#FF7900] text-xs font-semibold uppercase tracking-wide">Step 3 — Building at Scale</p>
                <h3 className="text-xl md:text-2xl font-bold text-[#3C4049]">A real workshop. A trained local team.</h3>
                <p className="text-[#3C4049] text-sm leading-relaxed">
                  We built a production workshop staffed by young African engineers and technicians.
                  Every device manufactured locally — creating dignified jobs while diverting
                  harmful electronics from landfills.
                </p>
              </div>
            </div>

            <div className="border-l-2 border-dashed border-[#348E38]/30 h-8 ml-6" />

            {/* Step 4 — Field Testing */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FF7900] text-white font-bold flex items-center justify-center text-lg shadow">
                4
              </div>
              <div className="relative w-full md:w-64 h-52 rounded-2xl overflow-hidden shadow flex-shrink-0">
                <Image
                  src="/images/geuza_collage_post.jpeg"
                  alt="Geuza Team Field Testing"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 space-y-2">
                <p className="text-[#FF7900] text-xs font-semibold uppercase tracking-wide">Step 4 — The First Product, The First Team</p>
                <h3 className="text-xl md:text-2xl font-bold text-[#3C4049]">Our team. Our product. A milestone we&apos;re proud of.</h3>
                <p className="text-[#3C4049] text-sm leading-relaxed">
                  This is the Geuza team standing with our first completed product —
                  a moment that marks the end of a prototype phase and the beginning
                  of something real. Built from recycled materials, assembled by a
                  passionate local team, and ready to change lives.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. MISSION / VISION ───────────────────────────────────────── */}
        <section className="w-full bg-white py-16 md:py-24 px-4 md:px-10">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center">
              <span className="inline-block bg-[#FF79001A] text-[#FF7900] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full">
                What drives us
              </span>
            </div>
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="flex-1 space-y-3">
                <h3 className="text-[#FF7900] text-sm font-semibold uppercase tracking-wide">Mission</h3>
                <p className="text-[#3C4049] text-sm md:text-base leading-relaxed">
                  To transform lives by designing smart, affordable mobility devices that combine
                  sustainable recycled materials with advanced technology — making mobility
                  accessible, safe, and empowering for those who need it most.
                </p>
              </div>
              <div className="flex-1 space-y-3 lg:border-l lg:border-[#EBECEE] lg:pl-10">
                <h3 className="text-[#FF7900] text-sm font-semibold uppercase tracking-wide">Vision</h3>
                <p className="text-[#3C4049] text-sm md:text-base leading-relaxed">
                  An inclusive Africa where innovation, sustainability, and technology converge
                  to transform mobility — restoring independence through every breakthrough
                  assistive device we design.
                </p>
              </div>
            </div>
            <Values
              value1="Promote Environmental Sustainability"
              value2="Empower People with Disabilities Through Innovation"
              value3="Scale Ethical Production of Assistive Technology"
            />
          </div>
        </section>

        <div className="h-[0.5px] bg-[#EBECEE] mx-4 sm:mx-6 md:mx-10 lg:mx-20" />
        <Partners />
        <Team />
      </main>
      <Footer />
    </>
  );
}
