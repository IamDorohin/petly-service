import { useState } from 'react';

import * as SC from './NoticesSearch.styled';
import SearchIcon from '@mui/icons-material/Search';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export const NoticesSearch = ({
  element,
  onSubmit,
  // onChange
}) => {
  const [searchQuery, setSearchQuery] = useState(element ?? '');

  const handleSearchQueryChange = event => {
    setSearchQuery(event.currentTarget.value.toLowerCase());
    // onChange(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (searchQuery.trim() === '') {
      alert('Enter your search request');
      return;
    }

    onSubmit(searchQuery);
  };

  return (
    <SC.SearchContainer>
      <SC.Title>Find your favorite pet</SC.Title>
      <SC.Form onSubmit={handleSubmit}>
        <SC.Input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchQueryChange}
        />
        <SC.Button type="submit">
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
        </SC.Button>
      </SC.Form>
    </SC.SearchContainer>
  );
};
