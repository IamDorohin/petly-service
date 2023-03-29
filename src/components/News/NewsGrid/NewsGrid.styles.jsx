import { styled } from '@mui/material/styles';

export const Grid = styled('ul')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  listStyle: 'none',
  width: '280px',
  padding: '0',
  flexWrap: 'wrap',
  rowGap: '40px',

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    width: '704px',
    rowGap: '60px',
    columnGap: '30px',
  },

  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    width: '1146px',
    rowGap: '60px',
    columnGap: '30px',
  },
}));
