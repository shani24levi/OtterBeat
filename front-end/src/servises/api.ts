import axios from 'axios';

export const otterbeatApi = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
  },
});

export const songsUrl = '/api/songs';
export const userUrl = '/api/user';
export const authUrl = '/api/auth';
export const likesUrl = '/api/likes';
