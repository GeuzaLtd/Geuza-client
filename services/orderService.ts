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

const selectToken = (state: RootState) => state.auth.token;

export async function placeOrder(payload: PlaceOrderPayload) {
  const response = await axios.post(`/orders/`, payload, {
    headers: {
      Authorization: `Bearer ${selectToken(store.getState())}` as string,
    },
  });
  return response.data;
}
