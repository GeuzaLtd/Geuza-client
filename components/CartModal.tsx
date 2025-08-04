import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { clearCart, removeFromCart } from "@/redux/features/cartSlice";
import Image from "next/image";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { placeOrder } from "@/services/orderService";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface CartModalProps {
  open: boolean;
  onClose: () => void;
}

interface SpecialInstructions {
  [key: string]: string;
}

export default function CartModal({ open, onClose }: CartModalProps) {
  const dispatch = useDispatch();
  const router = useRouter();
  const items = useSelector((state: RootState) => state.cart.items);
  const { token } = useSelector((state: RootState) => state.auth);
  const [isLoading, setIsLoading] = useState(false);
  const [specialInstructions, setSpecialInstructions] =
    useState<SpecialInstructions>({});

  if (!open) return null;

  const handlePreOrder = async () => {
    if (items.length === 0) return;

    setIsLoading(true);
    const orderItems = items.map((item) => ({
      productId: item.product.id,
      quantity: item.quantity,
      size: item.selectedSize,
      color: item.selectedColor,
      specialInstructions: specialInstructions[item.product.id] || undefined,
    }));

    try {
      await placeOrder({ items: orderItems }, token || "");
      toast.success("Pre-order placed successfully!");
      dispatch(clearCart());
      onClose();
      router.push("/my-orders");
    } catch (err: any) {
      toast.error(
        "Failed to place pre-order: " +
          (err?.response?.data?.message || err.message)
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleInstructionsChange = (productId: string, value: string) => {
    setSpecialInstructions((prev) => ({
      ...prev,
      [productId]: value,
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative max-h-[90vh] overflow-y-auto">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-black"
          onClick={onClose}
        >
          <X size={20} />
        </button>
        <h3 className="text-lg font-semibold mb-2">
          Shopping Cart{" "}
          <span className="text-gray-400">
            ({items.length.toString().padStart(2, "0")})
          </span>
        </h3>

        <div className="divide-y divide-gray-100 max-h-64 overflow-y-auto mb-4">
          {items.length === 0 ? (
            <div className="py-8 text-center text-gray-400">
              Your cart is empty.
            </div>
          ) : (
            items.map((item, idx) => (
              <div key={idx} className="py-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 relative flex-shrink-0">
                    <Image
                      src={item.product.thumbnailImage}
                      alt={item.product.name}
                      fill
                      className="object-contain rounded"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start">
                    <span className="font-medium text-sm mb-1">
                      {item.product.name}
                    </span>
                    <div className="text-xs text-gray-500 mb-1 ">
                      <span className="">{item.quantity} items</span> -
                      <span className="text-xs text-gray-500 mb-1 ml-1">
                        {item.selectedSize}
                      </span>{" "}
                      -
                      <span className="text-xs text-gray-500 mb-1 ml-1">
                        {item.selectedColor}
                      </span>
                    </div>
                  </div>
                  <button
                    className="ml-2 text-gray-400 hover:text-red-500"
                    onClick={() =>
                      dispatch(
                        removeFromCart({
                          productId: item.product.id,
                          selectedSize: item.selectedSize,
                          selectedColor: item.selectedColor,
                        })
                      )
                    }
                    aria-label="Remove"
                    disabled={isLoading}
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Special Instructions Textarea - Only for first product */}
                {idx === 0 && (
                  <div className="mt-3 px-2">
                    <textarea
                      placeholder="Add special instructions for your order (optional)"
                      value={specialInstructions[item.product.id] || ""}
                      onChange={(e) =>
                        handleInstructionsChange(
                          item.product.id,
                          e.target.value
                        )
                      }
                      className="w-full p-2 text-sm border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-[#348E38] focus:border-transparent"
                      rows={2}
                      disabled={isLoading}
                    />
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        <Button
          className="w-full mb-2 bg-[#348E38] hover:bg-[#256b28] text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handlePreOrder}
          disabled={items.length === 0 || isLoading}
        >
          {isLoading ? "Placing Order..." : "Pre-order NOW"}
        </Button>
      </div>
    </div>
  );
}
