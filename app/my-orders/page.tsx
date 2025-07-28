"use client";
import { useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "@/redux/features/orderSlice";
import { AppDispatch, RootState } from "@/redux/store";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";

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
      <Navbar />
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8">My Orders</h1>
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
              <div
                key={order.id}
                className="border rounded-lg p-6 shadow bg-white"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="font-semibold">Order ID:</span> {order.id}
                  </div>
                  <div>
                    <span className="font-semibold">Status:</span>{" "}
                    <span className="capitalize text-[#348E38]">
                      {order.status.toLowerCase()}
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold">Placed:</span>{" "}
                    {new Date(order.createdAt).toLocaleString()}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {order.items.map((item: any) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-4 border p-3 rounded"
                    >
                      <div className="w-16 h-16 relative flex-shrink-0">
                        <Image
                          src={item.product.thumbnailImage}
                          alt={item.product.name}
                          fill
                          className="object-contain rounded"
                        />
                      </div>
                      <div className="flex-1 flex flex-col items-start">
                        <span className="font-medium text-base mb-1">
                          {item.product.name}
                        </span>
                        <span className="text-xs text-gray-500 mb-1">
                          Qty: {item.quantity}
                        </span>
                        {item.size && (
                          <span className="text-xs text-gray-500 mb-1">
                            Size: {item.size}
                          </span>
                        )}
                        {item.color && (
                          <span className="text-xs text-gray-500 mb-1">
                            Color: {item.color}
                          </span>
                        )}
                        {item.specialInstructions && (
                          <span className="text-xs text-gray-500 mb-1">
                            Note: {item.specialInstructions}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
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
