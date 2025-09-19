import axiosInstance from "@/utils/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// ---------------------------------
// Partners
// ---------------------------------
// export const getPartners = async (token: string) => {
export const getPartners = async (token: string) => {
  const res = await axiosInstance.get("/partners/", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data.data.partners;
};

// export const addPartner = async (formData: FormData, token: string) => {
export const addPartner = async (formData: FormData, token: string) => {
  const res = await axiosInstance.post("/partners/", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data.data.partner;
};

export const updatePartner = async (
  id: string,
  formData: FormData,
  token: string
) => {
  const res = await axiosInstance.patch(`/partners/${id}`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data.data.partner;
};

// export const deletePartner = async (id: string, token: string) => {
export const deletePartner = async (id: string, token: string) => {
  await axiosInstance.delete(`/partners/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return id;
};

// ---------------------------------
// Blogs
// ---------------------------------
// export const getBlogs = async (token: string) => {
export const getBlogs = async (token: string) => {
  const res = await axiosInstance.get("/blogs/", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data.data.blogs;
};

// export const addBlog = async (formData: FormData, token: string) => {
export const addBlog = async (formData: FormData, token: string) => {
  console.log("Hiiii", formData);
  const res = await axiosInstance.post("/blogs/", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data.data.blog;
};

export const updateBlog = async (
  id: string,
  formData: FormData,
  token: string
) => {
  const res = await axiosInstance.patch(`/blogs/${id}`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data.data.blog;
};

// export const deleteBlog = async (id: string, token: string) => {
export const deleteBlog = async (id: string, token: string) => {
  await axiosInstance.delete(`/blogs/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return id;
};

// ---------------------------------
// Testimonials
// ---------------------------------
// export const getTestimonials = async (token: string) => {
export const getTestimonials = async (token: string) => {
  const res = await axiosInstance.get("/testimonials/", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data.data.testimonials;
};

// export const addTestimonial = async (formData: FormData, token: string) => {
export const addTestimonial = async (formData: FormData, token: string) => {
  const res = await axiosInstance.post("/testimonials/", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data.data.testimonial;
};

export const updateTestimonial = async (
  id: string,
  formData: FormData,
  token: string
) => {
  const res = await axiosInstance.patch(`/testimonials/${id}`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data.data.testimonial;
};

// export const deleteTestimonial = async (id: string, token: string) => {
export const deleteTestimonial = async (id: string, token: string) => {
  console.log("Hiiii", token);
  await axiosInstance.delete(`/testimonials/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return id;
};

// ---------------------------------
// Products
// ---------------------------------
// export const getProducts = async (token: string) => {
export const getProducts = async (token: string) => {
  const res = await axiosInstance.get("/products/", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data.data.products;
};

// export const addProduct = async (formData: FormData, token: string) => {
export const addProduct = async (formData: FormData, token: string) => {
  const res = await axiosInstance.post("/products/", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data.data.product;
};

export const updateProduct = async (
  id: string,
  formData: FormData,
  token: string
) => {
  const res = await axiosInstance.patch(`/products/${id}`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data.data.product;
};

// export const deleteProduct = async (id: string, token: string) => {
export const deleteProduct = async (id: string, token: string) => {
  await axiosInstance.delete(`/products/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return id;
};

// ---------------------------------
// Messages
// ---------------------------------

export const getAllMessages = createAsyncThunk(
  "messages/fetchAll",
  async (token: string, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/messages/", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data.data.messages;
    } catch (err: any) {
      return rejectWithValue(
        err?.response?.data?.message ||
          err?.message ||
          "Failed to fetch messages"
      );
    }
  }
);

export const updateMessageStatus = createAsyncThunk(
  "messages/updateStatus",
  async (
    {
      messageId,
      status,
      token,
    }: { messageId: string; status: "read" | "unread"; token: string },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await axiosInstance.patch(
        `/messages/${messageId}/status`,
        { status },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return data;
    } catch (err: any) {
      return rejectWithValue(
        err?.response?.data?.message ||
          err?.message ||
          "Failed to update status"
      );
    }
  }
);

export const deleteMessage = createAsyncThunk(
  "messages/delete",
  async (
    { messageId, token }: { messageId: string; token: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axiosInstance.delete(`/messages/${messageId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data.data;
    } catch (err: any) {
      return rejectWithValue(
        err?.response?.data?.message ||
          err?.message ||
          "Failed to delete message"
      );
    }
  }
);
