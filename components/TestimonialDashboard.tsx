"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTestimonials,
  createTestimonial,
  updateTestimonialThunk,
  deleteTestimonialThunk,
  Testimonial,
} from "@/redux/features/testimonialSlice";
import { RootState } from "@/redux/store";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";

export default function TestimonialDashboard() {
  const dispatch = useDispatch();
  const { token } = useSelector((state: RootState) => state.auth);
  const { testimonials, loading } = useSelector(
    (state: RootState) => state.testimonials
  );
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState<"add" | "edit">("add");
  const [editTestimonial, setEditTestimonial] = useState<Testimonial | null>(
    null
  );
  const [deleteTestimonialId, setDeleteTestimonialId] = useState<string | null>(
    null
  );
  const [newTestimonial, setNewTestimonial] = useState({
    companyName: "",
    testimonial: "",
    companyImage: null as File | null,
  });

  useEffect(() => {
    dispatch(fetchTestimonials({ token: token || "" }) as any);
  }, [dispatch, token]);

  const openAddModal = () => {
    setModalMode("add");
    setNewTestimonial({ companyName: "", testimonial: "", companyImage: null });
    setShowModal(true);
  };

  const openEditModal = (testimonial: Testimonial) => {
    setModalMode("edit");
    setEditTestimonial(testimonial);
    setNewTestimonial({
      companyName: testimonial.companyName,
      testimonial: testimonial.testimonial,
      companyImage: null,
    });
    setShowModal(true);
  };

  const handleAddOrEditTestimonial = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTestimonial.companyName && modalMode === "add") return;
    const formData = new FormData();
    formData.append("companyName", newTestimonial.companyName);
    formData.append("testimonial", newTestimonial.testimonial);
    if (newTestimonial.companyImage)
      formData.append("companyImage", newTestimonial.companyImage);
    if (modalMode === "add") {
      await dispatch(
        createTestimonial({ formData, token: token || "" }) as any
      );
    } else if (modalMode === "edit" && editTestimonial) {
      await dispatch(
        updateTestimonialThunk({
          id: editTestimonial.id,
          formData,
          token: token || "",
        }) as any
      );
    }
    setShowModal(false);
    setEditTestimonial(null);
    setNewTestimonial({ companyName: "", testimonial: "", companyImage: null });
  };

  const openDeleteModal = (id: string) => {
    setDeleteTestimonialId(id);
  };

  const handleDeleteTestimonial = async () => {
    if (deleteTestimonialId) {
      await dispatch(
        deleteTestimonialThunk({
          id: deleteTestimonialId,
          token: token || "",
        }) as any
      );
      setDeleteTestimonialId(null);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-white rounded-xl p-6">
      {testimonials.slice(0, 3).map((item) => (
        <div key={item.id} className="rounded-xl flex flex-col items-start">
          <div className="relative w-full h-36 mb-4 flex items-center justify-center shadow rounded-lg">
            <Image
              src={item.companyImage}
              alt={item.companyName}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="flex justify-between w-full">
            <div className="flex flex-col items-start">
              <div className="font-semibold text-sm text-[#67748E] mb-1">
                Testimonial
              </div>
              <div className="font-bold text-lg text-black mb-1">
                {item.companyName}
              </div>
              <div className="text-xs text-[#AFAFAF] mb-1">
                {item.testimonial}
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

      {/* Add/Edit Testimonial Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
          <form
            onSubmit={handleAddOrEditTestimonial}
            className="bg-white rounded-xl p-8 shadow-lg flex flex-col gap-4 min-w-[320px]"
          >
            <h2 className="text-xl font-bold mb-2">
              {modalMode === "add" ? "Add New Testimonial" : `Edit Testimonial`}
            </h2>
            <input
              type="text"
              placeholder="Company Name"
              value={newTestimonial.companyName}
              onChange={(e) =>
                setNewTestimonial({
                  ...newTestimonial,
                  companyName: e.target.value,
                })
              }
              className="border border-gray-200 rounded-lg px-4 py-2"
              required={modalMode === "add"}
            />
            <textarea
              placeholder="Testimonial"
              value={newTestimonial.testimonial}
              onChange={(e) =>
                setNewTestimonial({
                  ...newTestimonial,
                  testimonial: e.target.value,
                })
              }
              className="border border-gray-200 rounded-lg px-4 py-2 min-h-[80px]"
              required={modalMode === "add"}
            />
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setNewTestimonial({
                  ...newTestimonial,
                  companyImage: e.target.files?.[0] || null,
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
                  ? "Add Testimonial"
                  : "Save Changes"}
              </button>
              <button
                type="button"
                className="bg-gray-200 text-black px-6 py-2 rounded-lg font-semibold"
                onClick={() => {
                  setShowModal(false);
                  setEditTestimonial(null);
                  setNewTestimonial({
                    companyName: "",
                    testimonial: "",
                    companyImage: null,
                  });
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Delete Testimonial Modal */}
      {deleteTestimonialId && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 shadow-lg flex flex-col gap-4 min-w-[320px] items-center">
            <h2 className="text-xl font-bold mb-2 text-center">
              Delete Testimonial
            </h2>
            <p className="text-center mb-4">
              Are you sure you want to delete{" "}
              <span className="font-semibold">
                {
                  testimonials.find((t) => t.id === deleteTestimonialId)
                    ?.companyName
                }
              </span>
              ?
            </p>
            <div className="flex gap-4 mt-2">
              <button
                onClick={handleDeleteTestimonial}
                className="bg-red-500 text-white px-6 py-2 rounded-lg font-semibold"
                disabled={loading}
              >
                {loading ? "Deleting..." : "Confirm"}
              </button>
              <button
                onClick={() => setDeleteTestimonialId(null)}
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
