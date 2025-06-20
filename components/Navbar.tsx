import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white py-4 px-10 border-b border-gray-100">
      <div className="w-full mx-auto flex justify-between items-center">
        {/* Left side - Logo and nav items */}
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="MyMentor Logo"
                width={100}
                height={40}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Navigation items */}
          <div className="flex items-center space-x-6 ml-20">
            <Link
              href="#"
              className="text-black hover:text-[#348E38] transition-colors font-normal text-sm"
            >
              Company
            </Link>
            <Link
              href="#"
              className="text-black hover:text-[#348E38] transition-colors font-normal text-sm"
            >
              Products
            </Link>
            <Link
              href="#"
              className="text-black hover:text-[#348E38] transition-colors font-normal text-sm"
            >
              Shop
            </Link>
            <Link
              href="#"
              className="text-black hover:text-[#348E38] transition-colors font-normal text-sm"
            >
              Blog
            </Link>
          </div>
        </div>

        {/* Right side - Buttons */}
        <div className="flex items-center space-x-4">
          <button className="h-10 px-6 rounded-full border border-[#348E38] text-[#348E38] hover:bg-[#348E38] hover:text-white transition-colors font-medium">
            Sign in
          </button>
          <button className="h-10 px-6 rounded-full bg-[#FF7900] text-white hover:bg-[#e66a00] transition-colors font-medium">
            Sign up for free
          </button>
        </div>
      </div>
    </nav>
  );
}
