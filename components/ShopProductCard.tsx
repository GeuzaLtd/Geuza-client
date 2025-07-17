import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { Product } from "@/redux/features/productSlice";

interface ShopProductCardProps {
  product: Product;
  onClick?: () => void;
}

export default function ShopProductCard({
  product,
  onClick,
}: ShopProductCardProps) {
  const outOfStock = product.minimum <= 0;
  return (
    <div
      className={`bg-[#F1F2F4] flex flex-col justify-between h-[380px] w-[300px] mx-auto shadow-sm p-6 relative transition-all ${
        outOfStock ? "border-2 border-[#A259FF]" : ""
      } cursor-pointer`}
      onClick={onClick}
    >
      <div className="w-full h-full relative mb-4">
        <Image
          src={product.thumbnailImage}
          alt={product.name}
          fill
          className="object-contain rounded-xl"
        />
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="flex flex-col items-start">
          <span className="text-black font-semibold text-lg">
            {product.name}
          </span>
          <span
            className={`text-xs mt-1 ${
              outOfStock ? "text-red-500" : "text-[#348E38]"
            }`}
          >
            {outOfStock ? "Out of Stock" : "In Stock"}
          </span>
        </div>
        <button
          className="bg-white rounded-full p-3 shadow hover:bg-gray-100 transition-colors disabled:opacity-50"
          disabled={outOfStock}
          onClick={(e) => e.stopPropagation()}
        >
          <ShoppingCart size={20} className="text-black" />
        </button>
      </div>
    </div>
  );
}
