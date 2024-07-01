"use client";
import { Favorite } from "@/components/shared/favorite";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { usePlayerContext } from "@/context/player-context";
import { useAudioPlayer } from "@/hooks/use-audio-player";
import { cn, secondsToMinutes } from "@/lib/utils";
import { TrackProps } from "@/types/tracks";
import { Clock } from "lucide-react";
import Image from "next/image";

type Props = {
  data: TrackProps[];
};

export default function TrackList({ data }: Readonly<Props>) {
  const { playing, pause, play } = useAudioPlayer();
  const { currentTrack, loadTracks } = usePlayerContext();

  return (
    <Table>
      <TableHeader>
        <TableRow className="uppercase">
          <TableHead className="max-w-0 pr-0">#</TableHead>
          <TableHead>Title</TableHead>
          <TableHead className="hidden sm:table-cell uppercase">
            Album
          </TableHead>
          <TableHead className="hidden md:table-cell uppercase">
            Date Added
          </TableHead>
          <TableHead className="text-right flex items-center justify-end">
            <Clock size={20} />
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((track, i) => (
          <TableRow
            key={track.id}
            onClick={() => {
              if (currentTrack?.id === track.id) {
                playing ? pause() : play();

                return;
              }

              loadTracks(data, i);
            }}
            className={cn(
              "cursor-pointer hover:bg-accent",
              currentTrack?.id === track.id && "bg-accent"
            )}
          >
            <TableCell className="max-w-0 pr-0">{i + 1}</TableCell>
            <TableCell>
              <div className="flex items-center gap-4">
                <Image
                  src={track.album.cover_medium}
                  width={50}
                  height={50}
                  alt=""
                />
                <div className="flex flex-col font-medium">
                  {track.title}
                  <div className="hidden text-sm text-muted-foreground md:inline">
                    {track.artist.name}
                  </div>
                </div>
              </div>
            </TableCell>
            <TableCell className="hidden sm:table-cell">
              {track.album.title}
            </TableCell>

            <TableCell className="hidden md:table-cell"></TableCell>
            <TableCell className=" table-cell ">
              <div className="flex items-center justify-end gap-6">
                <div className="hidden md:block">
                  <Favorite />
                </div>
                <p>{track.duration ? secondsToMinutes(track.duration) : "-"}</p>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
