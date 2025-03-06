import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Notebook, User } from "lucide-react";
import Link from "next/link";
import { GrProjects } from "react-icons/gr";
const items = [
  {
    title: "User",
    url: "/dashboard/users",
    icon: User,
  },
  {
    title: "Blogs",
    url: "/dashboard/blogs",
    icon: Notebook,
  },
  {
    title: "Projects",
    url: "/dashboard/projects",
    icon: GrProjects,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroupLabel className="ml-4 text-3xl font-bold mt-2">
          <Link
            className="cursor-pointer  hover:text-[#9333EA]"
            href="/dashboard"
          >
            Dashboard
          </Link>
        </SidebarGroupLabel>
        <hr className="border-t-2 w-[100%] mt-2 mx-auto" />
        <SidebarGroup />

        <SidebarGroupContent>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <Link
                    className="flex items-center   ml-4 text-xl mt-2  hover:text-[#9333EA]  "
                    href={item.url}
                  >
                    <item.icon className="text-xl" />
                    <span className=" hover:scale-[104%]">{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
        <SidebarGroup />
      </SidebarContent>
    </Sidebar>
  );
}
