"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPartners } from "@/redux/features/partnerSlice";
import { RootState, AppDispatch } from "@/redux/store";
import dynamic from "next/dynamic";
import { fetchProducts } from "@/redux/features/productSlice";
import { fetchBlogs } from "@/redux/features/blogSlice";
import { fetchOrders } from "@/redux/features/orderSlice";
import { FaNewspaper } from "react-icons/fa";
import { FaHandshakeSimple, FaShop } from "react-icons/fa6";
import { BsCartCheckFill } from "react-icons/bs";

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

const tabs = [
  { key: "partners", label: "Partners" },
  { key: "testimonials", label: "Testimonials" },
  { key: "blog", label: "Blog" },
];

export default function DashboardPage() {
  const dispatch = useDispatch<AppDispatch>();
  const token = useSelector((state: RootState) => state.auth.token);
  const [selectedTab, setSelectedTab] = useState("partners");
  const { products } = useSelector((state: RootState) => state.products);
  const { partners } = useSelector((state: RootState) => state.partners);
  const { blogs } = useSelector((state: RootState) => state.blogs);
  const { orders } = useSelector((state: RootState) => state.orders);

  const stats = [
    {
      label: "Total Orders",
      value: orders.length || 0,
      icon: <BsCartCheckFill className="text-4xl text-green-600" />,
      trend: "+8.5% Up from yesterday",
      trendColor: "text-green-600",
    },
    {
      label: "Total Products",
      value: products.length || 0,
      icon: <FaShop className="text-4xl text-purple-600" />,
      trend: "+1.3% Up from past week",
      trendColor: "text-green-600",
    },
    {
      label: "Total Partners",
      value: partners.length || 0,
      icon: <FaHandshakeSimple className="text-4xl text-blue-600" />,
      trend: "-4.3% Down from yesterday",
      trendColor: "text-red-500",
    },
    {
      label: "Total Blogs",
      value: blogs.length || 0,
      icon: <FaNewspaper className="text-4xl text-amber-600" />,
      trend: "+1.8% Up from yesterday",
      trendColor: "text-green-600",
    },
  ];

  useEffect(() => {
    dispatch(fetchPartners({ token: token || "" }));
    dispatch(fetchProducts());
    dispatch(fetchBlogs({ token: token || "" }));
    dispatch(fetchOrders({ userType: "ADMIN" }));
  }, [dispatch, token]);

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
              {stat.icon}
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
