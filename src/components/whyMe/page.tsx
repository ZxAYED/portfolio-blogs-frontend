"use client";
import { Briefcase, CheckCircle, Lightbulb, Target } from "lucide-react";
import Image from "next/image";
import { FaHandshake, FaUserTie } from "react-icons/fa";
import bg from "../../../public/images/whyme.webp";
import CustomSvg from "../shared/CustomSvg";
import CustomSvg2 from "../shared/CustomSvg2";
import { useTheme } from "../theme/ThemeProvider";

const WhyMe = () => {
  const { theme } = useTheme();
  const qualities = [
    {
      icon: <CheckCircle size={32} className="text-green-500" />,
      title: "Confident Team Player",
      description:
        "I thrive in collaborative environments, ensuring smooth teamwork and effective communication.",
    },
    {
      icon: <Target size={32} className="text-blue-500" />,
      title: "Determined & Focused",
      description:
        "Once I set a goal, I give my best effort to achieve it with full dedication and perseverance.",
    },
    {
      icon: <Lightbulb size={32} className="text-yellow-500" />,
      title: "Hard Work Over Talent",
      description:
        "I strongly believe that consistent effort and dedication surpass natural talent in the long run.",
    },
    {
      icon: <FaUserTie size={32} className="text-purple-500" />,
      title: "Professionalism & Integrity",
      description:
        "I maintain a high level of work ethic, responsibility, and integrity in every task I take on.",
    },
    {
      icon: <FaHandshake size={32} className="text-red-500" />,
      title: "Trustworthy & Reliable",
      description:
        "I take ownership of my work and deliver on my commitments with reliability and accountability.",
    },
    {
      icon: <Briefcase size={32} className="text-indigo-500" />,
      title: "Passionate About Growth",
      description:
        "I continuously seek new challenges, learn quickly, and adapt to evolving industry trends.",
    },
  ];

  return (
    <div
      id="whyme"
      className="relative my-32 px-6 max-w-7xl border rounded-md py-16 mx-auto text-center"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src={bg}
          alt="Why Me Background"
          layout="fill"
          objectFit="cover"
          className="rounded-md opacity-20"
        />
      </div>

      <div className="lg:block absolute hidden -right-60 -top-20">
        <CustomSvg2 />
      </div>
      <div className="lg:block absolute hidden -left-140 top-40">
        <CustomSvg />
      </div>

      <div className="relative z-10  backdrop-blur">
        <h2 className="text-4xl font-bold mb-6">Why You Need Me</h2>
        <p className="text-lg mb-12">
          I`m a determined professional who believes in hard work, teamwork, and
          delivering results. Here`s why I`m the right fit for your team.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {qualities.map((quality, index) => (
            <div
              key={index}
              className="p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:shadow-3xl transition-all"
            >
              <div className="mb-4">{quality.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{quality.title}</h3>
              <p
                className={` ${
                  theme === "dark" ? "text-gray-400" : "text-gray-800"
                } `}
              >
                {quality.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyMe;
