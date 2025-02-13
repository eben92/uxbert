"use client";

import { DownloadButton } from "@/components/shared/download";
import { Favorite } from "@/components/shared/favorite";
import { PlayButton } from "@/components/shared/play-button";
import { Sort } from "@/components/shared/sort";
import { usePlayerContext } from "@/context/player-context";
import { useAudioPlayer } from "@/hooks/use-audio-player";
import { TrackProps } from "@/types";
import { MoreHorizontal, Search } from "lucide-react";

type Props = {
  data: TrackProps[];
};

export function PlaylistControls({ data }: Readonly<Props>) {
  const { playing, pause, play, paused } = useAudioPlayer();
  const { loadTracks, currentTrack } = usePlayerContext();

  function handlePlay() {
    const d = data.find((track) => track.id === currentTrack?.id)?.id;
    if (playing && d) {
      pause();
      return;
    }

    if (d && paused) {
      play();
      return;
    }

    loadTracks(data, 0);
  }

  return (
    <div className="flex items-center gap-4 justify-between">
      <div className="flex items-center gap-4 ">
        <PlayButton
          isPlaying={playing}
          onClick={handlePlay}
          className="text-black w-12 h-12 md:h-14 md:w-14 lg:h-16 lg:w-16"
          iconSize={24}
        />
        <div className="flex items-center gap-4">
          <Favorite size={"round"} className="text-foreground" iconSize={32} />
          <DownloadButton className={"text-foreground "} iconSize={32} />

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
