export * from "./playlists";
export * from "./tracks";
export * from "./albums";

export type ApiResponse<T> = {
  results: T;
  message: string;
  status: number;
};
