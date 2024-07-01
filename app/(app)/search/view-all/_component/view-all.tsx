"use client";

import { PlaylistControls } from "@/app/(app)/playlist/_components/controls";
import TrackList from "@/app/(app)/playlist/_components/tracklist";
import NotFoundPage from "@/app/not-found";
import { SliderButton } from "@/components/shared/navigation";
import { UserCard } from "@/components/shared/user-card";
import { Label } from "@/components/ui/label";
import { useSearchContext } from "@/context/search-context";
import { useLocalSearchParams } from "@/hooks/use-local-search-params";
import { getSearchResults } from "@/services/local-services";
import Image from "next/image";

export default function ViewAll() {
  const cachedSearchResult = getSearchResults();
  const [searchParams] = useLocalSearchParams();

  const album = searchParams.get("album") ?? "";

  if (!cachedSearchResult.id) {
    return <NotFoundPage />;
  }
  return (
    <>
      <div className=" px-4 md:px-8 lg:px-12 flex flex-col gap-4 ">
        <div className="flex items-center justify-between w-full">
          <SliderButton />
          <UserCard />
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex sm:flex-row flex-col items-start sm:items-end gap-6">
            <Image
              src={album}
              alt=""
              width={300}
              height={300}
              className="w-full sm:w-auto"
            />
            <div className="flex flex-col gap-4">
              <p className="font-semibold">Public playlist</p>
              <Label className="text-[32px] md:text-[50px] lg:text-[100px] leading-none font-bold">
                Mixtape
              </Label>

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
                <p className="text-muted-foreground"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary/5 flex-1 flex flex-col gap-8 py-4 px-4 md:px-8 lg:px-12">
        <PlaylistControls playlistId={cachedSearchResult.id} />

        <TrackList data={cachedSearchResult.data} />
      </div>
    </>
  );
}
