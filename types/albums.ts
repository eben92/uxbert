import { ArtistProps } from "./tracks";

export type AlbumProps = {
  id: number;
  title: string;
  link: string;
  cover: string;
  cover_small: string;
  cover_medium: string;
  cover_big: string;
  cover_xl: string;
  md5_image: string;
  record_type: string;
  tracklist: string;
  explicit_lyrics: boolean;
  position: number;
  artist: ArtistProps;
  type: string;
  duration: number;
  nb_tracks: number;
  contributors: ArtistProps[];
};
