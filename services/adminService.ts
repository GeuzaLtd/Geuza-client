import axiosInstance from "@/utils/axios";

// ---------------------------------
// Partners
// ---------------------------------
export const getPartners = async (token: string) => {
  const res = await axiosInstance.get("/partners/", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data.data.partners;
};

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

export const deletePartner = async (id: string, token: string) => {
  await axiosInstance.delete(`/partners/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return id;
};

// ---------------------------------
// Blogs
// ---------------------------------
export const getBlogs = async (token: string) => {
  const res = await axiosInstance.get("/blogs/", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data.data.blogs;
};

export const addBlog = async (formData: FormData, token: string) => {
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

export const deleteBlog = async (id: string, token: string) => {
  await axiosInstance.delete(`/blogs/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return id;
};

// ---------------------------------
// Testimonials
// ---------------------------------
export const getTestimonials = async (token: string) => {
  const res = await axiosInstance.get("/testimonials/", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data.data.testimonials;
};

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

export const deleteTestimonial = async (id: string, token: string) => {
  await axiosInstance.delete(`/testimonials/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return id;
};

// ---------------------------------
// Products
// ---------------------------------
export const getProducts = async (token: string) => {
  const res = await axiosInstance.get("/products/", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data.data.products;
};

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

export const deleteProduct = async (id: string, token: string) => {
  await axiosInstance.delete(`/products/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return id;
};
