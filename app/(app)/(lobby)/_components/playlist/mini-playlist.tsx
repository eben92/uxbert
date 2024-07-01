import { PlaylistCard } from "@/components/shared/playlist";
import { ENV } from "@/lib/constants";
import { ApiResponse, PlaylistProps } from "@/types";

export const revalidate = "60";

async function getData() {
  const res = await fetch(`${ENV.BASE_URL}/api/v1/playlists`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch albums");
  }

  const data = (await res.json()) as ApiResponse<PlaylistProps[]>;

  return data;
}

export default async function MiniPlaylist() {
  const res = await getData();
  const data = res.results;

  return (
    <div className="grid gap-x-6 gap-y-4 md:grid-cols-2 lg:grid-cols-3 ">
      {data.map((playlist, i) => (
        <PlaylistCard key={i} data={playlist} />
      ))}
    </div>
  );
}
