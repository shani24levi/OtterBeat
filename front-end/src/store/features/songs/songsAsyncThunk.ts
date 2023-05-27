import { createAsyncThunk } from '@reduxjs/toolkit';
import { songsUrl, searchSongsService, getSongs } from '../../../servises';
import { Response } from '../../../types/models/songsModel';

// thunk functions
export const searchSongs = createAsyncThunk<
  Response,
  string,
  {
    rejectValue: Response;
  }
>(songsUrl, async (data: string, thunkApi) => {
  try {
    const response: Response = await searchSongsService(data);
    return response;
  } catch (error: any) {
    const message = error.message;
    return thunkApi.rejectWithValue(message);
  }
});

// create the thunk
export const fetchSongs = createAsyncThunk(songsUrl, async (data, thunkApi) => {
  try {
    const response = await getSongs();
    console.log('response', response);

    return response;
  } catch (error: any) {
    const message = error.message;
    return thunkApi.rejectWithValue(message);
  }
});
