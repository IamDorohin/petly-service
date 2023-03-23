import { styled } from '@mui/material/styles';

export const SearchContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '42px',
  marginBottom: '40px',

  [theme.breakpoints.up(theme.breakpoints.values.mobileResponsive)]: {
    paddingTop: '28px',
  },

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    paddingTop: '88px',
  },

  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    paddingTop: '60px',
  },
}));

// export const SearchContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding-top: 42px;
//   margin-bottom: 40px;
//   @media screen and (max-width: 768px) {
//     margin-bottom: 28px;
//   }

//   @media screen and (min-width: 768px) {
//     padding-top: 88px;
//   }
//   @media screen and (min-width: 1280px) {
//     padding-top: 60px;
//   }
// `;

export const Title = styled('h2')(({ theme }) => ({
  fontFamily: theme.customFontFamily.primary,
  fontWeight: theme.customFontWeight.bold,
  fontSize: theme.customFontSizes[5],
  lineHeight: 1.37,
  color: theme.customColors.primaryFont,
  marginBottom: '28px',

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    fontSize: theme.customFontSizes[9],
    marginBottom: '40px',
  },

  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    paddingTop: '60px',
  },
}));

// export const Title = styled.h2`
//   font-family: Manrope;
//   font-weight: 700;
//   font-size: 24px;
//   line-height: 1.37;
//   color: #111111;
//   margin-bottom: 28px;
//   @media screen and (min-width: 768px) {
//     font-size: 48px;
//     margin-bottom: 40px;
//   }
// `;

export const Form = styled('form')(({ theme }) => ({
  position: 'relative',
  display: 'flex',

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    maxWidth: '608px',
  },
}));

// export const Form = styled.form`
//   width: 100%;
//   display: flex;
//   position: relative;

//   @media screen and (min-width: 768px) {
//     max-width: 608px;
//   }
// `;

export const Input = styled('input')(({ theme }) => ({
  width: '280px',
  height: '40px',
  padding: '10px 12px',
  borderRadius: '20px',
  border: 'none',
  backgroundColor: theme.customColors.cardsBackground,
  boxShadow: theme.customShadow.secondary,
  fontWeight: theme.customFontWeight.normalM,
  fontSize: theme.customFontSizes[2],
  lineHeight: '0.7',
  letterSpacing: '4%',

  '&::placeholder': {
    color: theme.customColors.searchBarPlaceholder,
  },

  '&:focus': {
    outline: 'none',
  },

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    width: '608px',
    height: '44px',
    padding: '13px 14px',
  },

  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {},
}));

// export const Input = styled.input`
//   width: 100%;
//   padding: 10px 15px;
//   border-radius: 20px;
//   border: none;
//   background-color: #ffffff;
//   box-shadow: 4px 7px 14px rgba(49, 21, 4, 0.07);
//   font-weight: 500;
//   font-size: 16px;
//   line-height: 0.7;
//   letter-spacing: 4%;
//   ::placeholder {
//     color: #535353;
//   }
//   :focus {
//     outline: none;
//   }
// `;

export const Button = styled('button')(({ theme }) => ({
  position: 'absolute',
  bottom: '4px',
  right: '15px',
  padding: '0',
  border: 'none',
  backgroundColor: 'transparent',

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    bottom: '6px',
  },
}));

// export const Button = styled.button`
//   position: absolute;
//   bottom: 6px;
//   right: 15px;
//   border: none;
//   background-color: transparent;
// `;
