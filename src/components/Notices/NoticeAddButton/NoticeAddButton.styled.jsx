import { styled } from '@mui/material/styles';

export const ContainerAddBtn = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  margin: '0',
  padding: '0',
  gap: '12px',
  color: theme.customColors.homeHeroTitleFont,
}));

// export const ContainerAddBtn = styled.div`
//   position: relative;
//   display: flex;
//   /* flex-wrap: wrap; */
//   align-items: center;
//   margin: 0;
//   padding: 0;
//   gap: 12px;
//   color: black;
// `;

export const TitleAddBtn = styled('p')(({ theme }) => ({
  margin: 0,
  display: 'inline-block',
  paddingTop: '12px',
  paddingRight: '0',
  paddingBottom: '12px',
  paddingLeft: '0',
  width: '63px',
  fontFamily: theme.customFontFamily.primary,
  fontStyle: 'normal',
  fontWeight: theme.customFontWeight.normalM,
  fontSize: theme.customFontSizes[4],
  lineHeight: 1.35,
  color: theme.customColors.primaryFont,

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    display: 'none',
  },
}));

// export const TitleAddBtn = styled.p`
//   margin: 0;
//   display: inline-block;
//   padding: 12px 0;
//   width: 63px;
//   font-family: 'Manrope';
//   font-style: normal;
//   font-weight: 500;
//   font-size: 20px;
//   line-height: 1.35;

//   color: #111111;

//   @media screen and (max-width: 767px) {
//     display: none;
//   }
// `;

export const AddButton = styled('button')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: theme.customColors.accent,
  width: '44px',
  height: '44px',
  borderRadius: '50%',
  border: 'none',

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    position: 'fixed',
    right: '20px',
    bottom: '100px',
    zIndex: '1',
    width: '80px',
    height: '80px',
    transition: 'all 250ms ease 0s',
  },
}));

// export const AddButton = styled.button`
//   display: flex;
//   align-items: center;
//   background-color: #f59256;
//   width: 44px;
//   height: 44px;
//   border-radius: 50%;
//   border: none;

//   @media screen and (max-width: 767px) {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;

//     position: fixed;
//     right: 20px;
//     bottom: 100px;
//     z-index: 1;
//     width: 80px;
//     height: 80px;
//     transition: all 250ms ease 0s;
//   }
// `;

export const TitleAddBtnForMobile = styled('p')(({ theme }) => ({
  margin: '0',
  fontStyle: 'normal',
  fontFamily: theme.customFontFamily.primary,
  fontWeight: theme.customFontWeight.normalM,
  fontSize: theme.customFontSizes[0],
  lineHeight: theme.customLineHeight[1],
  color: theme.customColors.accentFont,

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    display: 'none',
  },
}));

// export const TitleAddBtnForMobile = styled.p`
//   margin: 0;
//   font-family: Manrope;
//   font-style: normal;
//   font-weight: 500;
//   font-size: 12px;
//   line-height: 16px;
//   color: rgb(255, 255, 255);

//   @media screen and (min-width: 768px) {
//     display: none;
//   }
// `;
