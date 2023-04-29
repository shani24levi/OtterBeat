declare interface ENV {
  NODE_ENV: string | undefined;
  PORT: number | undefined;
  MONGO_URI: string | undefined;
}

declare namespace NodeJS {
  declare interface ProcessEnv {
    NODE_ENV: string;
    PORT: number;
    MONGO_URI: string;
  }
}

declare interface Artist {
  artist: string;
  songs: Song[];
}

declare interface Song {
  id: number;
  title: number;
  duration: string;
  releaseYear: string;
  url: string;
  icon?: string;
}

exports = {
  ENV,
  NodeJS,
  Artist,
};
