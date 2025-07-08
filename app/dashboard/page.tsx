"use client";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/features/authSlice";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    router.push("/auth/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors"
      >
        Logout
      </button>
    </div>
  );
}
