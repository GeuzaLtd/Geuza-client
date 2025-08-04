"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBlogs,
  createBlog,
  updateBlogThunk,
  deleteBlogThunk,
  Blog,
} from "@/redux/features/blogSlice";
import { RootState } from "@/redux/store";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";

export default function BlogDashboard() {
  const dispatch = useDispatch();
  const { token } = useSelector((state: RootState) => state.auth);
  const { blogs, loading } = useSelector((state: RootState) => state.blogs);
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState<"add" | "edit">("add");
  const [editBlog, setEditBlog] = useState<Blog | null>(null);
  const [deleteBlogId, setDeleteBlogId] = useState<string | null>(null);
  const [newBlog, setNewBlog] = useState({
    title: "",
    body: "",
    authorName: "",
    minRead: "",
    thumbnailImage: null as File | null,
  });

  useEffect(() => {
    dispatch(fetchBlogs({ token: token || "" }) as any);
  }, [dispatch]);

  const openAddModal = () => {
    setModalMode("add");
    setNewBlog({
      title: "",
      body: "",
      authorName: "",
      minRead: "",
      thumbnailImage: null,
    });
    setShowModal(true);
  };

  const openEditModal = (blog: Blog) => {
    setModalMode("edit");
    setEditBlog(blog);
    setNewBlog({
      title: blog.title,
      body: blog.body,
      authorName: blog.authorName,
      minRead: blog.minRead,
      thumbnailImage: null,
    });
    setShowModal(true);
  };

  const handleAddOrEditBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newBlog.title && modalMode === "add") return;
    const formData = new FormData();
    formData.append("title", newBlog.title);
    formData.append("body", newBlog.body);
    formData.append("authorName", newBlog.authorName);
    formData.append("minRead", newBlog.minRead);
    if (newBlog.thumbnailImage)
      formData.append("thumbnailImage", newBlog.thumbnailImage);
    if (modalMode === "add") {
      await dispatch(createBlog({ formData, token: token || "" }) as any);
    } else if (modalMode === "edit" && editBlog) {
      await dispatch(
        updateBlogThunk({
          id: editBlog.id,
          formData,
          token: token || "",
        }) as any
      );
    }
    setShowModal(false);
    setEditBlog(null);
    setNewBlog({
      title: "",
      body: "",
      authorName: "",
      minRead: "",
      thumbnailImage: null,
    });
  };

  const openDeleteModal = (id: string) => {
    setDeleteBlogId(id);
  };

  const handleDeleteBlog = async () => {
    if (deleteBlogId) {
      await dispatch(
        deleteBlogThunk({ id: deleteBlogId, token: token || "" }) as any
      );
      setDeleteBlogId(null);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-white rounded-xl p-6">
      {blogs.slice(0, 3).map((item) => (
        <div key={item.id} className="rounded-xl flex flex-col items-start">
          <div className="relative w-full h-36 mb-4 flex items-center justify-center shadow rounded-lg">
            <Image
              src={item.thumbnailImage}
              alt={item.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="flex justify-between w-full">
            <div className="flex flex-col items-start">
              <div className="font-semibold text-sm text-[#67748E] mb-1">
                Blog
              </div>
              <div className="font-bold text-lg text-black mb-1">
                {item.title}
              </div>
              <div className="text-xs text-[#AFAFAF] mb-1">
                {item.authorName} • {item.minRead} min read
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

      {/* Add/Edit Blog Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
          <form
            onSubmit={handleAddOrEditBlog}
            className="bg-white rounded-xl p-8 shadow-lg flex flex-col gap-4 min-w-[320px]"
          >
            <h2 className="text-xl font-bold mb-2">
              {modalMode === "add" ? "Add New Blog" : `Edit Blog`}
            </h2>
            <input
              type="text"
              placeholder="Title"
              value={newBlog.title}
              onChange={(e) =>
                setNewBlog({ ...newBlog, title: e.target.value })
              }
              className="border border-gray-200 rounded-lg px-4 py-2"
              required={modalMode === "add"}
            />
            <textarea
              placeholder="Body"
              value={newBlog.body}
              onChange={(e) => setNewBlog({ ...newBlog, body: e.target.value })}
              className="border border-gray-200 rounded-lg px-4 py-2 min-h-[80px]"
              required={modalMode === "add"}
            />
            <input
              type="text"
              placeholder="Author Name"
              value={newBlog.authorName}
              onChange={(e) =>
                setNewBlog({ ...newBlog, authorName: e.target.value })
              }
              className="border border-gray-200 rounded-lg px-4 py-2"
              required={modalMode === "add"}
            />
            <input
              type="text"
              placeholder="Min Read"
              value={newBlog.minRead}
              onChange={(e) =>
                setNewBlog({ ...newBlog, minRead: e.target.value })
              }
              className="border border-gray-200 rounded-lg px-4 py-2"
              required={modalMode === "add"}
            />
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setNewBlog({
                  ...newBlog,
                  thumbnailImage: e.target.files?.[0] || null,
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
                  ? "Add Blog"
                  : "Save Changes"}
              </button>
              <button
                type="button"
                className="bg-gray-200 text-black px-6 py-2 rounded-lg font-semibold"
                onClick={() => {
                  setShowModal(false);
                  setEditBlog(null);
                  setNewBlog({
                    title: "",
                    body: "",
                    authorName: "",
                    minRead: "",
                    thumbnailImage: null,
                  });
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Delete Blog Modal */}
      {deleteBlogId && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 shadow-lg flex flex-col gap-4 min-w-[320px] items-center">
            <h2 className="text-xl font-bold mb-2 text-center">Delete Blog</h2>
            <p className="text-center mb-4">
              Are you sure you want to delete{" "}
              <span className="font-semibold">
                {blogs.find((b) => b.id === deleteBlogId)?.title}
              </span>
              ?
            </p>
            <div className="flex gap-4 mt-2">
              <button
                onClick={handleDeleteBlog}
                className="bg-red-500 text-white px-6 py-2 rounded-lg font-semibold"
                disabled={loading}
              >
                {loading ? "Deleting..." : "Confirm"}
              </button>
              <button
                onClick={() => setDeleteBlogId(null)}
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
