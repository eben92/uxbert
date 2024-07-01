"use client";
import { getLocalPlaylist } from "@/services/local-services";
import { TrackProps } from "@/types";
import React, { createContext, useContext, useEffect, useState } from "react";

type PaginatedResult = {
  data: TrackProps[];
  total: number;
  page: number;
  hasNextPage: boolean;
};

export type CachedProps = { data: TrackProps[]; id: string };

type SearchProps = {
  searchResult: TrackProps[];
  cachedSearchResult: CachedProps;
  setSearchResult: (tracks: TrackProps[]) => void;
  handleViewMore: () => void;
  paginatedResult: PaginatedResult;
};

const SearchContext = createContext<SearchProps>({} as SearchProps);

export const useSearchContext = () => useContext<SearchProps>(SearchContext);

export function SearchContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [searchResult, setSearchResult] = useState<TrackProps[]>([]);
  const [paginatedResult, setPaginatedResult] = useState<PaginatedResult>({
    data: [],
    hasNextPage: false,
    page: 0,
    total: 0,
  } as PaginatedResult);

  const [cachedSearchResult, setCachedSearchResult] = useState<CachedProps>({
    data: [],
    id: "",
  });

  const sResults = getLocalPlaylist();

  useEffect(() => {
    if (sResults.id) {
      setCachedSearchResult(sResults);
    }
  }, [getLocalPlaylist]);

  function handleViewMore() {
    const { data, page } = paginatedResult;
    const start = page * 10;
    const end = start + 10;
    const hasNextPage = end < searchResult.length;

    setPaginatedResult({
      data: [...data, ...searchResult.slice(start, end)],
      hasNextPage,
      page: page + 1,
      total: searchResult.length,
    });
  }

  useEffect(() => {
    if (searchResult.length === 0) {
      return setPaginatedResult({
        data: [],
        hasNextPage: false,
        page: 0,
        total: 0,
      } as PaginatedResult);
    }

    const total = searchResult.length;
    const data = searchResult.slice(0, 10);
    const hasNextPage = total > 10;

    setPaginatedResult({
      data,
      hasNextPage,
      page: 1,
      total,
    });
  }, [searchResult]);

  return (
    <SearchContext.Provider
      value={{
        searchResult,
        setSearchResult,
        handleViewMore,
        paginatedResult,
        cachedSearchResult,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
