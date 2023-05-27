import React from 'react';
import { OutlinedInputProps } from '@mui/material/OutlinedInput';
import { Box, TextField, styled } from '@mui/material';

interface SearchProps {
  searchValue: string;
  setSearchValue: (str: any) => any;
}

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#A0AAB4',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#B2BAC2',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#E0E3E7',
    },
    '&:hover fieldset': {
      borderColor: '#B2BAC2',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#6F7E8C',
    },
  },
});

const SearchInput: React.FC<SearchProps> = ({
  searchValue,
  setSearchValue,
}) => {
  return (
    <Box
      component="form"
      noValidate
      sx={{
        display: 'grid',
        gridTemplateColumns: { sm: '1fr 1fr' },
        gap: 2,
        marginBottom: '7%',
      }}
    >
      <CssTextField
        label="Search Songs.."
        id="custom-css-outlined-input"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        autoFocus
      />
      {/* <input
        className="search-input"
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search"
        autoFocus
      /> */}
    </Box>
  );
};
export default SearchInput;
