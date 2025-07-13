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
