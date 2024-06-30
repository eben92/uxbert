import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

type Props = {
  src: string;
  title: string;
  by?: string;
};

export function AlbumCard({ ...data }: Props) {
  return (
    <button className="flex flex-col bg-white/5 rounded items-center justify-start px-0  text-sm gap-4">
      <Card className="flex flex-col h-full  items-center gap-2 justify-start">
        <CardHeader className="flex px-4 pb-0 flex-col gap-2 pt-4">
          <Image
            src={data?.src}
            className="w-full rounded"
            alt=""
            width={150}
            height={150}
          />
          <CardTitle
            title={data?.title}
            className="text-lg line-clamp-1 text-start"
          >
            {data?.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="pb-4 px-4 w-full">
          <CardDescription className="text-start">
            {data?.by ?? "Unknown Artist"}
          </CardDescription>
        </CardContent>
      </Card>
    </button>
  );
}
