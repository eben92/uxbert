import { PlaylistProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Label } from "../ui/label";

type PlaylistCardProps = {
  data: PlaylistProps;
};

export function PlaylistCard({ data }: PlaylistCardProps) {
  return (
    <Link
      href={"/playlist/" + data.id}
      className="flex rounded items-center justify-start px-0 bg-white/10 text-sm gap-4"
    >
      <Image
        src={data.picture_medium}
        className="rounded-l"
        alt=""
        width={60}
        height={60}
      />
      <Label>{data.title}</Label>
    </Link>
  );
}
