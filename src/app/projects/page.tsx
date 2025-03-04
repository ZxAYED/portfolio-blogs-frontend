"use client";
import { motion } from "framer-motion";

import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

export interface IProject {
  projectId: string;
  projectName: string;
  description: string;
  features: string[];
  githubClientCode: string;
  githubServerCode: string;
  liveLink: string;
  imageUrl: string;
}

const Projects = () => {
  const [data, setData] = useState<IProject[]>([]);
  useEffect(() => {
    fetch("/api.json", {
      cache: "force-cache",
    })
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto relative  mt-20 pb-10">
      <motion.div>
        <div className="rounded-2xl z-10    ">
          <div className="rounded-xl p-4 pt-8">
            <h1 className="text-center text-5xl z-10  font-bold">
              Showcasing My Digital Ventures
            </h1>
          </div>
          <section className="grid grid-cols-1 mt-10 gap-6">
            {data?.map((project, index) => (
              <ProjectCard
                key={project.projectId}
                project={project}
                index={index}
              ></ProjectCard>
            ))}
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
