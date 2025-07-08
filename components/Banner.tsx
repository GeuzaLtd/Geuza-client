import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Banner() {
  return (
    <section className="w-full bg-[#348E38] py-3 px-10">
      <div className="w-full mx-auto flex justify-between items-center">
        {/* Left side - Text with icon */}
        <div className="flex items-center space-x-3">
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
            <span className="text-[#348E38] font-bold text-sm">G</span>
          </div>
          <span className="text-white font-normal text-sm">
            Welcome to Geuza - Transform Your Experience
          </span>
        </div>

        {/* Right side - Social media icons */}
        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="text-white hover:text-gray-200 transition-colors"
          >
            <Facebook size={15} />
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-200 transition-colors"
          >
            <Twitter size={15} />
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-200 transition-colors"
          >
            <Instagram size={15} />
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-200 transition-colors"
          >
            <Linkedin size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
