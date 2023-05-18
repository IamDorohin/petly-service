import { useState } from 'react';
import * as SC from './NoticesSearch.styled';
import SearchIcon from '@mui/icons-material/Search';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export const NoticesSearch = ({ searchParamsQuery, setSearchParamsQuery }) => {
  const [currentQuery, setCurrentQuery] = useState('');

  const handleSearchQueryChange = event => {
    if (event.currentTarget.value === '') {
      setSearchParamsQuery({ ...searchParamsQuery, search: '' });
    }
    setCurrentQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (currentQuery.trim() === '') {
      alert('Enter your search request');
      return;
    }

    setSearchParamsQuery({ ...searchParamsQuery, page: 1 });
    setSearchParamsQuery({ ...searchParamsQuery, search: currentQuery });
  };

  const clearSearchBar = () => {
    setSearchParamsQuery({ ...searchParamsQuery, search: '' });
    setCurrentQuery('');
  };

  return (
    <SC.SearchContainer>
      <SC.Form onSubmit={handleSubmit}>
        {currentQuery !== '' && (
          <SC.DeleteButton component="button" onClick={clearSearchBar}>
            <HighlightOffIcon />
          </SC.DeleteButton>
        )}
        <SC.Input
          type="text"
          placeholder="Search"
          value={currentQuery}
          onChange={handleSearchQueryChange}
        />
        <SC.FindButton component="button" type="submit" onClick={handleSubmit}>
          <SearchIcon />
        </SC.FindButton>
      </SC.Form>
    </SC.SearchContainer>
  );
};
