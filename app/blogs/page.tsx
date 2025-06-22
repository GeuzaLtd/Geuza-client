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
    content:
      "As we move towards a more sustainable future, the intersection of environmental responsibility and assistive technology is becoming increasingly important. Our latest innovations in e-waste transformation are not just about creating functional devices, but about building a better world for everyone.",
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

export default function BlogsPage() {
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
                <div
                  key={blog.id}
                  className="border border-[#EBECEF] rounded-2xl p-2"
                >
                  {/* Blog Thumbnail */}
                  <div className="w-full h-56 mb-4 relative">
                    <Image
                      src={blog.thumbnail}
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
                    {truncateText(blog.content, 120)}
                  </p>

                  {/* Author Profile */}
                  <div className="flex items-center space-x-3 px-5 mb-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={blog.author.avatar}
                        alt={blog.author.name}
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-black font-semibold text-sm">
                        {blog.author.name}
                      </h4>
                      <div className="flex items-center space-x-2 text-xs text-[#3C4049]">
                        <span>
                          {new Date(blog.author.createdAt).toLocaleDateString()}
                        </span>
                        <span>•</span>
                        <span>{blog.author.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
