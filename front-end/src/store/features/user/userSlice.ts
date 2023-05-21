import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import jwt_decode from 'jwt-decode';

export interface UserState {
  userid: number;
  email: string;
  img: string;
  exp: number;
  iat: number;
  is_premium: boolean;
}

const user = localStorage.getItem('user');
const decodedUser: UserState | null | '' = user && jwt_decode(user!);

const initialState: UserState = decodedUser
  ? {
      userid: decodedUser.userid,
      email: decodedUser.email,
      img: decodedUser.img,
      exp: decodedUser.exp,
      iat: decodedUser.iat,
      is_premium: decodedUser.is_premium,
    }
  : ({} as UserState);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    increment: (state) => {
      state.userid += 1;
    },
    decrement: (state) => {
      state.userid -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.userid += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = userSlice.actions;
export default userSlice.reducer;
