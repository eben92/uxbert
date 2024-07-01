"use client";

import { ApiResponse, TrackProps } from "@/types";

type SearchResponse = TrackProps[];

/**
 * Retrieves search results based on the provided query.
 * @param q - The search query.
 * @returns A promise that resolves to an ApiResponse containing the search results.
 */
export async function getSearchQuery(
  q: string
): Promise<ApiResponse<SearchResponse>> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/search?q=${q}`
  );

  if (!response.ok) {
    return {
      results: [],
      message: "error",
      status: 500,
    };
  }
  const d = (await response.json()) as ApiResponse<SearchResponse>;

  return d;
}
