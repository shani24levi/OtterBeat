declare namespace Express {
  export interface Request {
    userid?: string;
    email?: string;
    img?: string;
    is_premium?: boolean;
  }
}
