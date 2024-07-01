import { Label } from "@/components/ui/label";
import { ENV } from "@/lib/constants";
import { cn, secondsToTime } from "@/lib/utils";
import type { AlbumProps, ApiResponse, TrackProps } from "@/types";
import { type FastAverageColorResult } from "fast-average-color";
import Image from "next/image";
import { CSSProperties } from "react";
import { SliderButton, UserCard } from "../../(lobby)/page";
import { PlaylistControls } from "../../playlist/_components/controls";
import TrackList from "../../playlist/_components/tracklist";

type Props = {
  params: { id: string };
};

interface PlaylistResponse extends AlbumProps {
  tracks: TrackProps[];
  imageColor: { style: CSSProperties } & FastAverageColorResult;
}

async function getPlaylist(id: string) {
  const res = await fetch(`${ENV.BASE_URL}/api/v1/albums/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch albums");
  }

  const data = (await res.json()) as ApiResponse<PlaylistResponse>;

  return data;
}

export default async function AlbumPage({ params }: Readonly<Props>) {
  const dataRes = await getPlaylist(params.id);

  const album = dataRes.results;
  const tracks = album?.tracks ?? [];
  const gradientStyle = album?.imageColor?.style ?? {};

  const totaltracks = tracks?.length;

  const threeTracklist = album.contributors
    ?.slice(0, 3)
    .map((c) => c.name)
    .join(", ");

  const totalDurationFormatted = secondsToTime(album?.duration ?? 0);

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
          <div className="flex sm:flex-row flex-col items-start sm:items-end gap-6">
            <Image
              src={album.cover_medium}
              alt=""
              width={300}
              height={300}
              className="w-full sm:w-auto"
            />
            <div className="flex flex-col gap-4">
              <p className="font-semibold">Public playlist</p>

              <Label className="text-[32px] md:text-[50px] lg:text-[100px] leading-none font-bold">
                {album?.title}
              </Label>
              <p className="font-semibold">
                {threeTracklist}
                <span className="text-muted-foreground truncate font-normal">
                  {album.nb_tracks > 3 && " and more"}
                </span>
              </p>
              <div className="flex gap-2 items-center">
                <p className="text-muted-foreground">
                  Made for{" "}
                  <a
                    href="https://github.com/eben92"
                    target="_blank"
                    className="text-primary underline font-semibold"
                  >
                    @eben92
                  </a>
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
        <PlaylistControls data={tracks} />

        <TrackList data={tracks} />
      </div>
    </main>
  );
}
