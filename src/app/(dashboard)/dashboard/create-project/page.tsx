"use client";

import ZButton from "@/components/shared/ZButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";

export interface IProject {
  _id: string;
  projectName: string;
  description: string;
  imageUrl: File;
  githubLink: string;
  features: string[];
  githubClientCode: string;
  liveLink: string;
  githubServerCode: string;
}

const CreateProject = () => {
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [featuresInput, setFeaturesInput] = useState<string>("");
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IProject>();

  const onSubmit = async (data: IProject) => {
    setLoading(true);

    const formData = new FormData();
    formData.append("projectName", data.projectName);
    formData.append("description", data.description);
    formData.append("githubLink", data.githubLink);
    formData.append("githubClientCode", data.githubClientCode);
    formData.append("liveLink", data.liveLink);
    formData.append("githubServerCode", data.githubServerCode);
    data.features.forEach((feature, index) =>
      formData.append(`features[${index}]`, feature)
    );

    if (data.imageUrl) {
      formData.append("imageUrl", data.imageUrl);
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_LOCAL_URL}/projects`,
        {
          method: "POST",
          body: formData,
        }
      );
      console.log(response);
      if (response.ok) {
        toast.success("Project created successfully!");
        router.push("/dashboard/projects");
      } else {
        const errorData = await response.json();
        toast.error(`Error: ${errorData.message}`);
        console.log(errorData);
      }
    } catch (error) {
      console.error("Error creating project:", error);
      toast.error("Error creating project");
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

  const handleFeatureChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFeaturesInput(e.target.value);
  };

  const handleFeatureSubmit = () => {
    const featuresArray = featuresInput
      .split(".")
      .map((feature) => feature.trim());

    setValue("features", featuresArray);
    setFeaturesInput("");
  };

  return (
    <div className="px-6 pb-10 max-w-3xl mx-auto">
      <h1 className="text-4xl font-semibold mb-8 text-center">
        Create New Project
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label
            htmlFor="projectName"
            className="block text-lg font-medium mb-2"
          >
            Project Name
          </label>
          <Controller
            name="projectName"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                id="projectName"
                placeholder="Enter project name"
                className="w-full"
              />
            )}
          />
          {errors.projectName && (
            <p className="text-red-500 text-sm">{errors.projectName.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-lg font-medium mb-2"
          >
            Description
          </label>
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <Textarea
                {...field}
                id="description"
                placeholder="Enter project description"
                rows={4}
                className="w-full"
              />
            )}
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="imageUrl" className="block text-lg font-medium mb-2">
            Project Image Upload
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
              className="mt-4  max-w-xs"
            />
          )}
          {errors.imageUrl && (
            <p className="text-red-500 text-sm">{errors.imageUrl.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="features" className="block text-lg font-medium mb-2">
            Features
          </label>
          <textarea
            id="features"
            value={featuresInput}
            onChange={handleFeatureChange}
            className="w-full p-2 border rounded-md"
            rows={4}
            placeholder="Enter features, separated by a full stop (.) Must click on 'Add Feature' to add more  like array of strings "
          />
          <Button
            type="button"
            variant="outline"
            className="mt-2"
            onClick={handleFeatureSubmit}
          >
            Add Feature
          </Button>
        </div>

        <div>
          <label
            htmlFor="githubLink"
            className="block text-lg font-medium mb-2"
          >
            GitHub Link
          </label>
          <Controller
            name="githubLink"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                id="githubLink"
                placeholder="Enter GitHub repository link"
                className="w-full"
              />
            )}
          />
        </div>

        <div>
          <label
            htmlFor="githubClientCode"
            className="block text-lg font-medium mb-2"
          >
            GitHub Client Code
          </label>
          <Controller
            name="githubClientCode"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                id="githubClientCode"
                placeholder="Enter GitHub client code link"
                className="w-full"
              />
            )}
          />
        </div>

        <div>
          <label htmlFor="liveLink" className="block text-lg font-medium mb-2">
            Live Link
          </label>
          <Controller
            name="liveLink"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                id="liveLink"
                placeholder="Enter live project link"
                className="w-full"
              />
            )}
          />
        </div>

        <div>
          <label
            htmlFor="githubServerCode"
            className="block text-lg font-medium mb-2"
          >
            GitHub Server Code
          </label>
          <Controller
            name="githubServerCode"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                id="githubServerCode"
                placeholder="Enter GitHub server code link"
                className="w-full"
              />
            )}
          />
        </div>

        <div className="flex justify-center mt-6">
          <ZButton name={loading ? "Creating..." : "Create Project"}></ZButton>
        </div>
      </form>
    </div>
  );
};

export default CreateProject;
