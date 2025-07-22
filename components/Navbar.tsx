"use client";
import Image from "next/image";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { logout } from "@/redux/features/authSlice";
import { useState } from "react";

export default function Navbar() {
  const auth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    setDropdownOpen(false);
  };

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
              href="/products"
              className="text-black hover:text-[#348E38] transition-colors font-normal text-sm"
            >
              Products
            </Link>
            <Link
              href="/shop"
              className="text-black hover:text-[#348E38] transition-colors font-normal text-sm"
            >
              Shop
            </Link>
            <Link
              href="/blogs"
              className="text-black hover:text-[#348E38] transition-colors font-normal text-sm"
            >
              Blog
            </Link>
          </div>
        </div>

        {/* Right side - Auth/User */}
        <div className="flex items-center space-x-4 relative">
          {auth.user && auth.user.role === "CLIENT" ? (
            <div className="relative">
              <button
                className="flex items-center space-x-2 px-4 py-2 rounded-full border border-[#348E38] hover:bg-[#348E38]/10 transition-colors"
                onClick={() => setDropdownOpen((open) => !open)}
              >
                <Image
                  src="/images/avatar.png"
                  alt="Avatar"
                  width={32}
                  height={32}
                  className="rounded-full object-cover"
                />
                <div className="flex flex-col items-start text-left">
                  <span className="font-medium text-sm text-black">
                    {auth.user.fullName}
                  </span>
                  <span className="text-xs text-gray-500 capitalize">
                    {auth.user.role.toLowerCase()}
                  </span>
                </div>
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-100 rounded shadow-lg z-50">
                  <button
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50 rounded"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link
                href="auth/login"
                className="h-10 px-6 py-2 rounded-full border border-[#348E38] text-[#348E38] hover:bg-[#348E38] hover:text-white transition-colors font-medium"
              >
                Sign in
              </Link>
              <Link
                href="auth/register"
                className="h-10 px-6 py-2 rounded-full bg-[#FF7900] text-white hover:bg-[#e66a00] transition-colors font-medium"
              >
                Sign up for free
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
