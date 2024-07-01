"use client";
import { Heart } from "lucide-react";
import { Button } from "../../ui/button";
import { Label } from "../../ui/label";
import { AudioControl } from "./audio-control";
import { AudioProgress } from "./audio-progress";
import { SoundControl } from "./sound-control";
import { usePlayerContext } from "@/context/player-context";

export default function PlayBar() {
  const { currentTrack } = usePlayerContext();

  return (
    <div className="flex px-4 md:px-6 justify-between items-center py-6 w-full bg-white/5">
      <div className="hidden lg:flex items-center gap-4">
        {currentTrack && (
          <>
            <div className="flex flex-col gap-1">
              <Label className="text-sm">{currentTrack.title}</Label>
              <Label className="text-xs text-muted-foreground">
                {currentTrack.artist.name}
              </Label>
            </div>
            <Button
              className="disabled:cursor-not-allowed"
              variant={"ghost"}
              size={"round"}
              disabled
            >
              <Heart />
            </Button>
          </>
        )}
      </div>
      <div className="flex flex-col w-full md:w-[450px] items-center gap-4">
        <AudioControl />
        <AudioProgress />
      </div>

      <div className="w-[200px] hidden md:block ">
        <SoundControl />
      </div>
    </div>
  );
}
