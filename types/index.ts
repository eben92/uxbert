export type PlaylistProps = {
  id: string | number;
  title: string;
  duration?: number;
  public: boolean;
  is_loved_track?: boolean;
  collaborative?: boolean;
  nb_tracks: number;
  fans?: number;
  link: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  checksum: string;
  tracklist: string;
  creation_date: string;
  md5_image: string;
  picture_type: string;
  user?: {
    id: string | number;
    name: string;
    tracklist: string;
    type: string;
  };
  time_add?: number;
  time_mod?: number;
  creator?: {
    id: string;
    name: string;
    tracklist: string;
    type: string;
  };

  type: string;
};

export type PlaylistResponse = {
  data: PlaylistProps[];
  total: number;
};

export type Artist = {
  id: number;
  name: string;
  link: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  radio: boolean;
  tracklist: string;
  position: number;
  type: string;
};
