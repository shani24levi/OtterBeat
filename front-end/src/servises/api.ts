import axios from 'axios';

export const otterbeatApi = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
  },
});

// const setAuthToken = token => {
//     if (token) {
//         // Apply to every request
//         axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
//     } else {
//         //if the token isnt ther so Delete auth header
//         delete axios.defaults.headers.common['Authorization'];
//     }
// };

export const songsUrl = '/api/songs';
export const userUrl = '/api/user';
export const authUrl = '/api/auth';
export const likesUrl = '/api/likes';
