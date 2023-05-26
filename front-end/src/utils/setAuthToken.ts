import { otterbeatApi } from '../servises';
import { setStoredToken } from '.';

// set axois header token
export const setAuthToken = (token: string) => {
  if (token) {
    // Apply to every request
    otterbeatApi.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    setStoredToken(String(token));

    //setLocalStorage('access_token', token);
  } else {
    //if the token isnt ther so Delete auth header
    delete otterbeatApi.defaults.headers.common['Authorization'];
    //delteLocalStorage('access_token', token);
  }
};
