"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "@/redux/features/orderSlice";
import { RootState, AppDispatch } from "@/redux/store";
import Image from "next/image";

export default function DashboardOrdersPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { orders, loading, error } = useSelector(
    (state: RootState) => state.orders
  );

  useEffect(() => {
    dispatch(fetchOrders({ userType: "ADMIN" }));
  }, [dispatch]);

  const getTotalQuantity = (items: Array<{ quantity: number }>) => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  if (loading) {
    return <div className="p-6">Loading orders...</div>;
  }

  if (error) {
    return <div className="p-6 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="p-6 bg-white">
      <h1 className="text-2xl font-bold mb-6">Orders</h1>

      <div className="bg-white rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-[#F1F4F9] text-black">
              <th className="px-6 py-4 text-left font-semibold">
                Product Details
              </th>
              <th className="px-6 py-4 text-left font-semibold">Order Date</th>
              <th className="px-6 py-4 text-left font-semibold">Qty</th>
              <th className="px-6 py-4 text-left font-semibold">
                Client Details
              </th>
              <th className="px-6 py-4 text-left font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b-[1px] border-[#c8c8c8]">
                <td className="px-6 py-4">
                  <div className="space-y-2">
                    {order.items.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center space-x-3"
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
                          <div className="font-medium text-sm">
                            {item.product.name}
                          </div>
                          <div className="text-xs text-gray-500">
                            {item.size && `Size: ${item.size}`}
                            {item.size && item.color && " • "}
                            {item.color && `Color: ${item.color} • `}
                            {item.quantity && `Qty: ${item.quantity}`}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 text-sm">
                  {formatDate(order.createdAt)}
                </td>
                <td className="px-6 py-4 text-sm font-medium">
                  {getTotalQuantity(order.items)}
                </td>
                <td className="px-6 py-4 text-sm">
                  <div>
                    <h1 className="text-black font-semibold">
                      {order.user.fullName}
                    </h1>
                    <h1 className="text-gray-500 text-sm">
                      {order.user.email}
                    </h1>
                    <h1 className="text-gray-500 text-sm">
                      {order.user.phone}
                    </h1>
                  </div>
                </td>
                <td className="px-6 py-4">
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {orders.length === 0 && (
          <div className="px-6 py-8 text-center text-gray-500">
            No orders found.
          </div>
        )}
      </div>
    </div>
  );
}
