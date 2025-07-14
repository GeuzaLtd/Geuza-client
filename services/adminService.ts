import axiosInstance from "@/utils/axios";
import { RootState, store } from "@/redux/store";

const selectToken = (state: RootState) => state.auth.token;

// ---------------------------------
// Partners
// ---------------------------------
export const getPartners = async () => {
  const res = await axiosInstance.get("/partners/", {
    headers: { Authorization: `Bearer ${selectToken(store.getState())}` },
  });
  return res.data.data.partners;
};

export const addPartner = async (formData: FormData) => {
  const res = await axiosInstance.post("/partners/", formData, {
    headers: {
      Authorization: `Bearer ${selectToken(store.getState())}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data.data.partner;
};

export const updatePartner = async (id: string, formData: FormData) => {
  const res = await axiosInstance.patch(`/partners/${id}`, formData, {
    headers: {
      Authorization: `Bearer ${selectToken(store.getState())}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data.data.partner;
};

export const deletePartner = async (id: string) => {
  await axiosInstance.delete(`/partners/${id}`, {
    headers: { Authorization: `Bearer ${selectToken(store.getState())}` },
  });
  return id;
};

// ---------------------------------
// Blogs
// ---------------------------------
export const getBlogs = async () => {
  const res = await axiosInstance.get("/blogs/", {
    headers: { Authorization: `Bearer ${selectToken(store.getState())}` },
  });
  return res.data.data.blogs;
};

export const addBlog = async (formData: FormData) => {
  const res = await axiosInstance.post("/blogs/", formData, {
    headers: {
      Authorization: `Bearer ${selectToken(store.getState())}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data.data.blog;
};

export const updateBlog = async (id: string, formData: FormData) => {
  const res = await axiosInstance.patch(`/blogs/${id}`, formData, {
    headers: {
      Authorization: `Bearer ${selectToken(store.getState())}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data.data.blog;
};

export const deleteBlog = async (id: string) => {
  await axiosInstance.delete(`/blogs/${id}`, {
    headers: { Authorization: `Bearer ${selectToken(store.getState())}` },
  });
  return id;
};

// ---------------------------------
// Testimonials
// ---------------------------------
export const getTestimonials = async () => {
  const res = await axiosInstance.get("/testimonials/", {
    headers: { Authorization: `Bearer ${selectToken(store.getState())}` },
  });
  return res.data.data.testimonials;
};

export const addTestimonial = async (formData: FormData) => {
  const res = await axiosInstance.post("/testimonials/", formData, {
    headers: {
      Authorization: `Bearer ${selectToken(store.getState())}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data.data.testimonial;
};

export const updateTestimonial = async (id: string, formData: FormData) => {
  const res = await axiosInstance.patch(`/testimonials/${id}`, formData, {
    headers: {
      Authorization: `Bearer ${selectToken(store.getState())}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data.data.testimonial;
};

export const deleteTestimonial = async (id: string) => {
  await axiosInstance.delete(`/testimonials/${id}`, {
    headers: { Authorization: `Bearer ${selectToken(store.getState())}` },
  });
  return id;
};

// ---------------------------------
// Products
// ---------------------------------
export const getProducts = async () => {
  const res = await axiosInstance.get("/products/", {
    headers: { Authorization: `Bearer ${selectToken(store.getState())}` },
  });
  return res.data.data.products;
};

export const addProduct = async (formData: FormData) => {
  const res = await axiosInstance.post("/products/", formData, {
    headers: {
      Authorization: `Bearer ${selectToken(store.getState())}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data.data.product;
};

export const updateProduct = async (id: string, formData: FormData) => {
  const res = await axiosInstance.patch(`/products/${id}`, formData, {
    headers: {
      Authorization: `Bearer ${selectToken(store.getState())}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data.data.product;
};

export const deleteProduct = async (id: string) => {
  await axiosInstance.delete(`/products/${id}`, {
    headers: { Authorization: `Bearer ${selectToken(store.getState())}` },
  });
  return id;
};
