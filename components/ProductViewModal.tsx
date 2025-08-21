"use client";
import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/redux/features/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/features/cartSlice";
import { placeOrder } from "@/services/orderService";
import { RootState } from "@/redux/store";
import { displayActualColor } from "@/utils/client";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";

interface ProductViewModalProps {
  open: boolean;
  onClose: () => void;
  product: Product | null;
}

interface ApiError {
  response?: {
    data?: {
      message?: string;
    };
  };
  message?: string;
}

export default function ProductViewModal({
  open,
  onClose,
  product,
}: ProductViewModalProps) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    undefined
  );
  const [selectedColor, setSelectedColor] = useState<string | undefined>(
    undefined
  );
  const [mainImage, setMainImage] = useState<string | undefined>(undefined);
  const [quantity, setQuantity] = useState<number>(product?.minimum || 1);
  const [showInstructions, setShowInstructions] = useState(false);
  const [specialInstructions, setSpecialInstructions] = useState("");
  const { token, user } = useSelector((state: RootState) => state.auth);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  if (!open || !product) return null;

  // Compose all images: thumbnailImage + images[]
  const allImages = [product.thumbnailImage, ...(product.images || [])].filter(
    Boolean
  );
  const minQty = product.minimum;
  const maxQty = product.maximum;

  const handlePreOrder = async () => {
    if (!user || user.role !== "CLIENT") {
      toast.error("Please login to pre-order");
      return;
    }

    if (!showInstructions) {
      setShowInstructions(true);
      return;
    }

    setIsLoading(true);
    try {
      await placeOrder(
        {
          items: [
            {
              productId: product.id,
              quantity,
              size: selectedSize,
              color: selectedColor,
              specialInstructions: specialInstructions || undefined,
            },
          ],
        },
        token || ""
      );
      toast.success("Pre-order placed successfully!");
      router.push("/my-orders");
      onClose();
    } catch (err: unknown) {
      const error = err as ApiError;
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Unknown error occurred";
      setError(errorMessage);
      toast.error("Failed to place pre-order: " + errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <ToastContainer />
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl p-8 relative flex flex-col md:flex-row gap-8">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-black"
          onClick={onClose}
        >
          <X size={24} />
        </button>
        {/* Product Images */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="w-72 h-72 relative mb-4">
            <Image
              src={mainImage || allImages[0]}
              alt={product.name}
              fill
              className="object-contain rounded-xl"
            />
          </div>
          {allImages.length > 1 && (
            <div className="flex gap-2 mt-2">
              {allImages.map((img, idx) => (
                <button
                  key={img}
                  className={`w-12 h-12 relative border rounded ${
                    mainImage === img || (!mainImage && idx === 0)
                      ? "border-[#348E38]"
                      : "border-gray-200"
                  }`}
                  onClick={() => setMainImage(img)}
                >
                  <Image
                    src={img}
                    alt={product.name}
                    fill
                    className="object-contain rounded"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
        {/* Product Details */}
        <div className="flex-1 flex flex-col items-start justify-center">
          <span className="bg-gray-100 text-xs px-3 py-1 rounded-full mb-2 font-medium text-gray-600">
            New!
          </span>
          <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
          <p className="text-gray-500 mb-4">{product.description}</p>
          {/* Quantity Selector */}
          <div className="flex items-center mb-4">
            <button
              className="w-8 h-8 flex items-center justify-center border rounded-l text-xl font-bold disabled:opacity-50"
              onClick={() => setQuantity((q) => Math.max(minQty, q - 1))}
              disabled={quantity <= minQty}
              aria-label="Decrease quantity"
            >
              -
            </button>
            <span className="w-12 text-center text-lg font-semibold border-t border-b py-1">
              {quantity}
            </span>
            <button
              className="w-8 h-8 flex items-center justify-center border rounded-r text-xl font-bold disabled:opacity-50"
              onClick={() => setQuantity((q) => Math.min(maxQty, q + 1))}
              disabled={quantity >= maxQty}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
          {/* Size Options */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="mb-4">
              <div className="text-sm font-medium mb-2">Size</div>
              <div className="flex gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`px-4 py-1 rounded border text-sm font-medium ${
                      selectedSize === size
                        ? "bg-[#348E38] text-white"
                        : "bg-gray-100 text-gray-700"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}
          {/* Color Options */}
          {product.colors && product.colors.length > 0 && (
            <div className="mb-4">
              <div className="text-sm font-medium mb-2">Color</div>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    className={`w-8 h-8 rounded-full border-3 ${displayActualColor(
                      color
                    )} ${
                      selectedColor === color
                        ? "border-[#348E38]"
                        : "border-gray-200"
                    }`}
                    style={{ backgroundColor: displayActualColor(color) }}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Special Instructions Textarea */}
          {showInstructions && (
            <div className="w-full mb-4">
              <label className="block text-sm font-medium mb-2">
                Special Instructions (optional)
              </label>
              <textarea
                value={specialInstructions}
                onChange={(e) => setSpecialInstructions(e.target.value)}
                placeholder="Enter any special instructions for your order..."
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#348E38] focus:border-transparent"
                rows={3}
              />
            </div>
          )}

          {error && (
            <p className="text-red-500 text-sm text-center mb-5">{error}</p>
          )}

          <div className="flex gap-2 w-full mt-4">
            <Button
              className="flex-1 bg-[#348E38] hover:bg-[#256b28] text-white font-semibold"
              onClick={() => {
                dispatch(
                  addToCart({ product, selectedSize, selectedColor, quantity })
                );
                onClose();
              }}
            >
              ADD TO CART
            </Button>
            <Button
              className="bg-[#FF7900] hover:bg-[#e66a00] text-white font-semibold"
              onClick={handlePreOrder}
              disabled={isLoading}
            >
              {isLoading
                ? "SUBMITTING..."
                : showInstructions
                ? "SUBMIT PRE-ORDER"
                : "Pre-order NOW"}
            </Button>
          </div>
          {showInstructions && (
            <Button
              variant="outline"
              className="w-full mt-2"
              onClick={() => {
                setShowInstructions(false);
                setSpecialInstructions("");
              }}
            >
              Cancel
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
