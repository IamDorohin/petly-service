import {
  SearchInput,
  FindButton,
  Container,
  DeleteButton,
} from './Search.styled';
import SearchIcon from '@mui/icons-material/Search';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import React, { useState, useEffect } from 'react';

export default function NewsSearch({ saveFilter }) {
  const [inputData, setInputData] = useState('');

  const handleFilter = e => {
    setInputData(e.target.value);
  };
  const submitFilter = () => {
    saveFilter(inputData);
  };

  const clearFilter = () => {
    setInputData('');
  };

  useEffect(() => {
    const onKeyDown = e => {
      if (e.keyCode === 13) {
        saveFilter(inputData);
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [inputData, saveFilter]);

  return (
    <Container component="form">
      <SearchInput
        type="text"
        value={inputData}
        onChange={handleFilter}
        placeholder="Search"
      />

      <FindButton component="button" type="submit" onClick={submitFilter}>
        <SearchIcon />
      </FindButton>

      {inputData !== '' && (
        <DeleteButton component="button" onClick={clearFilter}>
          <HighlightOffIcon />
        </DeleteButton>
      )}
    </Container>
  );
}
