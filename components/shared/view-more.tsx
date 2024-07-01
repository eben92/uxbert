"use client";

import { saveToLocalPlaylist } from "@/services/local-services";
import { AlbumProps, TrackProps } from "@/types";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { useMemo } from "react";

export function ViewAllButton({
  tracks,
  album,
}: {
  tracks?: TrackProps[];
  album?: AlbumProps[];
}) {
  const albumCover = useMemo(() => {
    if (tracks) {
      return {
        url:
          tracks?.[0].album?.cover_medium ?? tracks?.[0].artist?.picture_medium,
        type: "track",
      };
    }
    return { url: album?.[0]?.cover_medium, type: "album" };
  }, [tracks, album]);

  function handleSave() {
    if (tracks) {
      saveToLocalPlaylist(tracks);
      return;
    }

    const d = (album || []).map((x) => ({
      ...x,
      album: {
        ...x,
      },
    })) as unknown as TrackProps[];

    if (album) {
      saveToLocalPlaylist(d);
      return;
    }
  }
  return (
    <Link
      onClick={() => {
        handleSave();
      }}
      href={"/view-all?album=" + albumCover?.url + "&type=" + albumCover?.type}
      className={buttonVariants({
        className: "rounded  text-sm text-muted-foreground",
        variant: "ghost",
      })}
    >
      View all
    </Link>
  );
}
