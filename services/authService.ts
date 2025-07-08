import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/utils/axios";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (
    { email, password }: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axiosInstance.post("/auth/login", {
        email,
        password,
      });
      if (!response.data.success) {
        return rejectWithValue(response.data.message || "Login failed");
      }
      return response.data.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || error.message || "Login failed"
      );
    }
  }
);
