"use client";
import { useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "@/redux/features/orderSlice";
import { AppDispatch, RootState } from "@/redux/store";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";
import ThumbnailImage from "@/components/ThumbnailImage";
import { addDays, format } from "date-fns";
import Banner from "@/components/Banner";
import { displayActualColor } from "@/utils/client";

export default function MyOrdersPage() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { orders, loading, error } = useSelector(
    (state: RootState) => state.orders
  );
  const { token } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    dispatch(fetchOrders({ userType: "CLIENT" }));
  }, [dispatch]);

  useEffect(() => {
    if (!token) {
      router.push("/auth/login");
    }
  }, [token, router]);

  if (!token) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Banner />
      <Navbar />
      <ThumbnailImage
        src="/images/company-2.jpeg"
        alt="Blogs Thumbnail"
        className="w-full h-[350px] relative"
      />
      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="flex items-center gap-4 my-12">
          <Image
            src="/images/truck-tick.png"
            alt="Blogs Thumbnail"
            width={120}
            height={120}
          />
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-[#348E38]">
              Track my order
            </h1>
            <p className="text-black text-sm font-semibold">
              Get estimated delivery time
            </p>
          </div>
        </div>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div className="text-red-500">{error}</div>
        ) : orders.length === 0 ? (
          <div className="text-gray-500">
            You have not placed any orders yet.
          </div>
        ) : (
          <div className="space-y-8">
            {orders.map((order) => (
              <div key={order.id} className="bg-white shadow-sm rounded-lg p-6">
                <div className="flex items-start gap-6 mb-6">
                  {/* Product Thumbnail */}
                  <div className="w-20 h-20 relative flex-shrink-0 rounded-lg overflow-hidden">
                    <Image
                      src={
                        order.items[0]?.product.thumbnailImage ||
                        "/images/placeholder.png"
                      }
                      alt={order.items[0]?.product.name || "Product"}
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>

                  {/* Order Info */}
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-black mb-2">
                      Order ID: {order.id}
                    </h2>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>
                        Order date:{" "}
                        {format(new Date(order.createdAt), "dd MMM yyyy")}
                      </span>
                      <span className="text-[#009900]">
                        | Estimated Delivery:{" "}
                        {format(
                          addDays(new Date(order.createdAt), 7),
                          "dd MMM yyyy"
                        ) || "N/A"}
                      </span>
                    </div>
                  </div>

                  {/* Status */}
                  <div className="text-right">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        order.status === "PENDING"
                          ? "bg-yellow-100 text-yellow-800"
                          : order.status === "COMPLETED"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                </div>

                {/* Order Summary */}
                <div className="border-t border-gray-100 pt-6">
                  <h3 className="font-semibold text-lg mb-4">Order Summary</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {order.items.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-4 p-3 rounded bg-gray-50"
                      >
                        <div className="w-12 h-12 relative flex-shrink-0">
                          <Image
                            src={item.product.thumbnailImage}
                            alt={item.product.name}
                            fill
                            className="object-contain rounded"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-sm mb-1">
                            {item.product.name}
                          </div>
                          <div className="text-xs text-gray-500 space-y-1">
                            <div>Qty: {item.quantity}</div>
                            {item.size && <div>Size: {item.size}</div>}
                            {item.color && (
                              <div className="flex items-center gap-2">
                                <div>Color:</div>
                                <div
                                  className={`w-4 h-4 rounded-full ${displayActualColor(
                                    item.color
                                  )}`}
                                ></div>
                              </div>
                            )}
                            {item.specialInstructions && (
                              <div>Note: {item.specialInstructions}</div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
