"use client";
import Image from "next/image";
import Link from "next/link";
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { fetchBlogs } from "@/redux/features/blogSlice";

// Truncate function to limit content length
const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};

export default function BlogsPage() {
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.auth.token);
  const { blogs } = useSelector((state: RootState) => state.blogs);
  useEffect(() => {
    dispatch(fetchBlogs({ token: token || "" }) as any);
  }, [dispatch, token]);
  return (
    <>
      <Banner />
      <Navbar />
      <main className="min-h-screen">
        {/* Thumbnail Image */}
        <div className="w-full h-[500px] relative">
          <Image
            src="/images/company.jpg"
            alt="Blogs Thumbnail"
            fill
            className="object-cover object-[center_10%]"
          />
        </div>

        {/* Content Section */}
        <div className="w-full px-20 py-20 bg-white">
          <div className="w-full max-w-7xl mx-auto space-y-16">
            <div className="w-full max-w-7xl mx-auto flex items-start space-x-16 px-10 py-20">
              <div className="flex-1">
                <span className="bg-[#FF79001A] text-[#FF7900] text-xs font-medium px-4 py-2 rounded-full mb-5 uppercase">
                  Our Articles
                </span>
                <h2 className="text-4xl font-bold text-[#348E38] leading-tight mt-5">
                  Insights & Impacts
                </h2>
              </div>

              {/* Right part - Paragraph and statistics */}
              <div className="flex-1 space-y-8">
                {/* Paragraph */}
                <p className="text-[#3C4049] text-sm leading-relaxed">
                  Explore our latest updates, innovations, and success stories
                  as we work to create sustainable change.
                </p>
              </div>
            </div>

            {/* Blogs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {blogs.map((blog) => (
                <Link
                  href={`/blogs/details/${blog.id}`}
                  key={blog.id}
                  className="border border-[#EBECEF] rounded-2xl p-2"
                >
                  {/* Blog Thumbnail */}
                  <div className="w-full h-56 mb-4 relative">
                    <Image
                      src={blog.thumbnailImage || ""}
                      alt={blog.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>

                  {/* Blog Title */}
                  <h3 className="text-xl font-bold text-black mb-3 px-5">
                    {blog.title}
                  </h3>

                  {/* Blog Content */}
                  <p className="text-[#3C4049] text-sm leading-relaxed mb-4 px-5">
                    {truncateText(blog.body, 120)}
                  </p>

                  {/* Author Profile */}
                  <div className="flex items-center space-x-3 px-5 mb-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src="/images/avatar.png"
                        alt={blog.authorName}
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-black font-semibold text-sm">
                        {blog.authorName}
                      </h4>
                      <div className="flex items-center space-x-2 text-xs text-[#3C4049]">
                        <span>
                          {new Date(blog.createdAt).toLocaleDateString()}
                        </span>
                        <span>•</span>
                        <span>{blog.minRead} min read</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
