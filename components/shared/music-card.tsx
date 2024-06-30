import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export function MusicCard() {
  return (
    <button className="flex flex-col bg-white/5 rounded items-center justify-start px-0  text-sm gap-4">
      <Card className="flex flex-col  items-center gap-2 justify-center">
        <CardHeader className="flex px-4 pb-0 flex-col gap-2 pt-4">
          <Image
            src="/playlist-2.png"
            className="w-full rounded"
            alt=""
            width={150}
            height={150}
          />
          <CardTitle className="text-lg text-start">Chill mix</CardTitle>
        </CardHeader>
        <CardContent className="pb-4 px-4">
          <CardDescription className="text-start">
            Hey Violet, VÉRITÉ, Timeflies and more
          </CardDescription>
        </CardContent>
      </Card>
    </button>
  );
}
