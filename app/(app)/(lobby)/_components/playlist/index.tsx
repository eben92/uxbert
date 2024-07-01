import { AlbumCard } from "@/components/shared/album-card";
import { ViewAllButton } from "@/components/shared/view-more";
import { Label } from "@/components/ui/label";
import { ENV } from "@/lib/constants";
import { AlbumProps, ApiResponse } from "@/types";

async function getData() {
  const res = await fetch(`${ENV.BASE_URL}/api/v1/albums`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch albums");
  }

  const data = (await res.json()) as ApiResponse<AlbumProps[]>;

  return data;
}

export default async function Playlists() {
  const res = await getData();
  const data = res.results;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <Label className="text-2xl font-bold">Made for you</Label>
        <ViewAllButton album={data} />
      </div>

      <div className="grid gap-x-4 md:gap-x-6 gap-y-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
        {data.map((item) => (
          <AlbumCard
            id={item.id}
            key={item.id}
            src={item.cover_medium}
            title={item.title}
            by={item.artist.name}
            type={item.type}
          />
        ))}
      </div>
    </div>
  );
}
