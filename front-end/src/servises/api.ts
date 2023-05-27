import axios from 'axios';
import { getStoredToken } from '../utils';

export const otterbeatApi = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    Authorization: `Bearer ${getStoredToken()}`,
  },
});

export const songsUrl = '/api/songs';
export const userUrl = '/api/user';
export const authUrl = '/api/auth';
export const likesUrl = '/api/likes';
