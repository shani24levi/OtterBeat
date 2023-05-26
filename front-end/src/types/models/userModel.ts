export interface UserState {
  userid: number;
  email: string;
  img: string;
  is_premium: boolean;
  exp: number;
  iat: number;
}

export interface UserResponse {
  success: boolean;
  data?: UserState;
  error?: string;
}

export interface ResponseToken {
  success: boolean;
  data?: { token: string };
  error?: string;
}

export interface LoginArgs {
  email: string;
  password: string;
}
