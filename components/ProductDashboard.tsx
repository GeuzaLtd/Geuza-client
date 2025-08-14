"use client";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  createProduct,
  updateProductThunk,
  deleteProductThunk,
  Product,
} from "@/redux/features/productSlice";
import { RootState, AppDispatch } from "@/redux/store";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";

const colorOptions = ["W", "B", "Y", "G", "R"];
const sizeOptions = ["XS", "S", "M", "L", "XL", "XXL"];

export default function ProductDashboard() {
  const dispatch = useDispatch<AppDispatch>();
  const { products, loading } = useSelector(
    (state: RootState) => state.products
  );
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState<"add" | "edit">("add");
  const [editProduct, setEditProduct] = useState<Product | null>(null);
  const [deleteProductId, setDeleteProductId] = useState<string | null>(null);
  const [newProduct, setNewProduct] = useState({
    name: "",
    sizes: [] as string[],
    minimum: "",
    maximum: "",
    colors: [] as string[],
    thumbnailImage: null as File | null,
    images: [] as File[],
    description: "",
  });
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [previewThumb, setPreviewThumb] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const thumbInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const openAddModal = () => {
    setModalMode("add");
    setNewProduct({
      name: "",
      sizes: [],
      minimum: "",
      maximum: "",
      colors: [],
      thumbnailImage: null,
      images: [],
      description: "",
    });
    setPreviewImages([]);
    setPreviewThumb("");
    setShowModal(true);
  };

  const openEditModal = (product: Product) => {
    setModalMode("edit");
    setEditProduct(product);
    setNewProduct({
      name: product.name,
      sizes: product.sizes,
      minimum: product.minimum.toString(),
      maximum: product.maximum.toString(),
      colors: product.colors,
      thumbnailImage: null,
      images: [],
      description: product.description,
    });
    setPreviewThumb(product.thumbnailImage);
    setPreviewImages(product.images);
    setShowModal(true);
  };

  const handleAddOrEditProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProduct.name && modalMode === "add") return;
    const formData = new FormData();
    formData.append("name", newProduct.name);
    newProduct.sizes.forEach((size) => formData.append("sizes", size));
    formData.append("minimum", newProduct.minimum);
    formData.append("maximum", newProduct.maximum);
    newProduct.colors.forEach((color) => formData.append("colors", color));
    if (newProduct.thumbnailImage)
      formData.append("thumbnailImage", newProduct.thumbnailImage);
    newProduct.images.forEach((img) => formData.append("images", img));
    formData.append("description", newProduct.description);
    if (modalMode === "add") {
      await dispatch(createProduct(formData));
    } else if (modalMode === "edit" && editProduct) {
      await dispatch(updateProductThunk({ id: editProduct.id, formData }));
    }
    dispatch(fetchProducts());
    setShowModal(false);
    setEditProduct(null);
    setNewProduct({
      name: "",
      sizes: [],
      minimum: "",
      maximum: "",
      colors: [],
      thumbnailImage: null,
      images: [],
      description: "",
    });
    setPreviewImages([]);
    setPreviewThumb("");
  };

  const openDeleteModal = (id: string) => {
    setDeleteProductId(id);
  };

  const handleDeleteProduct = async () => {
    if (deleteProductId) {
      await dispatch(deleteProductThunk(deleteProductId));
      setDeleteProductId(null);
    }
  };

  // Handle file previews
  const handleThumbChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setNewProduct((prev) => ({ ...prev, thumbnailImage: file }));
      setPreviewThumb(URL.createObjectURL(file));
    }
  };
  const handleImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setNewProduct((prev) => ({ ...prev, images: files.slice(0, 4) }));
    setPreviewImages(files.slice(0, 4).map((f) => URL.createObjectURL(f)));
  };

  // UI for color and size selection
  const toggleColor = (color: string) => {
    setNewProduct((prev) => ({
      ...prev,
      colors: prev.colors.includes(color)
        ? prev.colors.filter((c) => c !== color)
        : [...prev.colors, color],
    }));
  };
  const toggleSize = (size: string) => {
    setNewProduct((prev) => ({
      ...prev,
      sizes: prev.sizes.includes(size)
        ? prev.sizes.filter((s) => s !== size)
        : [...prev.sizes, size],
    }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-white rounded-xl p-6">
      {/* Scrollable Products Container */}
      <div className="col-span-3 overflow-x-auto">
        <div className="flex gap-6">
          {products.map((item) => (
            <div
              key={item.id}
              className="rounded-xl flex flex-col items-start w-1/3 flex-shrink-0"
            >
              <div className="relative w-full h-36 mb-4 flex items-center justify-center shadow rounded-lg">
                <Image
                  src={item.thumbnailImage}
                  alt={item.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex justify-between w-full">
                <div className="flex flex-col items-start">
                  <div className="font-semibold text-sm text-[#67748E] mb-1">
                    Product
                  </div>
                  <div className="font-bold text-lg text-black mb-1">
                    {item.name}
                  </div>
                  <div className="text-xs text-[#AFAFAF] mb-1">
                    {item.description}
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
        </div>
      </div>
      {/* Add New Card */}
      <div
        className="bg-white rounded-xl p-6 shadow flex flex-col items-center justify-center cursor-pointer hover:bg-[#F5F5F5]"
        onClick={openAddModal}
      >
        <FaPlus className="text-3xl text-[#AFAFAF]" />
        <span className="mt-2 text-[#AFAFAF] font-semibold">Upload New</span>
      </div>

      {/* Add/Edit Product Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
          <form
            onSubmit={handleAddOrEditProduct}
            className="bg-white rounded-xl shadow-lg flex flex-col md:flex-row gap-8 p-8 min-w-[800px]"
          >
            {/* Left: Form Fields */}
            <div className="flex-1 flex flex-col gap-4">
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block mb-1 text-sm font-medium">
                    Product Name
                  </label>
                  <input
                    type="text"
                    value={newProduct.name}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, name: e.target.value })
                    }
                    className="w-full border border-gray-200 rounded-lg px-4 py-2"
                    required={modalMode === "add"}
                  />
                </div>
                <div className="w-48">
                  <label className="block mb-1 text-sm font-medium">For</label>
                  <select className="w-full border border-gray-200 rounded-lg px-4 py-2">
                    <option>For Adult</option>
                    <option>For Child</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">
                  Description
                </label>
                <textarea
                  value={newProduct.description}
                  onChange={(e) =>
                    setNewProduct({
                      ...newProduct,
                      description: e.target.value,
                    })
                  }
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 min-h-[60px]"
                  required={modalMode === "add"}
                />
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block mb-1 text-sm font-medium">
                    Quantity Limit
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      placeholder="Min"
                      value={newProduct.minimum}
                      onChange={(e) =>
                        setNewProduct({
                          ...newProduct,
                          minimum: e.target.value,
                        })
                      }
                      className="w-1/2 border border-gray-200 rounded-lg px-4 py-2"
                      required={modalMode === "add"}
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      value={newProduct.maximum}
                      onChange={(e) =>
                        setNewProduct({
                          ...newProduct,
                          maximum: e.target.value,
                        })
                      }
                      className="w-1/2 border border-gray-200 rounded-lg px-4 py-2"
                      required={modalMode === "add"}
                    />
                  </div>
                </div>
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">Colors</label>
                <div className="flex gap-2 mt-1">
                  {colorOptions.map((color) => (
                    <button
                      type="button"
                      key={color}
                      className={`px-4 py-2 rounded-full border ${
                        newProduct.colors.includes(color)
                          ? "bg-[#009900] text-white"
                          : "bg-gray-100 text-gray-700"
                      }`}
                      onClick={() => toggleColor(color)}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">Sizes</label>
                <div className="flex gap-2 mt-1">
                  {sizeOptions.map((size) => (
                    <button
                      type="button"
                      key={size}
                      className={`px-3 py-1 rounded-full border ${
                        newProduct.sizes.includes(size)
                          ? "bg-[#009900] text-white"
                          : "bg-gray-100 text-gray-700"
                      }`}
                      onClick={() => toggleSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-[#009900] text-white font-semibold py-3 rounded-lg mt-4 hover:bg-green-700 transition-colors"
                disabled={loading}
              >
                {loading
                  ? modalMode === "add"
                    ? "Adding..."
                    : "Saving..."
                  : modalMode === "add"
                  ? "Add product"
                  : "Save Changes"}
              </button>
            </div>
            {/* Right: Image Uploads */}
            <div className="flex-1 flex flex-col gap-4 items-center">
              <label className="block mb-1 text-sm font-medium">
                Thumbnail Image
              </label>
              <div
                className="w-full h-40 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer bg-gray-50"
                onClick={() => thumbInputRef.current?.click()}
              >
                {previewThumb ? (
                  <Image
                    src={previewThumb}
                    alt="Thumbnail"
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                ) : (
                  <Image
                    src="/icons/upload.svg"
                    alt="Upload"
                    width={48}
                    height={48}
                  />
                )}
                <span className="mt-2 text-gray-500 text-sm">
                  Drag & drop image or{" "}
                  <span className="text-[#009900] underline">Browse</span>
                </span>
                <span className="text-xs text-gray-400">
                  Supported formats: PNG, JPEG, JPG
                </span>
                <input
                  ref={thumbInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleThumbChange}
                />
              </div>
              <label className="block mb-1 text-sm font-medium mt-4">
                Product Images (up to 4)
              </label>
              <div className="flex gap-2 w-full">
                {[0, 1, 2, 3].map((idx) => (
                  <div
                    key={idx}
                    className="w-20 h-20 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer bg-gray-50"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    {previewImages[idx] ? (
                      <Image
                        src={previewImages[idx]}
                        alt={`Product ${idx + 1}`}
                        width={60}
                        height={60}
                        className="object-contain"
                      />
                    ) : (
                      <Image
                        src="/icons/upload.svg"
                        alt="Upload"
                        width={32}
                        height={32}
                      />
                    )}
                  </div>
                ))}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  className="hidden"
                  onChange={handleImagesChange}
                />
              </div>
            </div>
          </form>
        </div>
      )}

      {/* Delete Product Modal */}
      {deleteProductId && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 shadow-lg flex flex-col gap-4 min-w-[320px] items-center">
            <h2 className="text-xl font-bold mb-2 text-center">
              Delete Product
            </h2>
            <p className="text-center mb-4">
              Are you sure you want to delete{" "}
              <span className="font-semibold">
                {products.find((p) => p.id === deleteProductId)?.name}
              </span>
              ?
            </p>
            <div className="flex gap-4 mt-2">
              <button
                onClick={handleDeleteProduct}
                className="bg-red-500 text-white px-6 py-2 rounded-lg font-semibold"
                disabled={loading}
              >
                {loading ? "Deleting..." : "Confirm"}
              </button>
              <button
                onClick={() => setDeleteProductId(null)}
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
