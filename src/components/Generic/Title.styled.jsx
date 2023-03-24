import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

export const H1Title = styled(Typography)(({ theme }) => ({
  fontFamily: theme.customFontFamily.primary,
  fontWeight: theme.customFontWeight.bold,
  color: theme.customColors.primaryFont,

  [theme.breakpoints.up(theme.breakpoints.values.mobileResponsive)]: {
    fontSize: theme.customFontSizes[5],
    lineHeight: theme.customLineHeight[9],
    marginBottom: '28px',
  },
  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    fontSize: theme.customFontSizes[9],
    lineHeight: theme.customLineHeight[15],
    marginBottom: '40px',
  },
}));
