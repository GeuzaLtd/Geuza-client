"use client";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [role, setRole] = useState("organization");
  return (
    <div className="flex flex-col items-center w-full min-h-screen justify-center px-4 py-10 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-[#009900] mb-8">
        Sign up to Geuza!
      </h2>
      <form className="w-full max-w-md flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Full name"
          className="w-full px-4 py-3 rounded-full bg-[#F1F2F4] text-sm text-[#111827] placeholder-[#9EA2AD] outline-none border-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-3 rounded-full bg-[#F1F2F4] text-sm text-[#111827] placeholder-[#9EA2AD] outline-none border-none"
        />
        <input
          type="tel"
          placeholder="Phone number"
          className="w-full px-4 py-3 rounded-full bg-[#F1F2F4] text-sm text-[#111827] placeholder-[#9EA2AD] outline-none border-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-3 rounded-full bg-[#F1F2F4] text-sm text-[#111827] placeholder-[#9EA2AD] outline-none border-none"
        />
        <input
          type="password"
          placeholder="Confirm password"
          className="w-full px-4 py-3 rounded-full bg-[#F1F2F4] text-sm text-[#111827] placeholder-[#9EA2AD] outline-none border-none"
        />
        <div className="flex flex-row justify-center items-center sm:space-x-6 mt-2 gap-2 sm:gap-0">
          <label className="flex items-center cursor-pointer space-x-2">
            <span
              className={`w-5 h-5 rounded-full border-2 ${
                role === "organization"
                  ? "border-[#009900]"
                  : "border-[#EBECEF]"
              } flex items-center justify-center transition-colors`}
            >
              <input
                type="radio"
                name="role"
                value="organization"
                checked={role === "organization"}
                onChange={() => setRole("organization")}
                className="appearance-none w-3 h-3 rounded-full bg-white checked:bg-[#009900]"
              />
            </span>
            <span className="text-xs text-[#3C4049] font-medium">
              Organization
            </span>
          </label>
          <label className="flex items-center cursor-pointer space-x-2">
            <span
              className={`w-5 h-5 rounded-full border-2 ${
                role === "individual" ? "border-[#009900]" : "border-[#EBECEF]"
              } flex items-center justify-center transition-colors`}
            >
              <input
                type="radio"
                name="role"
                value="individual"
                checked={role === "individual"}
                onChange={() => setRole("individual")}
                className="appearance-none w-3 h-3 rounded-full bg-white checked:bg-[#009900]"
              />
            </span>
            <span className="text-xs text-[#3C4049] font-medium">
              Individual
            </span>
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-[#FF7900] text-white font-semibold py-3 rounded-full hover:bg-[#e66a00] transition-colors mt-2"
        >
          Register
        </button>
      </form>
      <div className="mt-6 text-center text-sm text-[#3C4049]">
        Have already an account?{" "}
        <Link
          href="/auth/login"
          className="text-[#009900] underline font-medium"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
