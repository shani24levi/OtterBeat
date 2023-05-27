import { SongState, Response } from './../../../types/models/songsModel';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { searchSongs, fetchSongs } from './songsAsyncThunk';

export interface Songs {
  songs: SongState[];
  searched: SongState[];
  loading: boolean;
  error: string | null;
}

const initialState: Songs = {
  songs: [],
  searched: [],
  loading: false,
  error: null,
} as Songs;

export const songsSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    setUser: (state, action) => {
      //state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    // builder
    //   .addCase(fetchSongs.pending, (state, action) => {
    //     state.loading = true;
    //   })
    //   .addCase(
    //     fetchSongs.fulfilled,
    //     (state, action: PayloadAction<Response>) => {
    //       state.loading = false;
    //       state.songs = action.payload.data ?? [];
    //       state.searched = action.payload.data ?? [];
    //     }
    //   );

    //searchSongs

    builder
      .addCase(searchSongs.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchSongs.fulfilled, (state, action) => {
        console.log('action', action);

        state.loading = false;
        // state.songs = action.payload.data ?? [];
        state.searched = action.payload.data ?? [];
      });
  },
});

export default songsSlice.reducer;
