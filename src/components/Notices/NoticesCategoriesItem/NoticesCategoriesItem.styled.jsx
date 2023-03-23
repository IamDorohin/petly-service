import { styled } from '@mui/material/styles';

export const NoticesItem = styled('li')(({ theme }) => ({
  listStyle: 'none',
  position: 'relative',
  width: '280px',
  height: 'auto',
  marginBottom: '32px',
  backgroundColor: theme.customColors.cardsBackground,
  borderBottomLeftRadius: '40px',
  borderBottomRightRadius: '40px',
  paddingBottom: '32px',

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    width: '336px',
    marginRight: '32px',
  },

  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    width: '288px',
  },
}));

export const GlobalContainer = styled('div')(({ theme }) => ({
  width: '100%',
}));

export const Image = styled('img')(({ theme }) => ({
  width: '100%',
  marginBottom: '20px',
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
  margin: '0 20px 0 20px',
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
