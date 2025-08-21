"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaTachometerAlt,
  FaBoxOpen,
  FaShoppingCart,
  FaSearch,
  FaSignOutAlt,
} from "react-icons/fa";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/features/authSlice";
import { useRouter } from "next/navigation";
import { RootState } from "@/redux/store";

const menuItems = [
  { name: "Dashboard", icon: <FaTachometerAlt />, href: "/dashboard" },
  { name: "Products", icon: <FaBoxOpen />, href: "/dashboard/products" },
  { name: "Orders", icon: <FaShoppingCart />, href: "/dashboard/orders" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const router = useRouter();
  const { user } = useSelector((state: RootState) => state.auth);
  // Determine current page title
  const currentPage =
    menuItems.find((item) => pathname.startsWith(item.href))?.name ||
    "Dashboard";

  return (
    <div className="flex max-h-screen bg-[#F5F5F5]">
      {/* Sidebar */}
      <aside className="w-[250px] bg-white border-r border-gray-200 flex flex-col py-6 px-4 justify-between h-screen">
        <div>
          {/* Logo */}
          <div className="w-full mb-28 flex items-center justify-center">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={100}
              height={100}
              className="mr-2"
            />
          </div>
          {/* Menu */}
          <nav className="flex flex-col gap-2">
            {menuItems.map((item) => {
              const active =
                pathname === item.href ||
                (item.href !== "/dashboard" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-[6px] font-medium text-base transition-colors
                  ${
                    active
                      ? "bg-[#009900] text-white"
                      : "text-black hover:bg-[#F5F5F5]"
                  }`}
                >
                  <span
                    className={`text-lg ${
                      active ? "text-white" : "text-black"
                    }`}
                  >
                    {item.icon}
                  </span>
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>
        {/* Logout Button */}
        <button
          onClick={() => {
            dispatch(logout());
            router.push("/auth/login");
          }}
          className="flex items-center gap-3 px-4 py-3 rounded-[6px] font-medium text-base text-black hover:bg-[#F5F5F5] transition-colors mb-2 cursor-pointer"
        >
          <FaSignOutAlt className="text-lg" />
          <span>Logout</span>
        </button>
      </aside>
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header
          className="flex items-center justify-between px-8 py-0 bg-white border-b border-gray-200"
          style={{ minHeight: 80 }}
        >
          {/* Page Title */}
          <div className="text-2xl font-semibold text-black">{currentPage}</div>
          {/* Search */}
          <div className="flex-1 flex justify-center">
            <div className="flex items-center bg-[#F5F5F5] rounded-[12px] px-4 py-2 w-[380px]">
              <FaSearch className="text-black mr-2" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none border-none text-[#AFAFAF] flex-1"
              />
            </div>
          </div>
          {/* Profile Card */}
          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="font-semibold text-black leading-tight">
                {user?.fullName}
              </div>
              <div className="text-xs text-[#AFAFAF] font-medium uppercase">
                {user?.role}
              </div>
            </div>
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#009900] flex items-center justify-center bg-white">
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-xl font-semibold text-gray-600">
                  {user?.fullName?.[0]?.toUpperCase() || "U"}
                </span>
              </div>
            </div>
          </div>
        </header>
        {/* Page Content */}
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
