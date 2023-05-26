import { SongState, Response } from './../../../types/models/songsModel';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getSongs, otterbeatApi, songsUrl } from '../../../servises';

export interface Songs {
  songs: SongState[];
  loading: boolean;
  status?: 'idle' | 'loading' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
}

// create the thunk
export const fetchSongs = createAsyncThunk(songsUrl, async (data, thunkApi) => {
  try {
    const response = await getSongs(); //otterbeatApi.get<SongState[]>(songsUrl);
    console.log('response', response);

    return response;
  } catch (error: any) {
    const message = error.message;
    return thunkApi.rejectWithValue(message);
  }
});

const initialState: Songs = { songs: [], loading: false, error: null } as Songs;

export const songsSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSongs.pending, (state, action) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(
        fetchSongs.fulfilled,
        (state, action: PayloadAction<Response>) => {
          state.status = 'loading';
          state.loading = false;
          state.songs = action.payload.data ?? [];
        }
      );
  },
});

export default songsSlice.reducer;
