import { SliderButton } from "@/components/shared/navigation";
import { UserCard } from "@/components/shared/user-card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search } from "lucide-react";
import BroswerAll from "./_components/browse-all";
import SearchHistory from "./_components/search-history";
import SearchResult from "./_components/search-result";
import SearchBar from "./_components/search-bar";

export default function SearchPage() {
  return (
    <main className="pb-8">
      <div className=" flex flex-col gap-4">
        <div className="flex px-4 gap-4 py-4 md:px-6 items-center bg-black justify-between w-full">
          <div className="flex items-center w-full gap-4">
            <SliderButton />
            <SearchBar />
          </div>
          <UserCard />
        </div>
        <div className="px-4 md:px-6 flex flex-col gap-6">
          <SearchResult />

          <SearchHistory />

          <div className="flex flex-col gap-4 mt-4">
            <div className="flex items-center justify-between">
              <Label className="text-2xl font-bold">Top genre</Label>
            </div>

            <BroswerAll />
          </div>
        </div>
      </div>
    </main>
  );
}
