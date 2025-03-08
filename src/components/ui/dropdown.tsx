/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AnimatePresence, motion } from "framer-motion";
import { Menu } from "lucide-react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "../shared/ThemeToggleBtn";

export default function DropDown({ session }: any) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="relative z-50 p-2 rounded-lg  transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="w-6 h-6 text-[#9333ea] border-amber-300  " />
        </Button>
      </DropdownMenuTrigger>

      <AnimatePresence>
        {isOpen && (
          <DropdownMenuContent
            asChild
            className="mt-2 p-3 rounded-xl w-48 backdrop-blur-lg border  shadow-lg"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="space-y-2"
            >
              <DropdownMenuItem className="hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg p-2 cursor-pointer">
                <Link href="/dashboard">Dashboard</Link>
              </DropdownMenuItem>

              <DropdownMenuItem
                onClick={() => signOut()}
                className="hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg p-2 cursor-pointer"
              >
                Log Out
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex justify-between">
                <ThemeToggle />
              </DropdownMenuItem>
            </motion.div>
          </DropdownMenuContent>
        )}
      </AnimatePresence>
    </DropdownMenu>
  );
}
