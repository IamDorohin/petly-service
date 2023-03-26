import { styled } from '@mui/material/styles';

export const Grid = styled('ul')(({ theme }) => ({
  listStyle: 'none',
  padding: 0,
  display: 'flex',
  flexWrap: 'wrap',
  rowGap: '40px',

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    rowGap: '60px',
    columnGap: '30px',
  },
}));
