import React from 'react';
import useSWR from 'swr';
import { getSongs, songsUrl } from '../servises';
import { WaveHeaderWraper } from '../shared/theme/header.wraper';
import {
  GridProps,
  Grid,
  PaletteMode,
  Typography,
  TypographyProps,
  Container,
  Box,
} from '@mui/material';
import Card from '../components/card/Card';
import { Radius } from '../components/card/card.types';
import { songIcons } from '../assets';

interface Song {
  songid: number;
  title: string;
}

const Albums = () => {
  const { data, error, isLoading } = useSWR(songsUrl, getSongs);

  console.log('data', data);

  return (
    <WaveHeaderWraper>
      <Container maxWidth="xl">
        {error && <div>failed to load</div>}
        {isLoading && <div>isLoading...</div>}

        {data &&
          data.data.map((song: Song, i: number) => {
            return (
              <Card
                key={song.songid}
                props={song}
                imgBg={songIcons[i]}
                radius={Radius.Circle}
              />
            );
          })}
      </Container>
    </WaveHeaderWraper>
  );
};

export default Albums;
