"use client";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../../../redux/features/authSlice";
import { useRouter } from "next/navigation";
import { loginUser } from "../../../services/authService";
import { RootState } from "../../../redux/store";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  const { loading, error, user } = useSelector(
    (state: RootState) => state.auth
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const resultAction = await dispatch(loginUser({ email, password }) as any);
    if (loginUser.fulfilled.match(resultAction)) {
      if (resultAction.payload.user.role === "ADMIN") {
        router.push("/dashboard");
      } else {
        // Optionally, you can dispatch logout or show error
        // dispatch(logout());
        alert("You are not authorized to access the dashboard.");
      }
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      <h2 className="text-3xl font-bold text-[#009900] mb-8">
        Login to Geuza!
      </h2>
      <form className="w-full flex flex-col space-y-4" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 rounded-full bg-[#F1F2F4] text-sm text-[#111827] placeholder-[#9EA2AD] outline-none border-none"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 rounded-full bg-[#F1F2F4] text-sm text-[#111827] placeholder-[#9EA2AD] outline-none border-none"
        />
        {error && <div className="text-red-500 text-sm mt-2">{error}</div>}

        <button
          type="submit"
          className="w-full bg-[#FF7900] text-white font-semibold py-3 rounded-full hover:bg-[#e66a00] transition-colors mt-2"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
      <div className="mt-6 text-center text-sm text-[#3C4049]">
        Don't have an account?{" "}
        <Link
          href="/auth/register"
          className="text-[#009900] underline font-medium"
        >
          Register
        </Link>
      </div>
    </div>
  );
}
