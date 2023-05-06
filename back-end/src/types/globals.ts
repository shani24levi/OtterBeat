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

export interface TokenData {
  userid?: string;
  email?: string;
  img?: string;
  is_premium?: boolean;
}

export interface TokenRequest extends Request {
  tokenData: TokenData;
}

export interface TypedRequestBody<T> extends Express.Request {
  body: T;
  // (req: TypedRequestBody<{ username: string, password: string }>
} //req.body.username === "foo"
