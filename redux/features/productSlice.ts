import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} from "@/services/adminService";
import { RootState } from "../store";

export interface Product {
  id: string;
  name: string;
  sizes: string[];
  minimum: number;
  maximum: number;
  colors: string[];
  thumbnailImage: string;
  images: string[];
  description: string;
  createdAt: string;
  updatedAt: string;
}

interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk<
  Product[],
  void,
  { state: RootState; rejectValue: string }
>("products/fetchAll", async (_, { getState, rejectWithValue }) => {
  try {
    const token = (getState() as RootState).auth.token;
    return await getProducts(token!);
  } catch (err: any) {
    return rejectWithValue(err.message || "Failed to fetch products");
  }
});

export const createProduct = createAsyncThunk<
  Product,
  FormData,
  { state: RootState; rejectValue: string }
>("products/create", async (formData, { getState, rejectWithValue }) => {
  try {
    const token = (getState() as RootState).auth.token;
    return await addProduct(formData, token!);
  } catch (err: any) {
    return rejectWithValue(err.message || "Failed to add product");
  }
});

export const updateProductThunk = createAsyncThunk<
  Product,
  { id: string; formData: FormData },
  { state: RootState; rejectValue: string }
>(
  "products/update",
  async ({ id, formData }, { getState, rejectWithValue }) => {
    try {
      const token = (getState() as RootState).auth.token;
      return await updateProduct(id, formData, token!);
    } catch (err: any) {
      return rejectWithValue(err.message || "Failed to update product");
    }
  }
);

export const deleteProductThunk = createAsyncThunk<
  string,
  string,
  { state: RootState; rejectValue: string }
>("products/delete", async (id, { getState, rejectWithValue }) => {
  try {
    const token = (getState() as RootState).auth.token;
    return await deleteProduct(id, token!);
  } catch (err: any) {
    return rejectWithValue(err.message || "Failed to delete product");
  }
});

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.loading = false;
          state.products = action.payload;
        }
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || null;
      })
      .addCase(createProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        createProduct.fulfilled,
        (state, action: PayloadAction<Product>) => {
          state.loading = false;
          state.products.unshift(action.payload);
        }
      )
      .addCase(createProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || null;
      })
      .addCase(
        updateProductThunk.fulfilled,
        (state, action: PayloadAction<Product>) => {
          state.loading = false;
          const idx = state.products.findIndex(
            (p) => p.id === action.payload.id
          );
          if (idx !== -1) state.products[idx] = action.payload;
        }
      )
      .addCase(
        deleteProductThunk.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.loading = false;
          state.products = state.products.filter(
            (p) => p.id !== action.payload
          );
        }
      );
  },
});

export default productSlice.reducer;
