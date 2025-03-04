"use client";

import ZButton from "@/components/shared/ZButton";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { useForm } from "react-hook-form";

import { toast } from "react-toastify";
import img from "../../../public/images/whyme.webp";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    localStorage.setItem("contactFormData", JSON.stringify(data));
    toast.success("Message sent successfully!");
  };

  return (
    <div className="min-h-screen relative flex  flex-col items-center justify-center px-6 py-12">
      <div className="absolute inset-0 -z-10">
        <Image
          src={img}
          alt="Contact"
          layout="fill"
          objectFit="cover"
          className="rounded-md opacity-20"
        />
      </div>

      <div className="max-w-3xl w-full  backdrop-blur-[5px] shadow-lg rounded-2xl p-8 space-y-6">
        <h2 className="text-5xl font-bold text-primary text-center">
          Get in Touch with Us!
        </h2>
        <p className="text-center text-soft-gray">
          We`d love to hear from you! Whether you have a question, feedback, or
          need assistance, our team is here to help. Reach out to us through the
          form below or use the contact details provided to get in touch. Your
          inquiries are important to us, and we`ll do our best to respond as
          quickly as possible. Feel free to send us your message, and we`ll make
          sure you`re connected with the right person to assist you.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block text-charcoal-gray font-medium">Name</label>
            <Input
              type="text"
              placeholder="Your Name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label className="block text-charcoal-gray font-medium">
              Email
            </label>
            <Input
              type="email"
              placeholder="your@email.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label className="block text-charcoal-gray font-medium">
              Message
            </label>
            <Textarea
              placeholder="Write your message..."
              rows={4}
              {...register("message", { required: "Message is required" })}
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
          </div>
          <div className="flex justify-center">
            <ZButton name="Submit"></ZButton>
          </div>
        </form>

        <div className="mt-6 text-center space-y-4">
          <p className="flex items-center justify-center gap-2 text-soft-gray">
            <Mail size={18} /> zzayediqbalofficial@email.com
          </p>
          <p className="flex items-center justify-center gap-2 text-soft-gray">
            <Phone size={18} /> +01902320296
          </p>
          <p className="flex items-center justify-center gap-2 text-soft-gray">
            <MapPin size={18} /> Dhaka, Bangladesh
          </p>
        </div>
      </div>
    </div>
  );
}
