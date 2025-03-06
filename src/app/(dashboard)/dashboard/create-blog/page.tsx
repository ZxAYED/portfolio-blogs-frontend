"use client";

import ZButton from "@/components/shared/ZButton"; // Assuming you have a custom ZButton component
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";

export interface IBlogCardProps {
  title: string;
  content: string;
  author: string;
  imageUrl: File;
  _id: string;
}

const CreateBlog = () => {
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IBlogCardProps>();

  const onSubmit = async (data: IBlogCardProps) => {
    setLoading(true);

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("content", data.content);
    formData.append("author", data.author);
    if (data.imageUrl) {
      formData.append("imageUrl", data.imageUrl);
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_LOCAL_URL}/blogs`,
        {
          method: "POST",
          body: formData,
        }
      );
      console.log(response);
      if (response.ok) {
        toast.success("Blog created successfully!");
        router.push("/dashboard/blogs");
      } else {
        const errorData = await response.json();
        console.log("🚀 ~ onSubmit ~ errorData:", errorData);
        toast.error(`Error: ${errorData.message}`);
        console.log(errorData);
      }
    } catch (error) {
      console.error("Error creating blog:", error);
      toast.error("Error creating blog");
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      setValue("imageUrl", file);
    }
  };

  return (
    <div className="px-6 py-10 max-w-3xl mx-auto">
      <h1 className="text-4xl font-semibold mb-8 text-center">
        Create New Blog
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Title Input */}
        <div>
          <label htmlFor="title" className="block text-lg font-medium mb-2">
            Blog Title
          </label>
          <Controller
            name="title"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                id="title"
                placeholder="Enter blog title"
                className="w-full"
              />
            )}
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="content" className="block text-lg font-medium mb-2">
            Blog Content
          </label>
          <Controller
            name="content"
            control={control}
            render={({ field }) => (
              <Textarea
                {...field}
                id="content"
                placeholder="Enter blog content"
                rows={4}
                className="w-full"
              />
            )}
          />
          {errors.content && (
            <p className="text-red-500 text-sm">{errors.content.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="imageUrl" className="block text-lg font-medium mb-2">
            Blog Image Upload
          </label>
          <input
            type="file"
            id="imageUrl"
            accept="image/*"
            className="w-full border p-2"
            onChange={handleImageChange}
          />
          {imagePreview && (
            <Image
              quality={100}
              height="400"
              width="400"
              src={imagePreview}
              alt="Preview"
              className="mt-4 max-w-xs"
            />
          )}
          {errors.imageUrl && (
            <p className="text-red-500 text-sm">{errors.imageUrl.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="author" className="block text-lg font-medium mb-2">
            Author Name
          </label>
          <Controller
            name="author"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                id="author"
                placeholder="Enter author name"
                className="w-full"
              />
            )}
          />
          {errors.author && (
            <p className="text-red-500 text-sm">{errors.author.message}</p>
          )}
        </div>

        <div className="flex justify-center mt-6">
          <ZButton name={loading ? "Creating..." : "Create Blog"}></ZButton>
        </div>
      </form>
    </div>
  );
};

export default CreateBlog;
