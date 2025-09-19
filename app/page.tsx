import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import Story from "@/components/Story";
import Shop from "@/components/Shop";
import Testimonial from "@/components/Testimonial";
import Team from "@/components/Team";
import Partners from "@/components/Partners";
import Newsletter from "@/components/Newsletter";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Banner />
      <Navbar />
      <Hero />
      <Impact />
      <Story />
      <Shop />
      <Testimonial />
      <Team />

      <Newsletter />
      <div className="h-[0.5px] bg-black mx-20" />
      <Partners />
      {/* Additional sections will be added here */}
      <Contact />
      <Footer />
    </main>
  );
}
