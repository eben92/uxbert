"use client";
import { AlbumCard } from "@/components/shared/album-card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { usePlayerContext } from "@/context/player-context";
import { useRouter } from "next/navigation";

export default function RecentlyPlayed() {
  const router = useRouter();
  const { recentlyPlay } = usePlayerContext();

  if (!recentlyPlay.length) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <Label className="text-2xl font-bold">Recently played</Label>
        <Button
          variant={"ghost"}
          onClick={() => {
            router.push("/recently-played");
          }}
          className="text-sm text-muted-foreground"
        >
          View all
        </Button>
      </div>

      <div className="grid gap-x-4 md:gap-x-6 gap-y-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
        {recentlyPlay.map((item) => (
          <AlbumCard
            id={item.id}
            key={item.id}
            src={item.album.cover_medium}
            title={item.title}
            by={item.artist.name}
            type={item.type}
          />
        ))}
      </div>
    </div>
  );
}
