import { Label } from "@/components/ui/label";
import { secondsToTime } from "@/lib/utils";
import Image from "next/image";
import { ChartTracks } from "../../(lobby)/_components/tracks/data";
import { SliderButton, UserCard } from "../../(lobby)/page";
import { PlaylistControls } from "../_components/controls";
import TrackList from "../_components/tracklist";

type Props = {
  params: { id: string };
};

export default function PlaylistPage({ params }: Readonly<Props>) {
  const totalDuration = ChartTracks.data.reduce((acc, track) => {
    return acc + track.duration;
  }, 0);

  const totaltracks = ChartTracks.total;
  const totalDurationFormatted = secondsToTime(totalDuration);

  return (
    <main className=" flex flex-col gap-10  py-8 bg-gradient-to-b from-[#DEF628] h-full to-60%">
      <div className=" px-4 md:px-8 lg:px-12 flex flex-col gap-4 ">
        <div className="flex items-center justify-between w-full">
          <SliderButton />
          <UserCard />
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex items-end gap-6">
            <Image src={"/playlist-1.png"} alt="" width={300} height={300} />
            <div className="flex flex-col gap-4">
              <p className="font-semibold">Public playlist</p>
              <Label className="text-[100px] leading-none font-bold">
                Chill Mix
              </Label>
              <p className="font-semibold">
                Julia Wolf , ayokay, Khalid{" "}
                <span className="text-muted-foreground font-normal">
                  and more
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

        <TrackList data={ChartTracks.data} />
      </div>
    </main>
  );
}
