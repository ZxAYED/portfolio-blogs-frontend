"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import Link from "next/link";
import img from "../../../public/images/portfolio.png";
import CustomSvg from "../shared/CustomSvg";
import ZButton from "../shared/ZButton";
import { useTheme } from "../theme/ThemeProvider";

const Banner = () => {
  const { theme } = useTheme();

  return (
    <div id="home" className="relative">
      <div className=" md:block absolute hidden right-20 ">
        <CustomSvg></CustomSvg>
      </div>
      <div className="md:block absolute hidden -left-64 top-80 ">
        <CustomSvg></CustomSvg>
      </div>
      <section className="flex flex-col lg:flex-row items-center justify-between lg:py-16 max-w-7xl mx-5 pb-5 xl:mx-auto">
        <div className="text-center md:text-left max-w-2xl">
          <h1 className="text-5xl lg:text-6xl font-extrabold ">
            Hi, I’m
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9333EA] to-[#3B82F6] ">
              {""} Zayed
            </span>
          </h1>
          <p className="mt-4 text-lg ">
            I build modern, responsive, and high-performance web applications
            using cutting-edge technologies.
          </p>

          <div className="mt-6 space-y-4 ">
            {[
              "Clean , Modern UI & User-Friendly Designs",
              "Writing High-Quality, Efficient Code ",
              "Building Flexible and Easy-to-Customize Solutions",
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`flex items-center ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                } `}
              >
                <svg
                  className="w-6 h-6 text-primary mx-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{item}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex gap-8 justify-center lg:justify-start items-center">
            <motion.a
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className=" py-3 rounded z-20 px-5 text-white bg-[#1E293B] hover:bg-[#18253a]  cursor-pointer"
              href="https://drive.google.com/file/d/1IU_bm0-KhDiXea_3CwOL1nepP0dwFXKy/view?usp=sharing"
            >
              See Resume
            </motion.a>
            <Link href="contact">
              <ZButton name="Contact me"></ZButton>
            </Link>
          </div>
        </div>

        <div className="relative w-full lg:w-1/3 mt-12 lg:mt-0">
          <div className="relative w-72 h-76 mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#9333EA] to-[#3B82F6] rounded-[50%_30%_50%_70%] "></div>

              <Image
                src={img}
                alt="Zayed"
                width={300}
                height={300}
                className="relative z-10 rounded-[50%_30%_50%_70%]"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
