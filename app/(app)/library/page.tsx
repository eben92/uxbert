import { SliderButton } from "@/components/shared/navigation";
import { UserCard } from "@/components/shared/user-card";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";
import Image from "next/image";

export default function LibraryPage() {
  return (
    <main className="pb-8">
      <div className=" flex flex-col gap-4">
        <div className="flex px-4 py-4 md:px-6 items-center bg-black justify-between w-full">
          <div className="flex items-center gap-4">
            <SliderButton />
            <LibraryToggle />
          </div>
          <UserCard />
        </div>
        <div className="px-4 md:px-6 flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <Label className="text-2xl font-bold">Playlists</Label>
            <div className="grid gap-x-6 gap-y-4 grid-cols-2 md:grid-cols-8 lg:grid-cols-12 ">
              <div className=" bg-gradient-to-br from-[#3822EA] to-80% bg-[#A3A6E5] h-full w-full p-4 col-span-2 lg:col-span-4   rounded flex items-center justify-between flex-col ">
                <div className="flex-1 text-lg flex items-start flex-col w-full justify-center ">
                  <p>Adekunle Gold Here For Ya Julia Wolf Pillow</p>
                  <p>Adekunle Gold Here For Ya Julia Wolf Pillow</p>
                  <p>Adekunle Gold Here For Ya Julia Wolf Pillow</p>
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <Label className="text-3xl font-bold">Liked Songs</Label>
                  <p className="font-semibold">502 liked songs</p>
                </div>
              </div>

              {/* <Tracks /> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

function LibraryToggle() {
  return (
    <ToggleGroup type="single" defaultValue="Playlists">
      <ToggleGroupItem
        defaultChecked
        value="Playlists"
        aria-label="Toggle bold"
      >
        Playlists
      </ToggleGroupItem>
      <ToggleGroupItem value="Podcasts" aria-label="Toggle italic">
        Podcasts
      </ToggleGroupItem>
      <ToggleGroupItem value="Artists" aria-label="Toggle underline">
        Artists
      </ToggleGroupItem>
      <ToggleGroupItem value="Albums" aria-label="Toggle underline">
        Albums
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
