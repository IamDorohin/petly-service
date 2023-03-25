import { useState } from 'react';

import * as SC from './NoticesSearch.styled';
import SearchIcon from '@mui/icons-material/Search';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export const NoticesSearch = ({ element, onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState(element ?? '');

  const handleSearchQueryChange = event => {
    setSearchQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (searchQuery.trim() === '') {
      alert('Enter your search request');
      return;
    }

    onSubmit(searchQuery);
  };

  const clearFilter = () => {
    setSearchQuery('');
  };

  return (
    <SC.SearchContainer>
      {/* <SC.Title>Find your favorite pet</SC.Title> */}
      <SC.Form onSubmit={handleSubmit}>
        <SC.Input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchQueryChange}
        />
        <SC.FindButton component="button" type="submit" onClick={handleSubmit}>
          <SearchIcon />
        </SC.FindButton>

        {searchQuery !== '' && (
          <SC.DeleteButton component="button" onClick={clearFilter}>
            <HighlightOffIcon />
          </SC.DeleteButton>
        )}
        {/* <SC.Button type="submit">
          {searchQuery === '' ? (
            <SearchIcon
              sx={{
                width: 24,
                height: 24,
                color: '#111111',
              }}
            />
          ) : (
            <HighlightOffIcon
              sx={{
                width: 24,
                height: 24,
                color: '#111111',
              }}
            />
          )}
        </SC.Button> */}
      </SC.Form>
    </SC.SearchContainer>
  );
};
