import ZButton from "@/components/shared/ZButton";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  return {
    title: `Project - ${params.id}`,
    description: `Details for project ${params.id}`,
  };
}

export const ProjectInfo = async ({ params }: { params: { id: string } }) => {
  const id = await params.id;
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_LOCAL_URL}/projects/${id}`,
    {
      cache: "no-store",
    }
  ).then((res) => res.json());

  const project = data.data;
  return (
    <Card className="lg:p-6 mx-5 lg:mx-auto max-w-7xl my-20 shadow-lg rounded-2xl border   xl:mx-auto">
      <div
        className={`flex flex-col lg:flex-row  gap-6 
         `}
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
              className={`text-md mb-4 py-2
               
               `}
            >
              {project?.description}
            </p>

            {project?.features && project.features.length > 0 ? (
              project.features.map((feature: string, index: number) => (
                <ol key={index} className="text-sm">
                  {feature}
                </ol>
              ))
            ) : (
              <p className="text-sm text-gray-500">No features listed</p>
            )}
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
};
export default ProjectInfo;
