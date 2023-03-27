import { styled } from '@mui/material/styles';

export const PetsDataList = styled('ul')(({ theme }) => ({
  paddingLeft: '0',
}));

export const PetsDataItem = styled('li')(({ theme }) => ({
  listStyle: 'none',
  marginBottom: '20px',
  padding: '16px 20px 40px 20px',
  width: '280px',
  height: '540px',

  boxShadow: theme.customShadow.addButton,
  borderRadius: theme.customBorderRadius.secondary,
  backgroundColor: theme.customColors.cardsBackground,
}));

export const PetsDataImage = styled('img')(({ theme }) => ({
  width: '240px',
  height: '240px',
  marginBottom: '20px',

  borderRadius: theme.customBorderRadius.secondary,
  backgroundColor: theme.customColors.primaryFont,
}));

export const PetsDataInfoWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
}));

export const PetsDataInfoIcon = styled('button')(({ theme }) => ({
  position: 'absolute',
  top: '0',
  right: '0',
  padding: '0',
  width: '20px',
  height: '20px',
  backgroundColor: 'transparent',
  color: theme.customColors.translucentBlack,
  border: 'none',

  '&:hover': {
    color: theme.customColors.accent,
  },
}));

export const PetsDataInfoContent = styled('p')(({ theme }) => ({
  margin: '0',
  marginBottom: '12px',
  fontFamily: theme.customFontFamily.primary,
  fontWeight: theme.customFontWeight.normalM,
  fontSize: theme.customFontSizes[1],
  lineHeight: theme.customLineHeight[4],
  letterSpacing: theme.customLetterSpacing.m,
}));

export const PetsDataInfoTitle = styled('span')(({ theme }) => ({
  margin: '0',
  marginRight: '5px',
  fontFamily: theme.customFontFamily.primary,
  fontWeight: theme.customFontWeight.bold,
  fontSize: theme.customFontSizes[1],
  lineHeight: theme.customLineHeight[4],
  letterSpacing: theme.customLetterSpacing.m,
}));
