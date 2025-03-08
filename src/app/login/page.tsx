/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useTheme } from "@/components/theme/ThemeProvider";

import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const LoginWithProviders = () => {
  const { theme } = useTheme();

  const handleLogin = async (kela: string) => {
    try {
      signIn(kela, {
        callbackUrl: "/dashboard",
      });
    } catch (error: any) {
      toast.error("Error:" + error.message);
      console.error("Error signing in:", error);
    }
  };

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen px-6 ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="max-w-md w-full bg-opacity-80 shadow-lg rounded-lg p-8">
        <h2 className="text-5xl mb-12 font-semibold text-center">Sign In</h2>

        <div className="mt-6 space-y-4">
          <button
            onClick={() => handleLogin("google")}
            className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium transition-all ${
              theme === "dark"
                ? "bg-white text-gray-900 hover:bg-gray-300"
                : "bg-gray-900 text-white hover:bg-gray-800"
            }`}
          >
            <FcGoogle size={20} />
            Sign in with Google
          </button>

          <button
            onClick={() => handleLogin("github")}
            className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium transition-all ${
              theme === "dark"
                ? "bg-gray-700 text-white hover:bg-gray-600"
                : "bg-gray-200 text-gray-900 hover:bg-gray-300"
            }`}
          >
            <FaGithub size={20} />
            Sign in with GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginWithProviders;
