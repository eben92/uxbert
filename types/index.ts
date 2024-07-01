export * from "./playlists";
export * from "./tracks";

export type ApiResponse<T> = {
  results: T;
  message: string;
  status: number;
};
