import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { removeFromCart, updateQuantity } from "@/redux/features/cartSlice";
import Image from "next/image";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";

interface CartModalProps {
  open: boolean;
  onClose: () => void;
}

export default function CartModal({ open, onClose }: CartModalProps) {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
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
              <div key={idx} className="flex items-center py-4 gap-4">
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
                >
                  <X size={18} />
                </button>
              </div>
            ))
          )}
        </div>
        <Button className="w-full mb-2 bg-[#348E38] hover:bg-[#256b28] text-white font-semibold">
          Pre-order NOW
        </Button>
      </div>
    </div>
  );
}
