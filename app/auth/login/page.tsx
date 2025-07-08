import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center w-full">
      <h2 className="text-3xl font-bold text-[#009900] mb-8">
        Login to Geuza!
      </h2>
      <form className="w-full flex flex-col space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-3 rounded-full bg-[#F1F2F4] text-sm text-[#111827] placeholder-[#9EA2AD] outline-none border-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-3 rounded-full bg-[#F1F2F4] text-sm text-[#111827] placeholder-[#9EA2AD] outline-none border-none"
        />
        <button
          type="submit"
          className="w-full bg-[#FF7900] text-white font-semibold py-3 rounded-full hover:bg-[#e66a00] transition-colors mt-2"
        >
          Login
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
