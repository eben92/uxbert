"use client";

import { cn } from "@/lib/utils";
import { Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Separator } from "../ui/separator";

export default function Sidebar() {
  const pathname = usePathname();

  const routes = [
    {
      icon: Home,
      to: "/",
      label: "Home",
    },
    {
      icon: Home,
      to: "/search",
      label: "Search",
    },
    {
      icon: Home,
      to: "/library",
      label: "Your Library",
    },
  ];

  return (
    <div className="grid gap-4 ">
      <div className="px-4 py-6 space-y-8">
        <ul className="flex flex-col  gap-2">
          {routes.map((route) => (
            <li
              key={route.to}
              className={cn(
                "flex items-center lg:text-lg gap-4 text-muted-foreground",
                pathname === route.to && "text-bold"
              )}
            >
              <div>{<route.icon size={16} />}</div>
              <Link href={route.to}>{route.label}</Link>
            </li>
          ))}
        </ul>

        <ul className="flex flex-col gap-4">
          {["Create Playlist", "Liked Songs"].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <Home size={18} />
              <Link href={"/"}>{item}</Link>
            </li>
          ))}
        </ul>
        <Separator />

        <ul className="flex flex-col gap-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <li
              key={i}
              className="flex text-muted-foreground items-center gap-2"
            >
              <Link href={"/"}>{"Chill Mix"}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
