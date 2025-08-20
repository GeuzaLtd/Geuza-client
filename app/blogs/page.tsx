"use client";
import Image from "next/image";
import Link from "next/link";
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { fetchBlogs } from "@/redux/features/blogSlice";
import ThumbnailImage from "@/components/ThumbnailImage";

// Truncate function to limit content length
const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};

export default function BlogsPage() {
  const dispatch = useDispatch<AppDispatch>();
  const token = useSelector((state: RootState) => state.auth.token);
  const { blogs } = useSelector((state: RootState) => state.blogs);
  useEffect(() => {
    dispatch(fetchBlogs({ token: token || "" }));
  }, [dispatch, token]);
  return (
    <>
      <Banner />
      <Navbar />
      <main className="min-h-screen">
        {/* Thumbnail Image */}
        <ThumbnailImage
          src="/images/blog-2.jpg"
          alt="Blogs Thumbnail"
          className="w-full h-[350px] relative"
          imageClassName="object-[center_25%]"
        />

        {/* Content Section */}
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
          <div className="w-full max-w-7xl mx-auto space-y-8 sm:space-y-12 md:space-y-16">
            <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-start lg:space-x-16 space-y-6 lg:space-y-0 px-4 sm:px-6 md:px-10 py-8 sm:py-12 md:py-16 lg:py-20">
              <div className="flex-1">
                <span className="bg-[#FF79001A] text-[#FF7900] text-xs font-medium px-3 sm:px-4 py-2 rounded-full mb-3 sm:mb-5 uppercase">
                  Our Articles
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#348E38] leading-tight mt-3 sm:mt-5">
                  Insights & Impacts
                </h2>
              </div>

              {/* Right part - Paragraph and statistics */}
              <div className="flex-1 space-y-4 sm:space-y-6 md:space-y-8">
                {/* Paragraph */}
                <p className="text-[#3C4049] text-sm sm:text-base leading-relaxed">
                  Explore our latest updates, innovations, and success stories
                  as we work to create sustainable change.
                </p>
              </div>
            </div>

            {/* Blogs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {blogs.map((blog) => (
                <Link
                  href={`/blogs/details/${blog.id}`}
                  key={blog.id}
                  className="border border-[#EBECEF] rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-2 hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Blog Thumbnail */}
                  <div className="w-full h-48 sm:h-52 md:h-56 mb-3 sm:mb-4 relative">
                    <Image
                      src={blog.thumbnailImage || ""}
                      alt={blog.title}
                      fill
                      className="object-cover rounded-lg  object-[center_25%]"
                    />
                  </div>

                  {/* Blog Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-black mb-2 sm:mb-3 px-3 sm:px-4 md:px-5">
                    {blog.title}
                  </h3>

                  {/* Blog Content */}
                  <p className="text-[#3C4049] text-sm leading-relaxed mb-3 sm:mb-4 px-3 sm:px-4 md:px-5">
                    {truncateText(blog.body, 120)}
                  </p>

                  {/* Author Profile */}
                  <div className="flex items-center space-x-3 px-3 sm:px-4 md:px-5 mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src="/images/avatar.png"
                        alt={blog.authorName}
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-black font-semibold text-xs sm:text-sm">
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
