import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/useTypedSelector';
import { WaveHeaderWraper } from '../shared/theme/header.wraper';
import { SongState } from './../types/models/songsModel';
import { Container, Grid } from '@mui/material';

import Card from '../components/card/Card';
import { Radius } from '../components/card/card.types';
import { songIcons } from '../assets';
import HeadTextIcon from '../components/HeadTextIcon';
import { fetchSongs } from '../store/features/songs/songsSlice';

const Albums = () => {
  const dispatch = useAppDispatch();
  // dispatch(fetchSongs);

  React.useEffect(() => {
    dispatch(fetchSongs());
  }, [dispatch]);

  const { error, loading, songs } = useAppSelector((state) => state.songs);

  console.log('data-songs', songs);

  return (
    <WaveHeaderWraper>
      <Container maxWidth="xl">
        {error && <>failed to load</>}
        {loading && <>isLoading...</>}

        <HeadTextIcon text="Albums" />

        <Grid container spacing={2}>
          {songs &&
            songs.map((song: SongState, i: number) => {
              return (
                <Card
                  key={song.songid}
                  props={song}
                  imgBg={songIcons[i]}
                  radius={Radius.Circle}
                />
              );
            })}
        </Grid>
      </Container>
    </WaveHeaderWraper>
  );
};

export default Albums;
