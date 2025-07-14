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

export default function PartnersDashboard() {
  const dispatch = useDispatch();
  const { partners, loading } = useSelector(
    (state: RootState) => state.partners
  );
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState<"add" | "edit">("add");
  const [editPartner, setEditPartner] = useState<Partner | null>(null);
  const [deletePartnerId, setDeletePartnerId] = useState<string | null>(null);
  const [newPartner, setNewPartner] = useState({
    name: "",
    logo: null as File | null,
  });

  useEffect(() => {
    dispatch(fetchPartners() as any);
  }, [dispatch]);

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
      await dispatch(createPartner(formData) as any);
    } else if (modalMode === "edit" && editPartner) {
      await dispatch(updatePartner({ id: editPartner.id, formData }) as any);
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
      await dispatch(deletePartner(deletePartnerId) as any);
      setDeletePartnerId(null);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-white rounded-xl p-6">
      {partners.slice(0, 3).map((item) => (
        <div key={item.id} className="rounded-xl flex flex-col items-start">
          <div className="relative w-full h-36 mb-4 flex items-center justify-center shadow">
            <Image
              src={item.logo}
              alt={item.name}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="flex justify-between w-full">
            <div className="flex flex-col items-start">
              <div className="font-semibold text-sm text-[#67748E] mb-1">
                Partners
              </div>
              <div className="font-bold text-lg text-black mb-1">
                {item.name}
              </div>
            </div>
            <div className="flex flex-col">
              <button
                className="text-[#009900] flex items-center text-sm mb-1"
                onClick={() => openEditModal(item)}
              >
                Edit
              </button>
              <button
                className="text-red-500 flex items-center text-sm mb-1"
                onClick={() => openDeleteModal(item.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
      {/* Add New Card */}
      <div
        className="bg-white rounded-xl p-6 shadow flex flex-col items-center justify-center cursor-pointer hover:bg-[#F5F5F5]"
        onClick={openAddModal}
      >
        <FaPlus className="text-3xl text-[#AFAFAF]" />
        <span className="mt-2 text-[#AFAFAF] font-semibold">Upload New</span>
      </div>

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
              required={modalMode === "add"}
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
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
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
