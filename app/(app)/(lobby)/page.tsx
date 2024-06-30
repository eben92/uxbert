import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import MiniPlaylist from "./_components/playlist/mini-playlist";
import Tracks from "./_components/tracks";
import Playlists from "./_components/playlist";

export default function HomePage() {
  return (
    <main className=" bg-gradient-to-b from-[#3333A3] to-40%">
      <div className="px-4 py-8 flex flex-col gap-4 ">
        <div className="flex items-center justify-between w-full">
          <SliderButton />
          <UserCard />
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <Label className="text-2xl font-bold">Good afternoon</Label>
            <MiniPlaylist />
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <Label className="text-2xl font-bold">Your top mixes</Label>
              <Button
                variant={"ghost"}
                className="rounded text-sm text-muted-foreground"
              >
                View all
              </Button>
            </div>
            <Tracks />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <Label className="text-2xl font-bold">Made for you</Label>
              <Button
                variant={"ghost"}
                className="text-sm text-muted-foreground"
              >
                View all
              </Button>
            </div>

            <Playlists />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <Label className="text-2xl font-bold">Recently played</Label>
              <Button
                variant={"ghost"}
                className="text-sm text-muted-foreground"
              >
                View all
              </Button>
            </div>
            <div className="grid gap-x-6 gap-y-4 md:grid-cols-3 lg:grid-cols-6">
              {/* {Array.from({ length: 6 }).map((_, i) => (
                <MusicCard key={i} />
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export function UserCard() {
  return (
    <div className="flex items-center pr-2 md:pr-4 p-1 gap-2  rounded-3xl bg-black">
      <Avatar className="h-7 w-7">
        <AvatarImage src="/avatar-1.png" alt="" />
        <AvatarFallback className="text-xs">EB</AvatarFallback>
      </Avatar>
      <div className="flex gap-2 items-center">
        <p className="text-xs hidden md:block">ebenezer</p>
        <ChevronDown size={14} />
      </div>
    </div>
  );
}

export function SliderButton() {
  return (
    <div className="flex items-center gap-2">
      <button className=" p-2 rounded-full">
        <ChevronLeft size={24} />
      </button>
      <button className="p-2 rounded-full">
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
