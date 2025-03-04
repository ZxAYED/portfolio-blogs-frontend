"use client";

import { skills } from "@/lib/utils";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { SiExpertsexchange } from "react-icons/si";
import CustomSvg2 from "../shared/CustomSvg2";
import { useTheme } from "../theme/ThemeProvider";

const About = () => {
  const { theme } = useTheme();
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      id="about"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="200"
      data-aos-offset="0"
      className="relative my-48  mx-5  max-w-7xl xl:mx-auto"
    >
      <div className="md:block absolute hidden -right-8 xl:-right-40">
        <CustomSvg2></CustomSvg2>
      </div>
      <div className="md:block absolute hidden  xl:-left-60 -bottom-60 xl:-bottom-28">
        <CustomSvg2></CustomSvg2>
      </div>

      <h1 className="absolute -top-52 md:-top-32 md:left-[20%] md:right-[20%] mx-auto text-center opacity-30 text-6xl font-bold">
        Full Stack Developer
      </h1>
      <motion.div>
        <div className=" max-w-7xl mx-auto  ">
          <h1 className="text-5xl font-bold mb-4">About Me</h1>
          <p
            className={` text-lg py-4 ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            } `}
          >
            I’m a passionate MERN stack developer dedicated to building modern,
            responsive, and high-performance web applications. My expertise
            spans both frontend and backend technologies, ensuring seamless user
            experiences. I thrive on solving complex problems, leveraging my
            skills in HTML, CSS, JavaScript, and TypeScript, as well as
            frameworks like React.js and Next.js. I am well-versed in state
            management with Redux and backend development using Node.js,
            Express.js, and databases like MongoDB, PostgreSQL, and GraphQL. My
            experience with tools like Docker and Prisma ensures that I can
            build scalable, maintainable, and production-ready applications.
            Currently, I blend my analytical skills from physics with my love
            for coding to approach challenges from different perspectives, which
            allows me to deliver robust solutions. I am always eager to learn
            and adapt to new technologies, constantly seeking to improve my
            skills and stay up-to-date with industry trends. With a keen eye for
            detail, I ensure that every project I work on not only meets but
            exceeds user expectations, contributing to the success of the teams
            I collaborate with.
          </p>
          <hr className="  my-8"></hr>
          <div>
            <p className="font-bold text-3xl pb-6 pt-2 flex items-center gap-2">
              <SiExpertsexchange /> Skills
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.5 }}
                  key={index}
                  className="flex flex-col items-center justify-center p-3 border rounded-lg shadow-sm  transition duration-300"
                >
                  <Image
                    className="w-12 h-12 mb-2 rounded-xl"
                    src={skill.icon}
                    alt={skill.name}
                    width={52}
                    height={52}
                  />
                  <span className="text-lg font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
