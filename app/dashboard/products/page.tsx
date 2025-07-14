"use client";
import dynamic from "next/dynamic";
const ProductDashboard = dynamic(
  () => import("@/components/ProductDashboard"),
  { ssr: false }
);

export default function DashboardProductPage() {
  return (
    <div className="w-full h-full bg-[#F5F6FA] p-8">
      <ProductDashboard />
    </div>
  );
}
