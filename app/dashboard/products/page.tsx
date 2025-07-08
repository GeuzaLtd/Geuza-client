"use client";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/features/authSlice";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  return (
    <div className="w-full h-full bg-[#F5F6FA] p-8">
      <h1 className="text-2xl font-bold">This is Product Page</h1>
      <p className="mt-4">This is the main product page.</p>
    </div>
  );
}
