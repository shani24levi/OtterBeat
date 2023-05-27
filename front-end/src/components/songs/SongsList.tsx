import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useTypedSelector';
import { Grid } from '@mui/material';
import Card from '../../components/card/Card';
import { Radius } from '../../components/card/card.types';
import { songIcons } from '../../assets';
import { SongState } from '../../types/models/songsModel';
import {
  searchSongs,
  fetchSongs,
} from '../../store/features/songs/songsAsyncThunk';

const SongsList: React.FC<{ searchTerm: string }> = ({ searchTerm }) => {
  const dispatch = useAppDispatch();
  const { error, loading, songs, searched } = useAppSelector(
    (state) => state.songs
  );

  React.useEffect(() => {
    songs.length == 0 && searchTerm == '' && dispatch(searchSongs(''));
    searchTerm !== '' && dispatch(searchSongs(searchTerm));
  }, [songs, searchTerm, dispatch]);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>{error ?? ''}</p>}

      <Grid container spacing={2}>
        {searched.length != 0 ? (
          searched.map((song: SongState, i: number) => {
            return (
              <Card
                key={song.songid}
                props={song}
                imgBg={songIcons[i]}
                radius={Radius.Circle}
              />
            );
          })
        ) : (
          <p>No Songs..</p>
        )}
      </Grid>
    </>
  );
};

export default SongsList;
