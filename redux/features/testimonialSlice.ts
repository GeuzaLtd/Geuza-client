import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {
  getTestimonials,
  addTestimonial,
  updateTestimonial,
  deleteTestimonial,
} from "@/services/adminService";

export interface Testimonial {
  id: string;
  companyName: string;
  testimonial: string;
  companyImage: string;
  createdAt: string;
  updatedAt: string;
}

interface TestimonialState {
  testimonials: Testimonial[];
  loading: boolean;
  error: string | null;
}

const initialState: TestimonialState = {
  testimonials: [],
  loading: false,
  error: null,
};

export const fetchTestimonials = createAsyncThunk<
  Testimonial[],
  { token: string },
  { rejectValue: string }
>("testimonials/fetchAll", async ({ token }, { rejectWithValue }) => {
  try {
    return await getTestimonials(token);
  } catch (err: any) {
    return rejectWithValue(err.message || "Failed to fetch testimonials");
  }
});

export const createTestimonial = createAsyncThunk<
  Testimonial,
  { formData: FormData; token: string },
  { rejectValue: string }
>("testimonials/create", async ({ formData, token }, { rejectWithValue }) => {
  try {
    return await addTestimonial(formData, token);
  } catch (err: any) {
    return rejectWithValue(err.message || "Failed to add testimonial");
  }
});

export const updateTestimonialThunk = createAsyncThunk<
  Testimonial,
  { id: string; formData: FormData; token: string },
  { rejectValue: string }
>(
  "testimonials/update",
  async ({ id, formData, token }, { rejectWithValue }) => {
    try {
      return await updateTestimonial(id, formData, token);
    } catch (err: any) {
      return rejectWithValue(err.message || "Failed to update testimonial");
    }
  }
);

export const deleteTestimonialThunk = createAsyncThunk<
  string,
  { id: string; token: string },
  { rejectValue: string }
>("testimonials/delete", async ({ id, token }, { rejectWithValue }) => {
  try {
    return await deleteTestimonial(id, token);
  } catch (err: any) {
    return rejectWithValue(err.message || "Failed to delete testimonial");
  }
});

const testimonialSlice = createSlice({
  name: "testimonials",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTestimonials.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchTestimonials.fulfilled,
        (state, action: PayloadAction<Testimonial[]>) => {
          state.loading = false;
          state.testimonials = action.payload;
        }
      )
      .addCase(fetchTestimonials.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || null;
      })
      .addCase(createTestimonial.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        createTestimonial.fulfilled,
        (state, action: PayloadAction<Testimonial>) => {
          state.loading = false;
          state.testimonials.unshift(action.payload);
        }
      )
      .addCase(createTestimonial.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || null;
      })
      .addCase(
        updateTestimonialThunk.fulfilled,
        (state, action: PayloadAction<Testimonial>) => {
          state.loading = false;
          const idx = state.testimonials.findIndex(
            (t) => t.id === action.payload.id
          );
          if (idx !== -1) state.testimonials[idx] = action.payload;
        }
      )
      .addCase(
        deleteTestimonialThunk.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.loading = false;
          state.testimonials = state.testimonials.filter(
            (t) => t.id !== action.payload
          );
        }
      );
  },
});

export default testimonialSlice.reducer;
