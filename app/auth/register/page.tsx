"use client";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "@/services/authService";
import { AppDispatch } from "@/redux/store";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RegisterPage() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const [role, setRole] = useState("organization");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState<{
    fullName: string;
    email: string;
    phone: string;
    password: string;
    type: "ORGANIZATION" | "INDIVIDUAL";
  }>({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    type: "ORGANIZATION",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    if (formData.password !== confirmPassword) {
      toast.error("Passwords do not match");
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    // Update formData type based on role selection
    const updatedFormData = {
      ...formData,
      phone:
        formData.phone.length.toString().includes("+250") &&
        formData.phone.length === 10
          ? formData.phone
          : "+25" + formData.phone,
      type:
        role === "organization"
          ? "ORGANIZATION"
          : ("INDIVIDUAL" as "ORGANIZATION" | "INDIVIDUAL"),
    };

    try {
      const response = await dispatch(
        registerUser({
          fullName: updatedFormData.fullName,
          email: updatedFormData.email,
          phone: updatedFormData.phone,
          password: updatedFormData.password,
          type: updatedFormData.type,
        })
      );
      if (response.payload.user) {
        toast.success("Registration successful");
        router.push("/auth/login");
      } else {
        if (response.payload instanceof Array) {
          setError(response.payload[0].message);
          toast.error(response.payload[0].message);
        } else {
          if (response.payload.includes("409")) {
            setError("User with this email already exists");
            toast.error("User with this email already exists");
          } else {
            setError(response.payload);
            toast.error(response.payload);
          }
        }
      }
    } catch (error) {
      toast.error("Failed to register");
      setError("Failed to register");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen justify-center px-4 py-10 bg-white">
      <ToastContainer />
      <h2 className="text-2xl md:text-3xl font-bold text-[#009900] mb-8">
        Sign up to Geuza!
      </h2>
      <form
        className="w-full max-w-md flex flex-col space-y-4"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Full name"
          value={formData.fullName}
          onChange={(e) =>
            setFormData({ ...formData, fullName: e.target.value })
          }
          className="w-full px-4 py-3 rounded-full bg-[#F1F2F4] text-sm text-[#111827] placeholder-[#9EA2AD] outline-none border-none"
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 rounded-full bg-[#F1F2F4] text-sm text-[#111827] placeholder-[#9EA2AD] outline-none border-none"
        />
        <input
          type="tel"
          placeholder="Phone number"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-4 py-3 rounded-full bg-[#F1F2F4] text-sm text-[#111827] placeholder-[#9EA2AD] outline-none border-none"
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          className="w-full px-4 py-3 rounded-full bg-[#F1F2F4] text-sm text-[#111827] placeholder-[#9EA2AD] outline-none border-none"
        />
        <input
          type="password"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full px-4 py-3 rounded-full bg-[#F1F2F4] text-sm text-[#111827] placeholder-[#9EA2AD] outline-none border-none"
        />
        <div className="flex flex-row justify-center items-center sm:space-x-6 mt-2 gap-2 sm:gap-0">
          <label className="flex items-center cursor-pointer space-x-2">
            <span
              className={`w-5 h-5 rounded-full border-2 ${
                role === "organization"
                  ? "border-[#009900]"
                  : "border-[#EBECEF]"
              } flex items-center justify-center transition-colors`}
            >
              <input
                type="radio"
                name="role"
                value="organization"
                checked={role === "organization"}
                onChange={() => setRole("organization")}
                className="appearance-none w-3 h-3 rounded-full bg-white checked:bg-[#009900]"
              />
            </span>
            <span className="text-xs text-[#3C4049] font-medium">
              Organization
            </span>
          </label>
          <label className="flex items-center cursor-pointer space-x-2">
            <span
              className={`w-5 h-5 rounded-full border-2 ${
                role === "individual" ? "border-[#009900]" : "border-[#EBECEF]"
              } flex items-center justify-center transition-colors`}
            >
              <input
                type="radio"
                name="role"
                value="individual"
                checked={role === "individual"}
                onChange={() => setRole("individual")}
                className="appearance-none w-3 h-3 rounded-full bg-white checked:bg-[#009900]"
              />
            </span>
            <span className="text-xs text-[#3C4049] font-medium">
              Individual
            </span>
          </label>
        </div>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#FF7900] text-white font-semibold py-3 rounded-full hover:bg-[#e66a00] transition-colors mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
      <div className="mt-6 text-center text-sm text-[#3C4049]">
        Have already an account?{" "}
        <Link
          href="/auth/login"
          className="text-[#009900] underline font-medium"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
