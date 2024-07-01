"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { PlayButton } from "./play-button";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { usePlayerContext } from "@/context/player-context";
import { useAudioPlayer } from "@/hooks/use-audio-player";
import { useRouter } from "next/navigation";

type Props = {
  src: string;
  title: string;
  by?: string;
  onPlay?: () => void;
  id: string | number;
  type: string;
};

export function AlbumCard({ onPlay, ...data }: Props) {
  const router = useRouter();

  const [showPlay, setShowPlay] = useState(false);
  const { playing, play, pause, paused } = useAudioPlayer();
  const { currentTrack } = usePlayerContext();

  function handlePlay() {
    if (currentTrack?.id === data.id && playing) {
      pause();
      return;
    }

    if (currentTrack?.id === data.id && paused) {
      play();
      return;
    }

    onPlay?.();
  }

  return (
    <div
      onPointerEnter={() => {
        setShowPlay(true);
      }}
      onPointerLeave={() => {
        setShowPlay(false);
      }}
      className="flex cursor-pointer w-full relative flex-col bg-white/5 rounded items-center justify-start px-0  text-sm gap-4"
    >
      <Card
        onClick={() => {
          if (data?.type === "track") {
            handlePlay();
            return;
          }
          router.push(`/${data.type}/${data.id}`);
        }}
        className="flex w-full border-none flex-col h-full  items-center gap-2 justify-start"
      >
        <CardHeader className="flex px-4 w-full pb-0 flex-col gap-2 pt-4">
          <Image
            src={data?.src}
            className="w-full rounded"
            alt=""
            width={150}
            height={150}
          />
          <CardTitle
            title={data?.title}
            className="text-lg line-clamp-1 text-start"
          >
            {data?.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="pb-4 px-4 w-full">
          <CardDescription className="text-start">
            {data?.by ?? "Unknown Artist"}
          </CardDescription>
        </CardContent>
      </Card>

      <div
        className={cn(
          "absolute right-4 bottom-[33%] transition-all ease-in duration-200",
          showPlay ? "opacity-100" : "opacity-0",
          currentTrack?.id === data.id && playing ? "opacity-100" : ""
        )}
      >
        <PlayButton
          onClick={handlePlay}
          isPlaying={currentTrack?.id === data.id && playing}
          className="text-black w-10 h-10 md:h-14 md:w-14 lg:h-10 lg:w-10"
          iconSize={18}
        />
      </div>
    </div>
  );
}
