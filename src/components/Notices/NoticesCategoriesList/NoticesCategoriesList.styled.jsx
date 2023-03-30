import { Pagination, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CategoriesList = styled('ul')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  padding: '0',
  flexWrap: 'wrap',
  marginBottom: '-32px',

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    marginRight: '-32px',
  },
}));


export const StackStyled = styled(Stack)(({ theme }) => ({
  marginTop: '30px',
}));

export const Pagi = styled(Pagination)(({ theme }) => ({
  margin: '0 auto',
}));