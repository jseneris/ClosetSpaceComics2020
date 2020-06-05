import React from 'react';
import { TextField } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

export const SearchBar = (props) => {
  const SearchButton = () => (
    <IconButton>
      <SearchIcon />
    </IconButton>
  );

  return (
    <form className="search" noValidate>
      <TextField
        id="date"
        label=""
        type="date"
        defaultValue="2020-05-27"
        className="date-picker"
        onChange={(e) => props.OnDateChange(e.target.value)}
        InputLabelProps={{
          shrink: 'true',
        }}
      />

      {/* <TextField
        id="text-search"
        label=""
        value="search by title"
        type="text"
        InputProps={{ endAdornment: <SearchButton />, shrink: 'true' }}
      /> */}
    </form>
  );
};

export default SearchBar;
