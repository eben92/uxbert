"use client";
import { TrackProps } from "@/types";
import React, { createContext, useContext, useState } from "react";

type SearchProps = {
  searchResult: TrackProps[];
  setSearchResult: (tracks: TrackProps[]) => void;
};

const SearchContext = createContext<SearchProps>({} as SearchProps);

export const useSearchContext = () => useContext<SearchProps>(SearchContext);

export function SearchContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [searchResult, setSearchResult] = useState<TrackProps[]>([]);

  return (
    <SearchContext.Provider
      value={{
        searchResult,
        setSearchResult,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
