import axiosInstance from "@/utils/axios";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1NTY2NDg2OS0zOTQ1LTQxNjEtOTc4Yy05MTZjNTlkM2U1YjMiLCJlbWFpbCI6ImFkbWluQGdldXphLmNvbSIsInR5cGUiOiJJTkRJVklEVUFMIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNzUxMDE5NDM3fQ.vTF-GA-ZB0Evjw9dSowYFEkzy8hIUkO1nOnaSVIGCJc";

// ---------------------------------
// Partners
// ---------------------------------
export const getPartners = async () => {
  const res = await axiosInstance.get("/partners/", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data.data.partners;
};

export const addPartner = async (formData: FormData) => {
  const res = await axiosInstance.post("/partners/", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data.data.partner;
};
