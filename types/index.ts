export * from "./playlists";
export * from "./tracks";
export * from "./albums";

export type GenreProps = {
  id: string;
  name: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  type: string;
};

export type ApiResponse<T> = {
  results: T;
  message: string;
  status: number;
};
