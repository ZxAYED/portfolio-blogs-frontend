"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

import ZButton from "@/components/shared/ZButton";
import { useTheme } from "@/components/theme/ThemeProvider";
import { IProject } from "./page";

export default function ProjectCard({
  project,
  index,
}: {
  project: IProject;
  index: number;
}) {
  const { theme } = useTheme();
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Card
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      className="lg:p-6 mx-5 shadow-lg rounded-2xl border   xl:mx-auto"
    >
      <div
        className={`flex flex-col lg:flex-row  gap-6 ${
          index % 2 === 1 ? "lg:flex-row-reverse" : ""
        }`}
      >
        <div className="w-full p-1 lg:p-0 mt-4 xl:w-1/2">
          <Image
            src={project?.imageUrl}
            alt={project?.projectName}
            width={800}
            height={400}
            className="rounded-xl object-cover w-full h-auto"
          />
        </div>

        <div className="w-full xl:w-1/2 flex flex-col justify-between">
          <CardHeader>
            <CardTitle className={`text-3xl font-bold py-2  `}>
              {project?.projectName}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p
              className={`text-md mb-4 py-2 ${
                theme === "dark" ? "text-gray-400" : "text-gray-800"
              } `}
            >
              {project?.description}
            </p>

            <ul
              className={`list-disc list-inside space-y-1 ${
                theme === "dark" ? "text-gray-400" : "text-gray-700"
              } `}
            >
              {project?.features.map((feature, index) => (
                <li key={index} className="text-sm">
                  {feature}
                </li>
              ))}
              {project?.features.length > 5 && (
                <li className="text-sm text-gray-500">+ more</li>
              )}
            </ul>
          </CardContent>
          <CardFooter className="flex flex-wrap gap-8 mt-8">
            <Link href={project?.liveLink}>
              <ZButton name="Live Link"></ZButton>
            </Link>
            <Link href={project?.githubClientCode}>
              <ZButton name="Frontend Code"></ZButton>
            </Link>
            <Link href={project?.githubServerCode}>
              <ZButton name="Backend Code"></ZButton>
            </Link>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
}
