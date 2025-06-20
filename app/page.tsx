import Image from "next/image";
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Banner />
      <Navbar />
      <Hero />
      <Impact />
      {/* Additional sections will be added here */}
      <Footer />
    </main>
  );
}
