import { Metadata } from "next";
import BlogCard from "./BlogCard";

export interface IBlogCardProps {
  title: string;
  content: string;
  author: string;
  imageUrl: string;
  _id: string;
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Blogs - My Portfolio`,
    description: `Blogs page for My Portfolio`,
  };
}

const BlogsPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_URL}/blogs`, {
    cache: "force-cache",
  });
  const blogsData = await res.json();
  console.log(blogsData);

  if (!blogsData)
    return (
      <div className="text-center text-2xl text-red-500 ">
        No blog posts found.
      </div>
    );

  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Blog Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogsData?.data?.map((blog: IBlogCardProps) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default BlogsPage;
