import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/utils/axios";

export type SubmitContactFormPayload = {
  fullName: string;
  email: string;
  phone: string;
  organizationType: string;
  message: string;
};

export const submitContactForm = createAsyncThunk(
  "contact/submit",
  async (payload: SubmitContactFormPayload, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("/messages", payload);
      return data;
    } catch (err: any) {
      const message =
        err?.response?.data?.message ||
        err?.message ||
        "Failed to submit contact form";
      return rejectWithValue(message);
    }
  }
);
