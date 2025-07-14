import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} from "@/services/adminService";

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
  { rejectValue: string }
>("products/fetchAll", async (_, { rejectWithValue }) => {
  try {
    return await getProducts();
  } catch (err: any) {
    return rejectWithValue(err.message || "Failed to fetch products");
  }
});

export const createProduct = createAsyncThunk<
  Product,
  FormData,
  { rejectValue: string }
>("products/create", async (formData, { rejectWithValue }) => {
  try {
    return await addProduct(formData);
  } catch (err: any) {
    return rejectWithValue(err.message || "Failed to add product");
  }
});

export const updateProductThunk = createAsyncThunk<
  Product,
  { id: string; formData: FormData },
  { rejectValue: string }
>("products/update", async ({ id, formData }, { rejectWithValue }) => {
  try {
    return await updateProduct(id, formData);
  } catch (err: any) {
    return rejectWithValue(err.message || "Failed to update product");
  }
});

export const deleteProductThunk = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>("products/delete", async (id, { rejectWithValue }) => {
  try {
    return await deleteProduct(id);
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
