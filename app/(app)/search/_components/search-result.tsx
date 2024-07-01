"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";

import Image from "next/image";

export default function SearchHistory() {
  return (
    <div className="flex flex-col gap-4">
      <Label className="text-2xl font-bold">Search Result</Label>
      <div className="grid gap-x-4 md:gap-x-6 gap-y-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
        {Array.from({ length: 2 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-col w-full relative bg-white/5 rounded items-center justify-start px-0  text-sm gap-4"
          >
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
                <CardTitle className="text-lg text-start">
                  The Chainsmokers
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-4 w-full px-4">
                <CardDescription className="text-start">Artist</CardDescription>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
