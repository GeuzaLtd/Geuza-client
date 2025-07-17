"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPartners,
  createPartner,
  updatePartner,
  deletePartner,
  Partner,
} from "@/redux/features/partnerSlice";
import { RootState } from "@/redux/store";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";
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
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.auth.token);
  const { partners, loading } = useSelector(
    (state: RootState) => state.partners
  );
  const [selectedTab, setSelectedTab] = useState("partners");
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState<"add" | "edit">("add");
  const [editPartner, setEditPartner] = useState<Partner | null>(null);
  const [deletePartnerId, setDeletePartnerId] = useState<string | null>(null);
  const [newPartner, setNewPartner] = useState({
    name: "",
    logo: null as File | null,
  });

  useEffect(() => {
    if (selectedTab === "partners") {
      dispatch(fetchPartners({ token: token || "" }) as any);
    }
  }, [dispatch, selectedTab, token]);

  const openAddModal = () => {
    setModalMode("add");
    setNewPartner({ name: "", logo: null });
    setShowModal(true);
  };

  const openEditModal = (partner: Partner) => {
    setModalMode("edit");
    setEditPartner(partner);
    setNewPartner({ name: partner.name, logo: null });
    setShowModal(true);
  };

  const handleAddOrEditPartner = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPartner.name && modalMode === "add") return;
    const formData = new FormData();
    formData.append("name", newPartner.name);
    if (newPartner.logo) formData.append("logo", newPartner.logo);
    if (modalMode === "add") {
      await dispatch(createPartner({ formData, token: token || "" }) as any);
    } else if (modalMode === "edit" && editPartner) {
      await dispatch(
        updatePartner({
          id: editPartner.id,
          formData,
          token: token || "",
        }) as any
      );
    }
    setShowModal(false);
    setEditPartner(null);
    setNewPartner({ name: "", logo: null });
  };

  const openDeleteModal = (id: string) => {
    setDeletePartnerId(id);
  };

  const handleDeletePartner = async () => {
    if (deletePartnerId) {
      await dispatch(
        deletePartner({ id: deletePartnerId, token: token || "" }) as any
      );
      setDeletePartnerId(null);
    }
  };

  // Dummy data for testimonials and blog
  const testimonials: any[] = [];
  const blogs: any[] = [];

  let items: any[] = [];
  if (selectedTab === "partners") items = partners;
  if (selectedTab === "testimonials") items = testimonials;
  if (selectedTab === "blog") items = blogs;

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
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-white rounded-xl p-6">
          {/* Render testimonials cards here */}
        </div>
      )}

      {/* Add/Edit Partner Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
          <form
            onSubmit={handleAddOrEditPartner}
            className="bg-white rounded-xl p-8 shadow-lg flex flex-col gap-4 min-w-[320px]"
          >
            <h2 className="text-xl font-bold mb-2">
              {modalMode === "add" ? "Add New Partner" : `Edit Partner`}
            </h2>
            <input
              type="text"
              placeholder="Partner Name"
              value={newPartner.name}
              onChange={(e) =>
                setNewPartner({ ...newPartner, name: e.target.value })
              }
              className="border border-gray-200 rounded-lg px-4 py-2"
              required
            />
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setNewPartner({
                  ...newPartner,
                  logo: e.target.files?.[0] || null,
                })
              }
              className="border border-gray-200 rounded-lg px-4 py-2"
              // required only for add
              required={modalMode === "add"}
            />
            <div className="flex gap-4 mt-2">
              <button
                type="submit"
                className="bg-[#009900] text-white px-6 py-2 rounded-lg font-semibold"
                disabled={loading}
              >
                {loading
                  ? modalMode === "add"
                    ? "Adding..."
                    : "Saving..."
                  : modalMode === "add"
                  ? "Add Partner"
                  : "Save Changes"}
              </button>
              <button
                type="button"
                className="bg-gray-200 text-black px-6 py-2 rounded-lg font-semibold"
                onClick={() => {
                  setShowModal(false);
                  setEditPartner(null);
                  setNewPartner({ name: "", logo: null });
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Delete Partner Modal */}
      {deletePartnerId && (
        <div className="fixed inset-0 bg-white/10 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 shadow-lg flex flex-col gap-4 min-w-[320px] items-center">
            <h2 className="text-xl font-bold mb-2 text-center">
              Delete Partner
            </h2>
            <p className="text-center mb-4">
              Are you sure you want to delete{" "}
              <span className="font-semibold">
                {partners.find((p) => p.id === deletePartnerId)?.name}
              </span>
              ?
            </p>
            <div className="flex gap-4 mt-2">
              <button
                onClick={handleDeletePartner}
                className="bg-red-500 text-white px-6 py-2 rounded-lg font-semibold"
                disabled={loading}
              >
                {loading ? "Deleting..." : "Confirm"}
              </button>
              <button
                onClick={() => setDeletePartnerId(null)}
                className="bg-gray-200 text-black px-6 py-2 rounded-lg font-semibold"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
