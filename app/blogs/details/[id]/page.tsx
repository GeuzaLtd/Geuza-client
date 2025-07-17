"use client";
import Image from "next/image";
import Link from "next/link";
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { fetchBlogs } from "@/redux/features/blogSlice";

// Truncate function to limit content length
const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};
interface BlogDetailsPageProps {
  params: {
    id: string;
  };
}

export default function BlogDetailsPage({ params }: BlogDetailsPageProps) {
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.auth.token);
  const { blogs } = useSelector((state: RootState) => state.blogs);
  useEffect(() => {
    dispatch(fetchBlogs({ token: token || "" }) as any);
  }, [dispatch, token]);
  const blogId = params.id;
  const blog = blogs.find((b) => b.id === blogId);
  console.log("hiii theree", blog);
  const relatedBlogs = blogs.filter((b) => b.id !== blogId).slice(0, 3);

  if (!blog) {
    return (
      <>
        <Banner />
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-[#348E38] mb-4">
              Blog Not Found
            </h1>
            <Link href="/blogs" className="text-[#FF7900] underline">
              Back to Blogs
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Banner />
      <Navbar />
      <main className="min-h-screen">
        {/* Blog Thumbnail */}
        <div className="w-full h-[500px] relative">
          <Image
            src={blog.thumbnailImage || ""}
            alt={blog.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="w-full py-20 bg-white">
          <div className="w-full max-w-6xl mx-auto">
            {/* Blog Title */}
            <div className="">
              <span className="bg-[#FF79001A] text-[#FF7900] text-xs font-medium px-4 py-2 rounded-full mb-5 uppercase">
                Our Articles
              </span>
              <h1 className="text-4xl font-bold text-[#348E38] leading-tight mt-5">
                {blog.title}
              </h1>
            </div>

            {/* Author Profile */}
            <div className="flex items-center justify-start space-x-4 mb-20 mt-5">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src="/images/avatar.png"
                  alt={blog.authorName}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="">
                <h4 className="text-black font-semibold text-base">
                  {blog.authorName}
                </h4>
                <div className="flex items-center justify-center space-x-2 text-sm text-[#3C4049]">
                  <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                  <span>•</span>
                  <span>{blog.minRead} min read</span>
                </div>
              </div>
            </div>

            {/* Blog Content */}
            <div className="prose prose-lg max-w-none">
              <div className="text-[#5a606d] text-base leading-relaxed whitespace-pre-line">
                {blog.body}
              </div>
            </div>

            {/* Green Divider */}
            <div className="w-full h-px bg-[#348E38] my-20"></div>

            {/* More Posts Section */}
            <div className="space-y-8">
              <h2 className="text-2xl font-light text-black">More Posts</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedBlogs.map((relatedBlog) => (
                  <Link
                    key={relatedBlog.id}
                    href={`/blogs/details/${relatedBlog.id}`}
                    className="group"
                  >
                    <div className="space-y-3">
                      {/* Blog Thumbnail */}
                      <div className="w-full h-40 relative rounded-lg overflow-hidden">
                        <Image
                          src={relatedBlog.thumbnailImage || ""}
                          alt={relatedBlog.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Blog Title */}
                      <h3 className="text-lg font-semibold text-black group-hover:text-[#348E38] transition-colors">
                        {truncateText(relatedBlog.title, 60)}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
