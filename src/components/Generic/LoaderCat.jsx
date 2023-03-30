import catPng from '../../img/cat-loader.gif';
import { Box } from '@mui/material';

export const LoaderCat = ({ size, space = 0 }) => {
  return (
    <Box
      sx={{
        paddingTop: space,
        paddingBottom: space,
        width: '100%',
        height: '100%',
        display: 'flex',
        marginTop: '60px',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box sx={{ width: size, height: size }}>
        <img style={{ width: '100%' }} src={catPng} alt="" />
      </Box>
    </Box>
  );
};
