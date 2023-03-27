import { styled } from '@mui/material/styles';

export const Card = styled('div')(({ theme }) => ({
  marginLeft: 'auto',
  marginRight: 'auto',
  borderRadius: theme.customBorderRadius.findPetCard,
  backgroundColor: theme.customColors.cardsBackground,
  width: '280px',
  padding: '20px',
  boxShadow: theme.customShadow.primary,
  justifyContent: 'center',
  alignItems: 'center',

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    width: '608px',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '30px 60px 30px 60px',
  },
}));

export const Dog = styled('img')(({ theme }) => ({
  width: '120px',
  height: 'auto',
  filter: 'drop-shadow(2px 3px 3px rgba(49, 21, 4, 0.7))',
}));

export const Woof = styled('h2')(({ theme }) => ({
  margin: 0,
  marginTop: '20px',
  marginBottom: '20px',
  fontFamily: theme.customFontFamily.primary,
  fontWeight: theme.customFontWeight.bold,
  fontSize: theme.customFontSizes[8],
  lineHeight: theme.customLineHeight[9],
  letterSpacing: theme.customLetterSpacing.s,
  color: theme.customColors.primaryFont,
}));

export const Text = styled('p')(({ theme }) => ({
  margin: 0,
  fontFamily: theme.customFontFamily.primary,
  fontWeight: theme.customFontWeight.normalM,
  fontSize: theme.customFontSizes[3],
  lineHeight: theme.customLineHeight[4],
  color: theme.customColors.primaryFont,
}));
