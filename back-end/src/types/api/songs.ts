export interface Songs {
  artist: string;
  songs: Song[];
}

export interface Song {
  id: number;
  title: number;
  duration: string;
  releaseYear: string;
  url: string;
  icon?: string;
}
