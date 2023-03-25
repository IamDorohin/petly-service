import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import LoaderContainer from './Loader.styled';

const Loader = () => {
  return (
    <LoaderContainer>
     <CircularProgress colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}/>
       </LoaderContainer>
  );
};
export default Loader;


