import { LoginArgs } from './../../../types/models/userModel';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { authUrl, login as loginService } from '../../../servises';
import { UserResponse } from '../../../types/models/userModel';
import { ResponseToken } from '../../../utils/AuthToken';

// thunk functions //createAsyncThunk<UserResponse,LoginArgs>??
export const login = createAsyncThunk<
  UserResponse,
  LoginArgs,
  {
    rejectValue: UserResponse;
  }
>(authUrl, async (data: LoginArgs, thunkApi) => {
  try {
    const response: UserResponse = await loginService(
      data.email,
      data.password
    );
    console.log('response', response.success);
    return !response.success ? thunkApi.rejectWithValue(response) : response;
  } catch (error: any) {
    const message = error.message;
    return thunkApi.rejectWithValue(message);
  }
});
