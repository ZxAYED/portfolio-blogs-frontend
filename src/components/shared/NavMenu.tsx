/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";
import Link from "next/link";
import DropDown from "../ui/dropdown";
import ThemeToggle from "./ThemeToggleBtn";

const NavBar = ({ session }: any) => {
  const navmenus = [
    { name: "Home", path: "/home" },
    { name: "Projects", path: "/projects" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];

  const navLinks = (
    <div className="w-fit flex flex-col lg:flex-row gap-5 justify-center items-center">
      {navmenus.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          className=" font-semibold cursor-pointer hover:text-[#9333EA] hover:delay-200 hover:scale-[102%] uppercase tracking-[4px] underline-animation "
        >
          {item.name}
        </Link>
      ))}
    </div>
  );

  return (
    <div className=" sticky top-0 md:top-6 z-50 ">
      <div className="max-w-7xl mx-auto px-4 py-4 md:mb-4  md:border border-b-[1px] md:rounded-md rounded backdrop-blur-xl">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              <p className="text-3xl font-extrabold text-primary tracking-widest drop-shadow-md zayed">
                <span className=" bg-clip-text text-transparent bg-gradient-to-r from-[#9333EA] to-[#3B82F6]">
                  Z
                </span>
                aye
                <span className=" bg-clip-text text-transparent bg-gradient-to-r from-[#3B82F6] to-[#9333EA] ">
                  d
                </span>
              </p>
            </motion.div>
          </div>
          <div className="flex-grow  justify-center hidden lg:flex">
            {navLinks}
          </div>
          <div className="lg:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Menu</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 z-100 bg-[#1E293B] text-white">
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  {navmenus.map((item, index) => (
                    <DropdownMenuItem key={index}>
                      <Link
                        href={item.path}
                        className="w-full block  text-white hover:text-[#3B82F6]  tracking-[2px]"
                      >
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuItem>
                    <ThemeToggle />
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          {session ? (
            <div className="block">
              <DropDown session={session} />
            </div>
          ) : (
            <div className=" block">
              <Link href="/login">
                <Button className="Zbutton uppercase ">Login</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
