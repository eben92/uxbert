"use client";

import { Input } from "@/components/ui/input";
import { useLocalSearchParams } from "@/hooks/use-local-search-params";
import { Search } from "lucide-react";

export default function SearchBar() {
  const [searchParams, setSearchParams] = useLocalSearchParams();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams({
      q: e.target.value,
    });
  };

  return (
    <div className="relative w-full md:w-auto ">
      <span className="absolute left-2 text-black/50 top-2">
        <Search size={24} className="" />
      </span>
      <Input
        onChange={handleSearch}
        value={searchParams.get("q") || ""}
        className="pl-10 w-full md:text-base bg-primary text-black  rounded-3xl md:min-w-[300px] lg:min-w-[500px]"
        placeholder="Artists, songs, or podcasts"
      />
    </div>
  );
}
