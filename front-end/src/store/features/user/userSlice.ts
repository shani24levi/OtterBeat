import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { UserResponse, UserState } from '../../../types/models/userModel';
import { login } from './userAsyncThunk';
import { decodedToken, getStoredToken } from '../../../utils';
import { isValidToken, ResponseToken } from '../../../utils/AuthToken';

export interface User {
  user: UserState;
  loading: boolean;
  error: string | null;
}

const token = getStoredToken();
const decodedUser: UserState | boolean | '' =
  token && isValidToken(token) && decodedToken(token!);

const initialState: User = {
  user: decodedUser
    ? {
        userid: decodedUser.userid,
        email: decodedUser.email,
        img: decodedUser.img,
        exp: decodedUser.exp,
        iat: decodedUser.iat,
        is_premium: decodedUser.is_premium,
      }
    : ({} as UserState),
  loading: false,
  error: null,
} as User;

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state, action) => {
        console.log('pending');
        state.loading = true;
      })
      .addCase(
        login.fulfilled,
        (state, action: PayloadAction<UserResponse>) => {
          state.loading = false;
          state.user = action.payload.data ?? ({} as UserState);
          state.error = null;
        }
      )
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.error ?? null;
      });
  },
});

export default userSlice.reducer;
