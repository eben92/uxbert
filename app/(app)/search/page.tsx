import { SliderButton } from "@/components/shared/navigation";
import { UserCard } from "@/components/shared/user-card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search } from "lucide-react";
import BroswerAll from "./_components/browse-all";
import Genres from "./_components/genres";
import RecentSearch from "./_components/search-history";

export default function SearchPage() {
  return (
    <main className="pb-8">
      <div className=" flex flex-col gap-4">
        <div className="flex px-4 gap-4 py-4 md:px-6 items-center bg-black justify-between w-full">
          <div className="flex items-center w-full gap-4">
            <SliderButton />
            <div className="relative w-full ">
              <span className="absolute left-2 text-black/50 top-2">
                <Search size={24} className="" />
              </span>
              <Input
                className="pl-10 w-full md:text-base bg-primary text-black  rounded-3xl md:min-w-[300px] lg:min-w-[500px]"
                placeholder="Artists, songs, or podcasts"
              />
            </div>
          </div>
          <UserCard />
        </div>
        <div className="px-4 md:px-6 flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <Label className="text-2xl font-bold">Recent searches</Label>
            <div className="grid gap-x-4 md:gap-x-6 gap-y-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
              {Array.from({ length: 2 }).map((_, i) => (
                <RecentSearch key={i} />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-4">
            <div className="flex items-center justify-between">
              <Label className="text-2xl font-bold">Your top genress</Label>
            </div>

            <Genres />
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <div className="flex items-center justify-between">
              <Label className="text-2xl font-bold">Browse all</Label>
            </div>

            <BroswerAll />
          </div>
        </div>
      </div>
    </main>
  );
}
