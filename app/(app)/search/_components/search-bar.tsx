"use client";

import { Input } from "@/components/ui/input";
import { useDebounceValue } from "@/hooks/use-debounce-value";
import { useLocalSearchParams } from "@/hooks/use-local-search-params";
import { getSearchQuery } from "@/services/client-service";
import { Search } from "lucide-react";
import { useEffect } from "react";

export default function SearchBar() {
  const [searchParams, setSearchParams] = useLocalSearchParams();
  const defaultValue = searchParams.get("q") || "";
  const [debouncedValue, setValue] = useDebounceValue(defaultValue, 500);

  async function fetchData() {
    const data = await getSearchQuery(debouncedValue);
    console.log(data);
  }

  useEffect(() => {
    if (debouncedValue && debouncedValue.length >= 4) {
      fetchData();
    }
  }, [debouncedValue]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(value);
    setSearchParams({
      q: value,
    });
  };

  return (
    <div className="relative w-full md:w-auto ">
      <span className="absolute left-2 text-black/50 top-2">
        <Search size={24} className="" />
      </span>
      <Input
        onChange={handleSearch}
        value={defaultValue || ""}
        className="pl-10 w-full md:text-base bg-primary text-black  rounded-3xl md:min-w-[300px] lg:min-w-[500px]"
        placeholder="Artists, songs, or podcasts"
      />
    </div>
  );
}
