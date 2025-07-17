import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {
  getBlogs,
  addBlog,
  updateBlog,
  deleteBlog,
} from "@/services/adminService";

export interface Blog {
  id: string;
  title: string;
  body: string;
  authorName: string;
  minRead: string;
  thumbnailImage: string;
  createdAt: string;
  updatedAt: string;
}

interface BlogState {
  blogs: Blog[];
  loading: boolean;
  error: string | null;
}

const initialState: BlogState = {
  blogs: [],
  loading: false,
  error: null,
};

export const fetchBlogs = createAsyncThunk<
  Blog[],
  { token: string },
  { rejectValue: string }
>("blogs/fetchAll", async ({ token }, { rejectWithValue }) => {
  try {
    return await getBlogs(token);
  } catch (err: any) {
    return rejectWithValue(err.message || "Failed to fetch blogs");
  }
});

export const createBlog = createAsyncThunk<
  Blog,
  { formData: FormData; token: string },
  { rejectValue: string }
>("blogs/create", async ({ formData, token }, { rejectWithValue }) => {
  try {
    return await addBlog(formData, token);
  } catch (err: any) {
    return rejectWithValue(err.message || "Failed to add blog");
  }
});

export const updateBlogThunk = createAsyncThunk<
  Blog,
  { id: string; formData: FormData; token: string },
  { rejectValue: string }
>("blogs/update", async ({ id, formData, token }, { rejectWithValue }) => {
  try {
    return await updateBlog(id, formData, token);
  } catch (err: any) {
    return rejectWithValue(err.message || "Failed to update blog");
  }
});

export const deleteBlogThunk = createAsyncThunk<
  string,
  { id: string; token: string },
  { rejectValue: string }
>("blogs/delete", async ({ id, token }, { rejectWithValue }) => {
  try {
    return await deleteBlog(id, token);
  } catch (err: any) {
    return rejectWithValue(err.message || "Failed to delete blog");
  }
});

const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlogs.fulfilled, (state, action: PayloadAction<Blog[]>) => {
        state.loading = false;
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || null;
      })
      .addCase(createBlog.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createBlog.fulfilled, (state, action: PayloadAction<Blog>) => {
        state.loading = false;
        state.blogs.unshift(action.payload);
      })
      .addCase(createBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || null;
      })
      .addCase(
        updateBlogThunk.fulfilled,
        (state, action: PayloadAction<Blog>) => {
          state.loading = false;
          const idx = state.blogs.findIndex((b) => b.id === action.payload.id);
          if (idx !== -1) state.blogs[idx] = action.payload;
        }
      )
      .addCase(
        deleteBlogThunk.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.loading = false;
          state.blogs = state.blogs.filter((b) => b.id !== action.payload);
        }
      );
  },
});

export default blogSlice.reducer;
