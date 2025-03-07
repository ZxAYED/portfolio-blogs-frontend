import ProjectCard from "./ProjectCard";

export interface IProject {
  _id: string;
  projectName: string;
  description: string;
  imageUrl: string;
  githubLink: string;
  features: string[];
  githubClientCode: string;
  liveLink: string;
  githubServerCode: string;
}

const Projects = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_LOCAL_URL}/projects`,
    { cache: "no-store" }
  ).then((res) => res.json());

  const project = response.data;

  return (
    <div className="max-w-7xl my-20 lg:mx-auto mx-5 ">
      <h1 className="text-5xl text-center my-10 font-bold ">
        Showcasing all projects
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {project.map((project: IProject) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </section>
    </div>
  );
};

export default Projects;
