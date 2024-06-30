import { PlaylistCard } from "@/components/shared/playlist";
import { MyPlaylists } from "./data";

export default function MiniPlaylist() {
  return (
    <div className="grid gap-x-6 gap-y-4 md:grid-cols-2 lg:grid-cols-3 ">
      {MyPlaylists.data.map((playlist, i) => (
        <PlaylistCard key={i} data={playlist} />
      ))}
    </div>
  );
}
