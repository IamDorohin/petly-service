import { styled } from '@mui/material/styles';

export const Ul = styled('ul')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  padding: '0',
  flexWrap: 'wrap',

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    marginBottom: '-32px',
    marginRight: '-32px',
  },
}));

// export const Ul = styled.ul`
//   display: flex;
//   justify-content: center;
//   padding: 0;
//   flex-wrap: wrap;
//   @media screen and (min-width: 768px) {
//     margin-bottom: -32px;
//     margin-right: -32px;
//   }
// `;
