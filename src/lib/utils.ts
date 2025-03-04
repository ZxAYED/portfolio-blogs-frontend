import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import docker from "../../public/images/dokcer.png";
import xpress from "../../public/images/expressJs.png";
import graph from "../../public/images/graph-ql.png";
import boot from "../../public/images/icons8-bootstrap-240.png";
import css from "../../public/images/icons8-css3-144.png";
import html from "../../public/images/icons8-html-5-240.png";
import js from "../../public/images/icons8-js-240.png";
import tailwind from "../../public/images/icons8-tailwindcss-240.png";
import jest from "../../public/images/jest.png";
import mate from "../../public/images/material ui.png";
import mongo from "../../public/images/mongodb.png";
import next from "../../public/images/next.png";
import node from "../../public/images/nodeJs.png";
import post from "../../public/images/postgre.png";
import react from "../../public/images/react.png";
import redux from "../../public/images/redux.svg";
import shadcn from "../../public/images/shadcn.png";


export const skills = [

  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "Bootstrap", icon: boot },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Material UI", icon: mate },
  { name: "Shadcn UI", icon: shadcn },
  { name: "JavaScript", icon: js },
  {
    name: "TypeScript",
    icon: "https://cdn.iconscout.com/icon/free/png-256/free-typescript-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-7-pack-logos-icons-2945272.png?f=webp&w=256",
  },
  { name: "React.js", icon: react },
  {
    name: "Next.js",
    icon: next,
  },
  {
    name: "Redux",
    icon: redux,
  },
  { name: "Node.js", icon: node },
  { name: "Express.js", icon: xpress },
  { name: "MongoDB", icon: mongo },
  {
    name: "Mongoose",
    icon: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fl8rbs6hk39ei4m4emawr.png",
  },
  {
    name: "Prisma",
    icon: "https://miro.medium.com/v2/resize:fit:1024/1*sRnURmqek5n5ozXwUrp5kQ.jpeg",
  },
  {
    name: "PostgreSQL",
    icon: post,
  },
  {
    name: "GraphQL",
    icon: graph,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "AWS",
    icon: "https://cdn.iconscout.com/icon/free/png-256/free-aws-logo-icon-download-in-svg-png-gif-file-formats--cloud-computing-network-server-database-brand-pack-logos-icons-1583149.png?f=webp&w=256",
  },
  {
    name: "Jest",
    icon: jest,
  },
];






export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
