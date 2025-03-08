"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Contact, Home, Notebook, User } from "lucide-react";
import Link from "next/link";
import { GrProjects } from "react-icons/gr";

const items = [
  { title: "Users", url: "/dashboard/users", icon: User },
  { title: "All Blogs", url: "/dashboard/blogs", icon: Notebook },
  { title: "Create Blogs", url: "/dashboard/create-blog", icon: Notebook },
  { title: "All Projects", url: "/dashboard/projects", icon: GrProjects },
  {
    title: "Create Projects",
    url: "/dashboard/create-project",
    icon: GrProjects,
  },
  {
    title: "All Contacts ",
    url: "/dashboard/contact",
    icon: Contact,
  },
  {
    title: "Back to Home",
    url: "/",
    icon: Home,
  },
];

export const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="ml-4 mb-8 text-3xl font-bold mt-2">
            <Link
              className="cursor-pointer  hover:text-[#9333EA]"
              href="/dashboard"
            >
              Dashboard
            </Link>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      className="flex items-center ml-2 text-[18px] mt-2 hover:text-[#9333EA]"
                      href={item.url}
                    >
                      <item.icon className="text-xl" />
                      <span className="hover:scale-[104%]">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
