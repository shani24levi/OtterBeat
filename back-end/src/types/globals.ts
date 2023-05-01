export interface ENV {
  NODE_ENV: string;
  PORT: string;
  MONGO_URI?: string;
}

export namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: string;
    PORT: string;
    MONGO_URI: string;
  }
}
