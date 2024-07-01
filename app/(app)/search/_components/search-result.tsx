"use client";
import { ViewAllButton } from "@/components/shared/view-more";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useSearchContext } from "@/context/search-context";

import { Image } from "@/components/ui/image";
import { useRouter } from "next/navigation";

export default function SearchHistory() {
  const router = useRouter();
  const { paginatedResult, handleViewMore, searchResult } = useSearchContext();

  if (paginatedResult.data.length === 0) {
    return null;
  }

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <Label className="text-2xl font-bold">Search Result</Label>
          <ViewAllButton tracks={searchResult} />
        </div>
        <div className="grid gap-x-4 md:gap-x-6 gap-y-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
          {paginatedResult.data.map((res, i) => (
            <div
              key={res.id}
              className="flex flex-col w-full relative bg-white/5 rounded items-center justify-start px-0  text-sm gap-4"
            >
              <Card className="flex w-full h-full flex-col  items-center gap-2 justify-center">
                <CardHeader className="flex w-full px-4 pb-0 flex-col gap-2 pt-4">
                  <div>
                    <Image
                      src={
                        res?.artist?.picture_medium ??
                        res.album?.cover_medium ??
                        ""
                      }
                      className=" rounded-full w-full"
                      alt=""
                      width={150}
                      height={150}
                    />
                  </div>
                  <CardTitle className="text-lg line-clamp-1 text-start">
                    {res?.title ?? res.album?.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pb-4 w-full px-4">
                  <CardDescription className="text-start">
                    {res?.artist?.name ?? res.album?.title}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {paginatedResult.hasNextPage && (
          <div className="flex items-center justify-center w-full">
            <Button
              onClick={handleViewMore}
              variant={"link"}
              className="text-green-500"
            >
              View more results - (
              {paginatedResult.total - paginatedResult.data.length})
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
