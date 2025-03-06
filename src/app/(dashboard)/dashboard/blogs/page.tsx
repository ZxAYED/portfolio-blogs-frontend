"use client";

import { IBlogCardProps } from "@/app/(commonLayout)/blogs/page";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const BlogManagement = () => {
  const [blogs, setBlogs] = useState<IBlogCardProps[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_URL}/blogs`);
        const data = await res.json();
        setBlogs(data.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  const handleDelete = async (blogId: string) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_LOCAL_URL}/blogs/${blogId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        setBlogs((prevBlogs) =>
          prevBlogs.filter((blog) => blog._id !== blogId)
        );
        toast.success("Blog deleted successfully!");
      } else {
        const errorData = await response.json();
        toast.error(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error(error);
      toast.error("Error deleting blog");
    }
  };

  return (
    <div className="px-4 py-8 mx-auto">
      <h1 className="text-3xl font-bold mb-12 text-center">Blog Management</h1>

      <div className="overflow-x-auto">
        <div className="min-w-full bg-white dark:bg-gray-900 shadow-md rounded-lg">
          <table className="table-auto min-w-full">
            <thead className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
              <tr>
                <th className="px-6 py-3 text-left">Image</th>
                <th className="px-6 py-3 text-left">Title</th>
                <th className="px-6 py-3 text-left">Content</th>
                <th className="px-6 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.length > 0 ? (
                blogs.map((blog) => (
                  <tr
                    key={blog._id}
                    className="border-b dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <td className="px-6 py-4">
                      <Image
                        src={blog.imageUrl}
                        alt={blog.title}
                        width={60}
                        height={40}
                        className="rounded-md"
                      />
                    </td>
                    <td className="px-6 py-4">{blog.title}</td>
                    <td className="px-6 py-4 truncate max-w-xs">
                      {blog.content}
                    </td>
                    <td className="px-6 py-4">
                      <Button
                        variant="outline"
                        className="text-red-500 border-red-500 hover:bg-red-100 dark:hover:bg-red-900"
                        onClick={() => handleDelete(blog._id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="text-center py-4">
                    No blogs found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BlogManagement;
