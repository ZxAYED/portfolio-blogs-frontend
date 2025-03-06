"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

import { IProject } from "@/app/(commonLayout)/projects/page";
import Image from "next/image";
import { toast } from "react-toastify";

const ProjectManagement = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_LOCAL_URL}/projects`
        );
        const data = await res.json();
        setProjects(data.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleDelete = async (projectId: string) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_LOCAL_URL}/projects/${projectId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        setProjects((prevProjects) =>
          prevProjects.filter((project) => project._id !== projectId)
        );
        toast.success("Project deleted successfully!");
      } else {
        const errorData = await response.json();
        toast.error(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error(error);
      toast.error("Error deleting project");
    }
  };

  return (
    <div className=" px-4 pb-8">
      <h1 className="text-3xl font-bold mb-12 text-center">
        Project Management
      </h1>

      {loading ? (
        <p className="text-center text-lg">Loading projects...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-900 shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
              <tr>
                <th className="px-6 py-3 text-left">Image</th>
                <th className="px-6 py-3 text-left">Project Name</th>
                <th className="px-6 py-3 text-left">Description</th>
                <th className="px-6 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.length > 0 ? (
                projects.map((project) => (
                  <tr
                    key={project._id}
                    className="border-b dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <td className="px-6 py-4">
                      <Image
                        src={project.imageUrl}
                        alt={project.projectName}
                        width={60}
                        height={40}
                        className="rounded-md"
                      />
                    </td>
                    <td className="px-6 py-4">{project.projectName}</td>
                    <td className="px-6 py-4 truncate max-w-xs">
                      {project.description}
                    </td>
                    <td className="px-6 py-4 flex space-x-2">
                      <Button
                        variant="outline"
                        className="text-red-500 border-red-500 hover:bg-red-100 dark:hover:bg-red-900"
                        onClick={() => handleDelete(project._id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="text-center py-4">
                    No projects found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ProjectManagement;
