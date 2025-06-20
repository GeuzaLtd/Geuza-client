import Image from "next/image";
import Link from "next/link";
import { ChevronUp, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#065E06] px-20 py-10">
      {/* Upper section */}
      <div className="mb-10">
        <div className="w-full mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Geuza Logo"
                width={100}
                height={40}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Navigation items */}
          <div className="flex items-center space-x-6">
            <Link
              href="#"
              className="text-white hover:text-gray-200 transition-colors font-normal text-sm"
            >
              Company
            </Link>
            <Link
              href="#"
              className="text-white hover:text-gray-200 transition-colors font-normal text-sm"
            >
              Products
            </Link>
            <Link
              href="#"
              className="text-white hover:text-gray-200 transition-colors font-normal text-sm"
            >
              Shop
            </Link>
            <Link
              href="#"
              className="text-white hover:text-gray-200 transition-colors font-normal text-sm"
            >
              Blog
            </Link>
          </div>

          {/* Go to top */}
          <div className="flex items-center space-x-3">
            <span className="text-white font-normal text-sm">Go to top</span>
            <button className="w-10 h-10 bg-[#FF7900] rounded-full flex items-center justify-center hover:bg-[#e66a00] transition-colors">
              <ChevronUp size={20} className="text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Lower section */}
      <div className="bg-[#042C04] px-10 py-6">
        <div className="w-full mx-auto flex justify-between items-center">
          {/* Contact information */}
          {/* <div className="flex items-center space-x-6"> */}
          <div className="flex items-center space-x-2">
            <Mail size={16} className="text-[#FF7900]" />
            <span className="text-white text-sm">info@geuza.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone size={16} className="text-[#FF7900]" />
            <span className="text-white text-sm">+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin size={16} className="text-[#FF7900]" />
            <span className="text-white text-sm">
              123 Business St, City, Country
            </span>
          </div>
          {/* </div> */}

          {/* Copyright */}
          <div className="text-white text-sm">
            © Geuza Ltd. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
