"use client";

import { usePlayerContext } from "@/context/player-context";
import { cn } from "@/lib/utils";
import { Heart, Home, Library, PlusIcon, Search } from "lucide-react";
import { Image } from "@/components/ui/image";
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
      icon: Search,
      to: "/search",
      label: "Search",
    },
    // {
    //   icon: Library,
    //   to: "/library",
    //   label: "Your Library",
    // },
  ] as const;

  return (
    <div className="flex flex-col justify-between   gap-4 bg-black h-full">
      <div className="px-4 py-6 space-y-8">
        <ul className="flex flex-col  gap-2">
          {routes.map((route) => (
            <li
              key={route.to}
              className={cn(
                "flex items-center lg:text-lg gap-4 font-semibold text-muted-foreground",
                pathname === route.to && "text-bold"
              )}
            >
              <div>
                {
                  <route.icon
                    size={24}
                    fill={route.label === "Home" ? "currentColor" : "none"}
                  />
                }
              </div>
              <Link href={route.to}>{route.label}</Link>
            </li>
          ))}
          <li
            className={cn(
              "flex items-center cursor-not-allowed lg:text-lg gap-4 font-semibold text-muted-foreground"
            )}
          >
            <div>
              <Library size={24} />
            </div>
            <p>Your Library</p>
          </li>
        </ul>

        <ul className="flex flex-col gap-4">
          {(
            [
              { label: "Create Playlist", to: "/", icon: PlusIcon },
              { label: "Liked Songs", to: "/", icon: Heart },
            ] as const
          ).map((item) => (
            <li
              key={item.label}
              className="flex font-semibold  items-center gap-4"
            >
              <div
                className={cn(
                  "flex items-center justify-center h-8 w-8 rounded",
                  item.label === "Liked Songs"
                    ? "bg-gradient-to-br from-[#3822EA] to-[#C7E9D7] text-white"
                    : "bg-white/70 text-black "
                )}
              >
                {<item.icon fill="currentColor" size={20} />}
              </div>
              <Link href={item.to}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <Separator />

        <ul className="flex flex-col gap-4">
          {Array.from({ length: 2 }).map((_, i) => (
            <li
              key={i}
              className="flex text-sm text-muted-foreground items-center gap-2"
            >
              <Link href={"/"}>{"Chill Mix"}</Link>
            </li>
          ))}
        </ul>
      </div>

      <MiniPlayingAlbum />
    </div>
  );
}

function MiniPlayingAlbum() {
  const { currentTrack } = usePlayerContext();

  const imgUrl =
    currentTrack?.artist.picture_medium ??
    currentTrack?.album?.cover_medium ??
    "";

  if (!currentTrack) {
    return null;
  }

  return (
    <div className="w-full">
      <Image src={imgUrl} alt="" className="w-full" width={140} height={200} />
    </div>
  );
}
