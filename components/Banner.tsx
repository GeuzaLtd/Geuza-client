import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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
          <Link
            href="https://www.facebook.com/geuzaltd"
            className="text-white hover:text-gray-200 transition-colors"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF size={14} className="md:size-[15px]" />
          </Link>
          <Link
            href="https://x.com/GeuzaLtd"
            className="text-white hover:text-gray-200 transition-colors"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter size={14} className="md:size-[15px]" />
          </Link>
          <Link
            href="https://www.instagram.com/geuza_ltd?igsh=N3NwZGppdnBucnNx"
            className="text-white hover:text-gray-200 transition-colors"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={14} className="md:size-[15px]" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/geuza-africa/"
            className="text-white hover:text-gray-200 transition-colors"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn size={14} className="md:size-[15px]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
