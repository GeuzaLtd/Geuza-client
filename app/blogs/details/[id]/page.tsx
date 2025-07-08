import Image from "next/image";
import Link from "next/link";
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Truncate function to limit content length
const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};

const blogs = [
  {
    id: 1,
    thumbnail: "/images/delete-8.png",
    title: "The Future of Sustainable Assistive Technology",
    content: `As we move towards a more sustainable future, the intersection of environmental responsibility and assistive technology is becoming increasingly important. Our latest innovations in e-waste transformation are not just about creating functional devices, but about building a better world for everyone.

The journey from electronic waste to assistive technology is not just a technical process—it's a transformation of perspective. Every discarded device represents an opportunity to create something meaningful and impactful. At GEUZA, we've developed proprietary methods to extract valuable materials from e-waste and repurpose them into high-quality assistive devices.

Our approach combines cutting-edge technology with sustainable practices. We work with local communities to collect e-waste, providing employment opportunities while cleaning up the environment. The collected materials are carefully processed and transformed into components for crutches, walkers, prosthetics, and other assistive devices.

The impact of this work extends far beyond the individual devices we create. Each product represents a step towards a more inclusive and sustainable world. By using recycled materials, we're not only reducing environmental impact but also making assistive technology more affordable and accessible to those who need it most.

Our commitment to sustainability goes hand in hand with our mission to empower people with disabilities. We believe that everyone deserves access to high-quality assistive technology, regardless of their economic circumstances. Through our innovative approach, we're making this vision a reality.

The future of assistive technology is not just about functionality—it's about creating a world where technology serves both people and the planet. As we continue to develop new products and processes, we're guided by the principle that innovation should benefit everyone, including future generations.`,
    author: {
      name: "Alice Kimani",
      avatar: "/images/1.webp",
      createdAt: "2024-01-15",
      readTime: "5 mins read",
    },
  },
  {
    id: 2,
    thumbnail: "/images/delete-8.png",
    title: "Empowering Communities Through Circular Economy",
    content:
      "The circular economy isn't just a business model—it's a movement that empowers communities to take control of their resources and create sustainable solutions. At GEUZA, we're seeing firsthand how this approach transforms both lives and environments.",
    author: {
      name: "Brian Otieno",
      avatar: "/images/2.jpeg",
      createdAt: "2024-01-10",
      readTime: "3 mins read",
    },
  },
  {
    id: 3,
    thumbnail: "/images/delete-8.png",
    title: "Innovation in Disability Support: A New Era",
    content:
      "Technology has always been a great equalizer, but when combined with sustainable practices, it becomes a force for positive change. Our latest developments in assistive technology are breaking new ground in accessibility and environmental responsibility.",
    author: {
      name: "Cynthia Mwangi",
      avatar: "/images/3.png",
      createdAt: "2024-01-05",
      readTime: "7 mins read",
    },
  },
  {
    id: 4,
    thumbnail: "/images/delete-8.png",
    title: "From E-Waste to Empowerment: The GEUZA Story",
    content:
      "Every piece of electronic waste tells a story of consumption and disposal. But what if we could rewrite that story? What if every discarded device could become a tool for empowerment and independence?",
    author: {
      name: "David Njoroge",
      avatar: "/images/1.webp",
      createdAt: "2024-01-01",
      readTime: "4 mins read",
    },
  },
  {
    id: 5,
    thumbnail: "/images/delete-8.png",
    title: "Building Inclusive Technology for All",
    content:
      "Inclusive design isn't just about accessibility—it's about creating technology that serves everyone, regardless of their abilities or circumstances. Our approach to assistive technology design prioritizes both functionality and sustainability.",
    author: {
      name: "Esther Wambui",
      avatar: "/images/2.jpeg",
      createdAt: "2023-12-28",
      readTime: "6 mins read",
    },
  },
  {
    id: 6,
    thumbnail: "/images/delete-8.png",
    title: "The Impact of Sustainable Manufacturing",
    content:
      "Manufacturing doesn't have to be harmful to the environment. By rethinking our production processes and materials, we can create high-quality assistive devices that benefit both users and the planet.",
    author: {
      name: "Fatima Ali",
      avatar: "/images/3.png",
      createdAt: "2023-12-25",
      readTime: "5 mins read",
    },
  },
];

interface BlogDetailsPageProps {
  params: {
    id: string;
  };
}

export default function BlogDetailsPage({ params }: BlogDetailsPageProps) {
  const blogId = parseInt(params.id);
  const blog = blogs.find((b) => b.id === blogId);
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
            src={blog.thumbnail}
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
                  src={blog.author.avatar}
                  alt={blog.author.name}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="">
                <h4 className="text-black font-semibold text-base">
                  {blog.author.name}
                </h4>
                <div className="flex items-center justify-center space-x-2 text-sm text-[#3C4049]">
                  <span>
                    {new Date(blog.author.createdAt).toLocaleDateString()}
                  </span>
                  <span>•</span>
                  <span>{blog.author.readTime}</span>
                </div>
              </div>
            </div>

            {/* Blog Content */}
            <div className="prose prose-lg max-w-none">
              <div className="text-[#5a606d] text-base leading-relaxed whitespace-pre-line">
                {blog.content}
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
                          src={relatedBlog.thumbnail}
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
