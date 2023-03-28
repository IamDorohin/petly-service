import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import LoaderContainer from './Loader.styled';

const Loader = () => {
  return (
    <LoaderContainer>
      <CircularProgress />
    </LoaderContainer>
  );
};
export default Loader;
