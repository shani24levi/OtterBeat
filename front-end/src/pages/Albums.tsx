import React from 'react';
import { WaveHeaderWraper } from '../shared/theme/header.wraper';
import { Container } from '@mui/material';
import HeadTextIcon from '../components/HeadTextIcon';
// import { fetchSongs } from '../store/features/songs/songsSlice';
import SearchInput from '../components/SearchInput';
import useDebounce from '../hooks/useDebounce';
import SongsList from '../components/songs/SongsList';

const Albums = () => {
  const [searchValue, setSearchValue] = React.useState('');
  const debouncedSearchValue = useDebounce(searchValue, 1000);

  return (
    <WaveHeaderWraper>
      <Container maxWidth="xl">
        <HeadTextIcon text="Albums" />

        <SearchInput
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <SongsList searchTerm={debouncedSearchValue} />
      </Container>
    </WaveHeaderWraper>
  );
};

export default Albums;
