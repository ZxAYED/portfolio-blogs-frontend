"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FaFacebookSquare, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { MdPhoneAndroid } from "react-icons/md";
import { SiGmail } from "react-icons/si";
import { VscGithubInverted } from "react-icons/vsc";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import img from "../../../public/images/getInTouchpng.png";
import ZButton from "./ZButton";
const Footer = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init();
    }
    setCurrentYear(new Date().getFullYear());
  }, []);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Message sent successfully!");
        reset();
      } else {
        toast.error(result.message || "Failed to send message");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
      console.error("Error sending email:", error);
    }
  };

  return (
    <div id="contact" className="relative w-full   ">
      <Image
        src="https://i.ibb.co/QcbsFHy/footer.jpg"
        alt="Footer Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 opacity-30"
      />
      <div className="flex justify-center items-center ">
        <Image src={img} alt="get in touch" className="w-40 h-40 " />
      </div>
      <div className="max-w-7xl mx-auto  py-16 px-6 ">
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-10 text-center z-10 ">
          <div>
            <FaMapMarkerAlt className="text-5xl  p-2 rounded  bg-gradient-to-r from-[#3B82F6] to-[#9333EA] mx-auto" />
            <p className="text-xl mt-2">Dhaka, Bangladesh</p>
          </div>
          <div>
            <MdPhoneAndroid className="text-5xl  p-2 rounded  bg-gradient-to-r from-[#3B82F6] to-[#9333EA] mx-auto" />
            <p className="text-xl mt-2">01902320296</p>
          </div>
          <div>
            <a rel="noopener" href="mailto:zzayediqbalofficial@gmail.com">
              <SiGmail className="text-5xl mx-auto p-2 rounded  bg-gradient-to-r from-[#3B82F6] to-[#9333EA]" />
            </a>
            <p className="text-xl  mt-2">Email Me</p>
          </div>
          <div>
            <a
              rel="noopener"
              href="https://www.linkedin.com/in/zayed-iqbal"
              target="_blank"
            >
              <FaLinkedin className="text-5xl  p-2 rounded  bg-gradient-to-r from-[#3B82F6] to-[#9333EA] mx-auto" />
            </a>
            <p className="text-xl mt-2">LinkedIn</p>
          </div>
        </div>

        <section className="relative flex flex-col lg:flex-row justify-between lg:items-center mt-12 z-10">
          <div className="lg:w-2/4  ">
            <h1 className="text-3xl font-bold ">Let`s Connect</h1>
            <div className="flex flex-col md:flex-row lg:flex-col gap-6 mt-6 text-5xl">
              <a
                href="https://github.com/ZxAYED"
                target="_blank"
                className="flex items-center gap-2"
                rel="noopener"
              >
                <VscGithubInverted className=" p-2 rounded  bg-gradient-to-r from-[#3B82F6] to-[#9333EA]" />{" "}
                <p className="text-xl">GitHub</p>
              </a>
              <a
                rel="noopener"
                href="https://www.facebook.com/ZxAYED"
                target="_blank"
                className="flex items-center gap-2"
              >
                <FaFacebookSquare className=" p-2 rounded  bg-gradient-to-r from-[#3B82F6] to-[#9333EA]" />{" "}
                <p className="text-xl">Facebook</p>
              </a>
              <a
                rel="noopener"
                href="https://www.instagram.com/zzayed0"
                target="_blank"
                className="flex items-center gap-2"
              >
                <GrInstagram className=" p-2 rounded  bg-gradient-to-r from-[#3B82F6] to-[#9333EA]" />{" "}
                <p className="text-xl ">Instagram</p>
              </a>
            </div>
          </div>

          <div
            className="max-w-3xl w-full border backdrop-blur-sm p-8 mt-12 rounded-md"
            data-aos="fade-up"
          >
            <h1 className="text-3xl font-bold mb-6 text-center">
              Leave a message
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <Input
                {...register("name", { required: "Name is required" })}
                type="text"
                placeholder="Your Name"
                className="border-gray-600"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">
                  {String(errors.name.message)}
                </p>
              )}

              <Input
                {...register("email", {
                  required: "Email is required",
                })}
                type="email"
                placeholder="Your Email"
                className="border-gray-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">
                  {String(errors.email.message)}
                </p>
              )}

              <Textarea
                {...register("message", { required: "Message is required" })}
                placeholder="Your Message"
                className="border-gray-500 min-h-[120px]"
              />
              {errors.message && (
                <p className="text-red-500 text-sm">
                  {String(errors.message.message)}
                </p>
              )}

              <div className="flex justify-center items-center">
                <ZButton name="Send Message" />
              </div>
            </form>
          </div>
        </section>

        <div className="relative mt-16 text-center text-gray-500 z-10">
          <p>&copy; {currentYear} Zayed Iqbal | All Rights Reserved</p>
        </div>

        <ToastContainer position="top-right" autoClose={2000} theme="dark" />
      </div>
    </div>
  );
};

export default Footer;
