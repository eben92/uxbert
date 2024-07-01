import { AlbumCard } from "@/components/shared/album-card";
import { TopPlaylists } from "./data";

export default function Playlists() {
  return (
    <div className="grid gap-x-4 md:gap-x-6 gap-y-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
      {TopPlaylists.data.map((playlist) => (
        <AlbumCard
          id={playlist.id}
          key={playlist.id}
          src={playlist.picture_medium}
          title={playlist.title}
          by={playlist.user?.name}
        />
      ))}
    </div>
  );
}
