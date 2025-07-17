"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/redux/features/productSlice";
import { RootState, AppDispatch } from "@/redux/store";
import ShopProductCard from "@/components/ShopProductCard";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import CartModal from "@/components/CartModal";
import ProductViewModal from "@/components/ProductViewModal";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";

export default function ShopPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { products, loading } = useSelector(
    (state: RootState) => state.products
  );
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [cartOpen, setCartOpen] = useState(false);
  const [productModal, setProductModal] = useState<{
    open: boolean;
    product: any;
  }>({ open: false, product: null });

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  return (
    <div>
      <Banner />
      <Navbar />
      <section className="w-[90%] mx-auto px-4 md:px-20 py-20 bg-white">
        <div className="w-full max-w-7xl mx-auto flex flex-col items-start space-y-8">
          {/* Header */}
          <div className="flex flex-col items-start md:items-center space-y-4 w-full mx-auto">
            <span className="bg-[#FF79001A] text-[#FF7900] text-xs font-medium px-4 py-2 rounded-full uppercase md:self-start">
              Shop
            </span>
            <div className="flex flex-row items-center justify-between w-full">
              <h2 className="text-4xl md:text-5xl font-bold text-[#348E38] leading-tight">
                Assistive Devices
              </h2>
              <form className="flex flex-col md:flex-row items-center gap-2 md:gap-4 w-full max-w-md justify-end">
                <label className="text-sm text-gray-600">
                  Price range (RWF)
                </label>
                <input
                  type="number"
                  placeholder="Min"
                  className="border rounded px-2 py-1 w-20"
                />
                <input
                  type="number"
                  placeholder="Max"
                  className="border rounded px-2 py-1 w-20"
                />
                <Button type="submit" className="px-6">
                  Filter
                </Button>
                <button
                  type="button"
                  className="relative ml-2 p-2 rounded-full hover:bg-gray-100 transition-colors"
                  onClick={() => setCartOpen(true)}
                  aria-label="Open cart"
                >
                  <ShoppingCart size={24} className="text-[#348E38]" />
                  {cartItems.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-[#348E38] text-white text-xs rounded-full px-1.5 py-0.5">
                      {cartItems.length}
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
          {/* Price Filter */}
          {/* Product Grid */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
            {loading ? (
              <div className="col-span-full text-center text-gray-500">
                Loading...
              </div>
            ) : products.length === 0 ? (
              <div className="col-span-full text-center text-gray-500">
                No products found.
              </div>
            ) : (
              products.map((product) => (
                <ShopProductCard
                  key={product.id}
                  product={product}
                  onClick={() => setProductModal({ open: true, product })}
                />
              ))
            )}
          </div>
        </div>
      </section>
      <Footer />
      <CartModal open={cartOpen} onClose={() => setCartOpen(false)} />
      <ProductViewModal
        open={productModal.open}
        onClose={() => setProductModal({ open: false, product: null })}
        product={productModal.product}
      />
    </div>
  );
}
