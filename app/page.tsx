import Image from "next/image";
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Banner />
      <Navbar />
      {/* Additional sections will be added here */}
      <Footer />
    </main>
  );
}
