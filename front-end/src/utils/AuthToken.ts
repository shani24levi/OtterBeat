import { UserState } from '../types/models/userModel';
import jwt_decode, { JwtPayload } from 'jwt-decode';

export interface ResponseToken {
  success: boolean;
  data: { token: string };
  error?: string;
}

export const getStoredToken = (): string => {
  return localStorage.getItem('access_token') as string;
};

export const setStoredToken = (token: string): void => {
  localStorage.setItem('access_token', token);
};

export const decodedToken = (token: string): UserState => {
  const decoded = jwt_decode<JwtPayload>(token);
  return decoded as UserState;
};

export const isValidToken = (token: string): boolean => {
  const isExpired = (): boolean => {
    const decoded = decodedToken(token);
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      //delete user from store
      //delet user token from storag
      return false;
    }
    return true;
  };

  return !token ? false : isExpired();
};
