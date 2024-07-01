"use client";
import { AlbumCard } from "@/components/shared/album-card";
import { ChartTracks } from "./data";
import { usePlayerContext } from "@/context/player-context";

export default function Tracks() {
  const { loadTracks } = usePlayerContext();

  return (
    <div className="grid  gap-x-4 md:gap-x-6 gap-y-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
      {ChartTracks.data.map((track, i) => (
        <AlbumCard
          id={track.id}
          key={track.id}
          src={track.artist.picture_medium}
          title={track.title}
          by={track.artist.name}
          onPlay={() => {
            loadTracks(ChartTracks.data, i);
          }}
        />
      ))}
    </div>
  );
}
