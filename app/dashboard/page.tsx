"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPartners } from "@/redux/features/partnerSlice";
import { RootState, AppDispatch } from "@/redux/store";
import Image from "next/image";
import dynamic from "next/dynamic";
const PartnersDashboard = dynamic(
  () => import("@/components/PartnersDashboard"),
  { ssr: false }
);
const BlogDashboard = dynamic(() => import("@/components/BlogDashboard"), {
  ssr: false,
});
const TestimonialDashboard = dynamic(
  () => import("@/components/TestimonialDashboard"),
  { ssr: false }
);

const stats = [
  {
    label: "Total Orders",
    value: "40,689",
    icon: "/images/1.webp",
    trend: "+8.5% Up from yesterday",
    trendColor: "text-green-600",
  },
  {
    label: "Pending Delivery",
    value: "10,293",
    icon: "/images/2.jpeg",
    trend: "+1.3% Up from past week",
    trendColor: "text-green-600",
  },
  {
    label: "Payment Due",
    value: "RWF 8900",
    icon: "/images/3.png",
    trend: "-4.3% Down from yesterday",
    trendColor: "text-red-500",
  },
  {
    label: "Delivery Completed",
    value: "2040",
    icon: "/images/1.webp",
    trend: "+1.8% Up from yesterday",
    trendColor: "text-green-600",
  },
];

const tabs = [
  { key: "partners", label: "Partners" },
  { key: "testimonials", label: "Testimonials" },
  { key: "blog", label: "Blog" },
];

export default function DashboardPage() {
  const dispatch = useDispatch<AppDispatch>();
  const token = useSelector((state: RootState) => state.auth.token);
  const [selectedTab, setSelectedTab] = useState("partners");

  useEffect(() => {
    if (selectedTab === "partners") {
      dispatch(fetchPartners({ token: token || "" }));
    }
  }, [dispatch, selectedTab, token]);

  return (
    <div className="w-full h-full bg-[#F5F6FA] p-8">
      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-xl p-6 shadow flex flex-col"
          >
            <div className="flex items-center gap-3 mb-2">
              <Image
                src={stat.icon}
                alt={stat.label}
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="text-lg font-semibold text-black">
                {stat.value}
              </span>
            </div>
            <div className="text-sm text-[#3C4049] font-medium mb-1">
              {stat.label}
            </div>
            <div className={`text-xs ${stat.trendColor}`}>{stat.trend}</div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setSelectedTab(tab.key)}
            className={`px-6 py-2 rounded-full font-medium transition-colors text-xs
              ${
                selectedTab === tab.key
                  ? "bg-[#009900] text-white"
                  : "bg-white text-black"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Cards */}
      {selectedTab === "partners" ? (
        <PartnersDashboard />
      ) : selectedTab === "blog" ? (
        <BlogDashboard />
      ) : selectedTab === "testimonials" ? (
        <TestimonialDashboard />
      ) : null}
    </div>
  );
}
