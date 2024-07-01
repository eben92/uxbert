"use client";

import { AlbumCard } from "@/components/shared/album-card";
import { usePlayerContext } from "@/context/player-context";
import { TrackProps } from "@/types";

export default function ClientComponent({ data }: { data: TrackProps[] }) {
  const { loadTracks } = usePlayerContext();

  return (
    <div className="grid  gap-x-4 md:gap-x-6 gap-y-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
      {data.map((track, i) => (
        <AlbumCard
          type={track.type}
          id={track.id}
          key={track.id}
          src={track.artist.picture_medium}
          title={track.title}
          by={track.artist.name}
          onPlay={() => {
            loadTracks([], i);
          }}
        />
      ))}
    </div>
  );
}
