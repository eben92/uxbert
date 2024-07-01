import { Label } from "@/components/ui/label";
import { ENV } from "@/lib/constants";
import { cn, secondsToTime } from "@/lib/utils";
import type { ApiResponse, PlaylistProps, TrackProps } from "@/types";
import { type FastAverageColorResult } from "fast-average-color";
import Image from "next/image";
import { SliderButton, UserCard } from "../../(lobby)/page";
import { PlaylistControls } from "../_components/controls";
import TrackList from "../_components/tracklist";
import { CSSProperties } from "react";

type Props = {
  params: { id: string };
};

interface PlaylistResponse extends PlaylistProps {
  tracks: TrackProps[];
  imageColor: { style: CSSProperties } & FastAverageColorResult;
}

async function getPlaylist(id: string) {
  const res = await fetch(`${ENV.BASE_URL}/api/v1/playlists/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch playlist");
  }

  const data = (await res.json()) as ApiResponse<PlaylistResponse>;

  return data;
}

export default async function PlaylistPage({ params }: Readonly<Props>) {
  const playslistRes = await getPlaylist(params.id);

  const playlist = playslistRes.results;
  const tracks = playlist?.tracks ?? [];
  const gradientStyle = playlist?.imageColor?.style ?? {};

  const totaltracks = tracks?.length;

  const threeArtists = tracks
    .slice(0, 3)
    .map((track) => track.artist.name)
    .join(", ");

  const totalDurationFormatted = secondsToTime(playlist?.duration ?? 0);

  return (
    <main
      className={cn(
        " flex flex-col gap-10 py-8 bg-gradient-to-b h-full to-60%"
      )}
      style={gradientStyle}
    >
      <div className=" px-4 md:px-8 lg:px-12 flex flex-col gap-4 ">
        <div className="flex items-center justify-between w-full">
          <SliderButton />
          <UserCard />
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex items-end gap-6">
            <Image
              src={playlist.picture_medium}
              alt=""
              width={300}
              height={300}
            />
            <div className="flex flex-col gap-4">
              <p className="font-semibold">Public playlist</p>
              <Label className="text-[100px] leading-none font-bold">
                {playlist?.title}
              </Label>
              <p className="font-semibold">
                {threeArtists}
                <span className="text-muted-foreground font-normal">
                  {playlist.nb_tracks > 3 && " and more"}
                </span>
              </p>
              <div className="flex gap-2 items-center">
                <p className="text-muted-foreground">
                  Made for
                  <span className="text-primary font-semibold">
                    {" "}
                    davedirect3{" "}
                  </span>
                </p>
                <p className="text-muted-foreground">
                  {totaltracks} songs, {totalDurationFormatted}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary/5 flex-1 flex flex-col gap-8 py-4 px-4 md:px-8 lg:px-12">
        <PlaylistControls playlistId={params.id} />

        <TrackList data={tracks} />
      </div>
    </main>
  );
}
