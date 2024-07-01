import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { X } from "lucide-react";
import Image from "next/image";

export default function RecentSearch() {
  return (
    <div className="flex flex-col w-full relative bg-white/5 rounded items-center justify-start px-0  text-sm gap-4">
      <Button
        className="absolute top-4 right-4 h-9 w-9"
        variant={"ghost"}
        size={"round"}
      >
        <X size={24} />
      </Button>
      <Card className="flex w-full flex-col  items-center gap-2 justify-center">
        <CardHeader className="flex w-full px-4 pb-0 flex-col gap-2 pt-4">
          <div>
            <Image
              src="/playlist-2.png"
              className=" rounded-full w-full"
              alt=""
              width={150}
              height={150}
            />
          </div>
          <CardTitle className="text-lg text-start">The Chainsmokers</CardTitle>
        </CardHeader>
        <CardContent className="pb-4 w-full px-4">
          <CardDescription className="text-start">Artist</CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}
