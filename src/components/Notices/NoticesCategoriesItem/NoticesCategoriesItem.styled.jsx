import { styled } from '@mui/material/styles';

export const NoticesItem = styled('li')(({ theme }) => ({
  listStyle: 'none',
  position: 'relative',
  width: '280px',
  height: 'auto',
  marginBottom: '32px',
  backgroundColor: theme.customColors.cardsBackground,

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    width: '336px',
    marginRight: '32px',
  },

  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    width: '288px',
  },
}));

// export const NoticesItem = styled.li`
//   list-style: none;
//   position: relative;
//   width: 280px;
//   height: auto;
//   margin-bottom: 32px;

//   @media screen and (min-width: 768px) {
//     width: 336px;
//     margin-right: 32px;
//   }
//   @media screen and (min-width: 1280px) {
//     width: 288px;
//   }
// `;

export const GlobalContainer = styled('div')(({ theme }) => ({
  width: '100%',
}));

// export const GlobalContainer = styled.div`
//   width: 100%;
// `;

// export const ImageContainer = styled.div`
// /* position: relative;
// width: 280px;
// height: 288px; */
// width: 100%;
// `

export const Image = styled('img')(({ theme }) => ({
  width: '100%',
}));

// export const Image = styled.img`
//   width: 100%;
// `;

export const ImageText = styled('p')(({ theme }) => ({
  position: 'absolute',
  top: '10px',
  width: '158px',
  padding: '6px 0px 7px 20px',
  borderRadius: '0px 40px 40px 0px',
  fontFamily: theme.customFontFamily.searchBar,
  fontWeight: theme.customFontWeight.normalM,
  fontSize: theme.customFontSizes[0],
  lineHeight: 1.25,
  letterSpacing: theme.customLetterSpacing.m,
  backgroundColor: theme.customColors.photoDescription,
  color: theme.customColors.translucentBlack,
}));

// export const ImageText = styled.p`
//   width: 158px;
//   position: absolute;
//   top: 10px;
//   padding: 6px 0px 7px 20px;
//   border-radius: 0px 40px 40px 0px;
//   font-family: 'Inter';
//   font-weight: 500;
//   font-size: 12px;
//   line-height: 1.25;
//   letter-spacing: 0.04em;
//   background-color: rgba(255, 255, 255, 0.6);
//   color: rgb(17, 17, 17);

//   @media screen and (min-width: 768px) {
//     font-family: Manrope;
//   }
// `;

export const LikeBtn = styled('p')(({ theme }) => ({
  position: 'absolute',
  top: '12px',
  right: '12px',
  width: '44px',
  height: '44px',
  backgroundColor: theme.customColors.photoDescription,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '11px 10px',
  cursor: 'pointer',
  borderRadius: '50%',
  border: 'none',
}));

// export const LikeBtn = styled.button`
//   position: absolute;
//   top: 12px;
//   right: 12px;
//   width: 44px;
//   height: 44px;

//   background-color: rgba(255, 255, 255, 0.6);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 11px 10px;
//   cursor: pointer;
//   border-radius: 50%;
//   border: none;
// `;

export const DescriptoinTitle = styled('p')(({ theme }) => ({
  margin: '20px',
  fontFamily: theme.customFontFamily.primary,
  fontStyle: 'normal',
  fontWeight: theme.customFontWeight.bold,
  fontSize: theme.customFontSizes[6],
  lineHeight: '1.35',
  letterSpacing: theme.customLetterSpacing.s,
  color: theme.customColors.primaryFont,
}));

// export const DescriptoinTitle = styled.h3`
//   margin: 20px;
//   font-family: 'Manrope';
//   font-style: normal;
//   font-weight: 700;
//   font-size: 28px;
//   line-height: 1.35;
//   letter-spacing: -0.01em;

//   color: #111111;
// `;
export const DescriptionList = styled('ul')(({ theme }) => ({
  listStyle: 'none',
  marginBottom: '50px',
}));

// export const DescriptionList = styled.ul`
//   list-style: none;
//   margin-bottom: 50px;
// `;

export const DescriptionItem = styled('li')(({ theme }) => ({
  fontFamily: theme.customFontFamily.primary,
  fontStyle: 'normal',
  fontWeight: theme.customFontWeight.normalM,
  fontSize: theme.customFontSizes[2],
  lineHeight: '1.375',
}));

// export const DescriptionItem = styled.li`
//   font-family: 'Manrope';
//   font-style: normal;
//   font-weight: 500;
//   font-size: 16px;
//   line-height: 1.375;
// `;

export const DescriptionText = styled('span')(({ theme }) => ({
  display: 'inline-block',
  minWidth: '90px',
}));

// export const DescriptionText = styled.span`
//   display: inline-block;
//   min-width: 90px;
// `;

export const DescriptionBtn = styled('button')(({ theme }) => ({
  margin: '0 20px 12px 20px',
  width: '248px',
  padding: '8px 28px',
  backgroundColor: theme.customColors.cardsBackground,
  border: '2px solid #f59256',
  borderRadius: '40px',
  fontFamily: theme.customFontFamily.primary,
  fontWeight: theme.customFontWeight.normalM,
  fontSize: theme.customFontSizes[2],
  lineHeight: '1.37',
  letterSpacing: theme.customLetterSpacing.m,
  color: theme.customColors.accent,

  '&:hover': {
    borderColor: theme.customColors.deleteButton,
    color: theme.customColors.deleteButton,
    cursor: 'pointer',
  },
}));

export const DeleteBtn = styled('button')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '14px',
  margin: '0 20px 12px 20px',
  width: '248px',
  padding: '8px 28px',
  backgroundColor: theme.customColors.cardsBackground,
  border: '2px solid #f59256',
  borderRadius: '40px',
  fontFamily: theme.customFontFamily.primary,
  fontWeight: theme.customFontWeight.normalM,
  fontSize: theme.customFontSizes[2],
  lineHeight: '1.37',
  letterSpacing: theme.customLetterSpacing.m,
  color: theme.customColors.accent,

  '&:hover': {
    borderColor: theme.customColors.deleteButton,
    color: theme.customColors.deleteButton,
    cursor: 'pointer',
  },
}));
