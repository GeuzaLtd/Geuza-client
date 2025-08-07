"use client";
import Image from "next/image";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { logout } from "@/redux/features/authSlice";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const auth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  // Nav links for reuse
  const navLinks = (
    <>
      <Link
        href="/company"
        className="text-black hover:text-[#348E38] transition-colors font-normal text-sm"
        onClick={() => setMobileMenuOpen(false)}
      >
        Company
      </Link>
      <Link
        href="/products"
        className="text-black hover:text-[#348E38] transition-colors font-normal text-sm"
        onClick={() => setMobileMenuOpen(false)}
      >
        Products
      </Link>
      <Link
        href="/shop"
        className="text-black hover:text-[#348E38] transition-colors font-normal text-sm"
        onClick={() => setMobileMenuOpen(false)}
      >
        Shop
      </Link>
      <Link
        href="/blogs"
        className="text-black hover:text-[#348E38] transition-colors font-normal text-sm"
        onClick={() => setMobileMenuOpen(false)}
      >
        Blog
      </Link>
      {auth.token && auth.user?.role === "CLIENT" && (
        <Link
          href="/my-orders"
          className="text-black hover:text-[#348E38] transition-colors font-normal text-sm"
          onClick={() => setMobileMenuOpen(false)}
        >
          My orders
        </Link>
      )}
    </>
  );

  // Auth/User actions for reuse
  const authActions =
    auth.user && auth.user.role === "CLIENT" ? (
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
          href="/auth/login"
          className="h-10 px-6 py-2 rounded-full border border-[#348E38] text-[#348E38] hover:bg-[#348E38] hover:text-white transition-colors font-medium"
          onClick={() => setMobileMenuOpen(false)}
        >
          Sign in
        </Link>
        <Link
          href="/auth/register"
          className="h-10 px-6 py-2 rounded-full bg-[#FF7900] text-white hover:bg-[#e66a00] transition-colors font-medium"
          onClick={() => setMobileMenuOpen(false)}
        >
          Sign up for free
        </Link>
      </>
    );

  return (
    <nav className="w-full bg-white py-4 px-4 md:px-10 border-b border-gray-100">
      <div className="w-full mx-auto flex justify-between items-center">
        {/* Left side - Logo and nav items */}
        <div className="flex items-center">
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
          {/* Desktop nav links */}
          <div className="hidden md:flex items-center space-x-6 ml-8 lg:ml-20">
            {navLinks}
          </div>
        </div>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#348E38]"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <FiMenu size={28} />
        </button>
        {/* Right side - Auth/User (desktop) */}
        <div className="hidden md:flex items-center space-x-4 relative">
          {authActions}
        </div>
      </div>
      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 flex flex-col">
          <div className="bg-white shadow-lg w-4/5 max-w-xs h-full p-6 flex flex-col relative animate-slide-in-left">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-black"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <FiX size={28} />
            </button>
            <div className="flex flex-col space-y-6 mt-12">{navLinks}</div>
            <div className="flex flex-col space-y-4 mt-10 border-t border-gray-100 pt-6">
              {authActions}
            </div>
          </div>
          {/* Click outside to close */}
          <div className="flex-1" onClick={() => setMobileMenuOpen(false)} />
        </div>
      )}
    </nav>
  );
}
