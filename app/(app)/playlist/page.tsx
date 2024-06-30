import {
  DownloadButton,
  LikeButton,
  PlayButton,
} from "@/components/shared/play-button";
import { Sort } from "@/components/shared/sort";
import { Label } from "@/components/ui/label";
import { MoreHorizontal, Search } from "lucide-react";
import Image from "next/image";
import { SliderButton, UserCard } from "../page";
import PlaylistTable from "./_components";

export default function Home() {
  return (
    <main className=" flex flex-col gap-10  py-8 bg-gradient-to-b from-[#DEF628] h-full to-60%">
      <div className=" px-4 md:px-8 lg:px-12 flex flex-col gap-4 ">
        <div className="flex items-center justify-between w-full">
          <SliderButton />
          <UserCard />
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex items-end gap-6">
            <Image src={"/playlist-1.png"} alt="" width={300} height={300} />
            <div className="flex flex-col gap-4">
              <p className="font-semibold">Public playlist</p>
              <Label className="text-[100px] leading-none font-bold">
                Chill Mix
              </Label>
              <p className="font-semibold">
                Julia Wolf , ayokay, Khalid{" "}
                <span className="text-muted-foreground font-normal">
                  and more
                </span>
              </p>
              <div className="flex gap-2 items-center">
                <p className="text-muted-foreground">
                  Made for
                  <span className="text-primary font-semibold">
                    {" "}
                    davedirect3{" "}
                  </span>
                </p>
                <p className="text-muted-foreground">34 songs, 2hr 01 min</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary/5 flex-1 flex flex-col gap-8 py-4 px-4 md:px-8 lg:px-12">
        <Controls />

        <Songs />
      </div>
    </main>
  );
}

function Controls() {
  return (
    <div className="flex items-center gap-4 justify-between">
      <div className="flex items-center gap-4 ">
        <PlayButton
          size={"round"}
          variant={"primary"}
          className="text-black w-12 h-12 md:h-14 md:w-14 lg:h-16 lg:w-16"
          iconSize={24}
        />
        <div className="flex items-center gap-4">
          <LikeButton
            size={"round"}
            className="text-foreground"
            iconSize={32}
          />
          <DownloadButton
            size={"round"}
            className="text-foreground"
            iconSize={32}
          />

          <MoreHorizontal size={32} />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Search size={24} />
        <Sort />
      </div>
    </div>
  );
}

function Songs() {
  return (
    <div className=" flex flex-col gap-6">
      {/* {Array.from({ length: 6 }).map((_, i) => (
        <div className="" key={i}></div>
      ))} */}

      <PlaylistTable />
    </div>
  );
}
