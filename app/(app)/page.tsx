import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" bg-gradient-to-b from-[#3333A3]   to-40%">
      <div className="px-4 py-8 flex flex-col gap-4 ">
        <div className="flex items-center justify-between w-full">
          <SliderButton />
          <UserCard />
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <Label className="text-2xl font-bold">Good afternoon</Label>
            <div className="grid gap-x-6 gap-y-4 md:grid-cols-2 lg:grid-cols-3 ">
              {Array.from({ length: 6 }).map((_, i) => (
                <PlaylistCard key={i} />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <Label className="text-2xl font-bold">Good afternoon</Label>
              <Button
                variant={"ghost"}
                className="rounded text-sm text-muted-foreground"
              >
                View all
              </Button>
            </div>
            <div className="grid gap-x-6 gap-y-4 md:grid-cols-3 lg:grid-cols-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <AlbumCard key={i} />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <Label className="text-2xl font-bold">Good afternoon</Label>
              <Button
                variant={"ghost"}
                className="text-sm text-muted-foreground"
              >
                View all
              </Button>
            </div>
            <div className="grid gap-x-6 gap-y-4 md:grid-cols-3 lg:grid-cols-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <AlbumCard key={i} />
              ))}
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

function AlbumCard() {
  return (
    <button className="flex flex-col bg-white/5 rounded items-center justify-start px-0  text-sm gap-4">
      <Card className="flex flex-col  items-center gap-2 justify-center">
        <CardHeader className="flex px-4 pb-0 flex-col gap-2 pt-4">
          <Image
            src="/playlist-2.png"
            className="w-full rounded"
            alt=""
            width={150}
            height={150}
          />
          <CardTitle className="text-lg text-start">Chill mix</CardTitle>
        </CardHeader>
        <CardContent className="pb-4 px-4">
          <CardDescription className="text-start">
            Hey Violet, VÉRITÉ, Timeflies and more
          </CardDescription>
        </CardContent>
      </Card>
    </button>
  );
}

function PlaylistCard() {
  return (
    <button className="flex rounded items-center justify-start px-0 bg-white/10 text-sm gap-4">
      <Image
        src="/playlist-1.png"
        className="rounded-l"
        alt=""
        width={60}
        height={60}
      />
      <Label>Chill Mix</Label>
    </button>
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
