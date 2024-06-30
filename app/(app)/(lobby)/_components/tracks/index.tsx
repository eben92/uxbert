import { AlbumCard } from "@/components/shared/album-card";
import { ChartTracks } from "./data";

export default function Tracks() {
  return (
    <div className="grid gap-x-6 gap-y-4 md:grid-cols-3 lg:grid-cols-6">
      {ChartTracks.data.map((track) => (
        <AlbumCard
          key={track.id}
          src={track.artist.picture_medium}
          title={track.title}
          by={track.artist.name}
        />
      ))}
    </div>
  );
}
