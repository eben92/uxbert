import { ENV } from "@/lib/constants";
import { AlbumProps, ApiResponse, PlaylistProps, TrackProps } from "@/types";

type SearchResponse = (PlaylistProps | AlbumProps | TrackProps)[];

/**
 * Retrieves search results based on the provided query.
 * @param q - The search query.
 * @returns A promise that resolves to an ApiResponse containing the search results.
 */
export async function getSearchQuery(
  q: string
): Promise<ApiResponse<SearchResponse>> {
  const response = await fetch(`${ENV.BASE_URL}/api/v1/search?q=${q}`);

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
