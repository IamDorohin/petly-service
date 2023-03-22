import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';

export const OverallContainer = styled('div')(({ theme }) => ({
  position: 'relative',
}));

// export const OverallContainer = styled.div`
//   position: relative;
// `

export const CategoriesList = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  listStyle: 'none',
  margin: '0',
  padding: '0',
  gap: '12px',
}));

// export const CategoriesList = styled.ul`
//   display: flex;
//   flex-wrap: wrap;
//   margin: 0;
//   padding: 0;
//   gap: 12px;

//   list-style: none;
// `;

export const CategoriesItem = styled('li')(({ theme }) => ({
  padding: '8px 28px',
  backgroundColor: theme.customColors.accentFont,
  border: '2px solid theme.customColors.accent',
  borderRadius: '40px',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: theme.customColors.accent,
  },

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    padding: '10px 28px',
  },
}));

// export const CategoriesItem = styled.li`
//  padding: 8px 28px;
//   background-color: #ffffff;
//   border: 2px solid #f59256;
//   border-radius: 40px;
// cursor: pointer;

//   &:hover {
//  background-color: #F59256;

//      }

//   @media screen and (min-width: 768px) {
//     padding: 10px 28px;

//   }
// `

export const NavLinkStyled = styled(NavLink)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.customColors.primaryFont,
  fontFamily: theme.customFontFamily.primary,
  fontSize: theme.customFontSizes[1],
  letterSpacing: theme.customLetterSpacing.m,
  lineHeight: 1.35,

  '&.Mui-active': {
    color: theme.customColors.cardsBackground,
    backgroundColor: theme.customColors.accent,
  },

  '&.CategoriesItem': {
    '&:hover': {
      color: theme.customColors.cardsBackground,
    },
  },

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    fontSize: theme.customFontSizes[4],
  },
}));

// export const NavLinkStyled = styled(NavLink)`
//   text-decoration: none;
//   color: #111111;

//   &.active {
//     color: white;
//     background-color: #f59256;
//   }
//   ${CategoriesItem}:hover & {
//     color: #ffffff;
//   }

//   font-family: Manrope;

//   font-size: 14px;
//   /* font-weight: 500; */
//   letter-spacing: 0.04em;
//   line-height: 1.35;

//   @media screen and (min-width: 768px) {
//     font-size: 20px;
//   }
// `;
