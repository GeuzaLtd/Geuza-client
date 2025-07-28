import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getMyOrders } from "@/services/orderService";
import { RootState } from "../store";

interface Product {
  id: string;
  name: string;
  thumbnailImage: string;
  minimum: number;
  maximum: number;
}

interface OrderItem {
  id: string;
  orderId: string;
  productId: string;
  quantity: number;
  size?: string;
  color?: string;
  specialInstructions?: string | null;
  product: Product;
}

interface User {
  id: string;
  fullName: string;
  email: string;
  phone: string;
}

interface Order {
  id: string;
  userId: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  user: User;
  items: OrderItem[];
}

interface OrdersState {
  orders: Order[];
  loading: boolean;
  error: string | null;
}

const initialState: OrdersState = {
  orders: [],
  loading: false,
  error: null,
};

export const fetchOrders = createAsyncThunk<
  { data: Order[] },
  { userType: string },
  { state: RootState; rejectValue: string }
>("orders/fetchAll", async (userType, { getState, rejectWithValue }) => {
  try {
    const token = (getState() as RootState).auth.token;
    if (!token) return rejectWithValue("No auth token");
    const response = await getMyOrders(token, userType.userType);
    return response;
  } catch (err: any) {
    return rejectWithValue(err.message || "Failed to fetch orders");
  }
});

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchOrders.fulfilled,
        (state, action: PayloadAction<{ data: Order[] }>) => {
          state.loading = false;
          state.orders = action.payload.data;
        }
      )
      .addCase(fetchOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || null;
      });
  },
});

export default orderSlice.reducer;
