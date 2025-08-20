import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Banner() {
  return (
    <section
      id="banner"
      className="w-full bg-[#348E38] py-2 px-4 md:py-3 md:px-10 overflow-x-auto"
    >
      <div className="w-full mx-auto flex flex-row justify-between items-center">
        {/* Left side - Text with icon */}
        <div className="flex items-center space-x-2 md:space-x-3">
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
            <span className="text-[#348E38] font-bold text-xs md:text-sm">
              G
            </span>
          </div>
          <span className="text-white font-normal text-xs md:text-sm text-center whitespace-nowrap">
            Welcome to Geuza - Transform Your Experience
          </span>
        </div>

        {/* Right side - Social media icons (hidden on small screens) */}
        <div className="hidden sm:flex items-center space-x-3 md:space-x-4">
          <a
            href="#"
            className="text-white hover:text-gray-200 transition-colors"
            aria-label="Facebook"
          >
            <FaFacebookF size={14} className="md:size-[15px]" />
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-200 transition-colors"
            aria-label="Twitter"
          >
            <FaTwitter size={14} className="md:size-[15px]" />
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-200 transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram size={14} className="md:size-[15px]" />
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-200 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={14} className="md:size-[15px]" />
          </a>
        </div>
      </div>
    </section>
  );
}
