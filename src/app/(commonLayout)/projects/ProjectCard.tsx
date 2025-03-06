import ZButton from "@/components/shared/ZButton";
import { Globe } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { IProject } from "./page";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `All Projects `,
    description: `List of all projects `,
  };
}

const ProjectCard = async ({ project }: { project: IProject }) => {
  return (
    <div className="max-w-xl  group p-6 mx-auto rounded-lg shadow-md overflow-hidden relative min-h-[400px] ">
      <div className="overflow-hidden rounded-lg">
        <Image
          width={400}
          height={400}
          quality={100}
          className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-105"
          src={project.imageUrl}
          alt={project.projectName}
        />
      </div>

      <div className="pl-2 pt-3 pb-16">
        <span className="text-xs font-medium text-primary uppercase">
          Project
        </span>
        <h3 className="mt-2 text-xl font-semibold">{project.projectName}</h3>
        <p className="mt-2 text-sm">
          {project.description.substring(0, 150)}...
        </p>

        <ul className="mt-3 list-disc list-inside text-sm">
          {project.features.slice(0, 3).map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="absolute bottom-4 left-4 right-4 flex justify-between gap-4">
        <a
          href={project.liveLink}
          target="_blank"
          className="flex items-center gap-1 text-blue-600 hover:underline"
        >
          <Globe size={16} /> Live Demo
        </a>
        <a
          href={project.githubClientCode}
          target="_blank"
          className="flex items-center gap-1 hover:underline"
        >
          <FaGithub size={16} /> GitHub
        </a>
        <Link href={`/projects/${project._id}`}>
          <ZButton name="Details"></ZButton>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
