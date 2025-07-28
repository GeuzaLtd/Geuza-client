import { RootState, store } from "@/redux/store";
import axios from "@/utils/axios";

export interface OrderItem {
  productId: string;
  quantity: number;
  size?: string;
  color?: string;
  specialInstructions?: string;
}

export interface PlaceOrderPayload {
  items: OrderItem[];
}

// const selectToken = (state: RootState) => state.auth.token;

export async function placeOrder(payload: PlaceOrderPayload, token: string) {
  const response = await axios.post(`/orders/`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function getMyOrders(token: string, userType: string) {
  const response = await axios.get(
    `${userType === "ADMIN" ? "/orders/" : "/orders/my-orders/"}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
}
