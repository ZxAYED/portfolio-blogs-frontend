import Image from "next/image";
// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ id: string }>;
// }) {
//   try {
//     const { id } = await params;
//     const res = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_URL}/blogs/${id}`);
//     if (!res.ok) {
//       throw new Error("Failed to fetch metadata");
//     }
//     const blog = await res.json();
//     return {
//       title: `${blog.data?.title || "Blog Detail"}`,
//       description: `Details for the blog titled ${blog.data?.title}`,
//     };
//   } catch (error) {
//     console.error("Metadata fetch error:", error);
//     return {
//       title: "Blog Not Found",
//       description: "Error loading blog metadata",
//     };
//   }
// }

const BlogDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_URL}/blogs/${id}`, {
    cache: "no-store",
  });

  const data = await res.json();
  const blog = data.data || [];

  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-4xl mt-4 font-bold text-center mb-8">
        {blog?.title}
      </h1>

      <div className="flex justify-center mb-6">
        <Image
          width={600}
          height={600}
          src={blog?.imageUrl}
          alt={blog?.title}
          className="w-full h-80 object-cover rounded-lg"
        />
      </div>

      <div className="text-lg">
        <h3 className="font-semibold text-xl mb-4">Content</h3>
        <p className=" dark:text-gray-500">{blog?.content}</p>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold text-xl">Author: {blog?.author}</h3>
      </div>
    </section>
  );
};

export default BlogDetailPage;
