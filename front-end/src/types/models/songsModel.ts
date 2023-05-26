export interface SongState {
  artistid: number;
  songid: number;
  artist: string;
  title: string;
  duration: string;
  releaseyear: string;
}

export interface Response {
  success?: boolean;
  data?: SongState[];
}
