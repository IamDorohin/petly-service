import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export const ErrorText = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up(theme.breakpoints.values.mobileResponsive)]: {
    position: 'absolute',
    display: 'flex',
    bottom: '-15px',
    right: 0,
    margin: 0,
    width: '200px',
    height: '13px',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'theme.customBorderRadius.secondary',
    fontSize: 'theme.customFontSizes[0]',
    backgroundColor: theme.customColors.appBackground,
    color: 'theme.customColors.primaryFont',
  },

  [theme.breakpoints.up(theme.breakpoints.values.mobileAdaptive)]: {
    bottom: '-17px',
    width: '250px',
    height: '15px',
    fontSize: 'theme.customFontSizes[0]',
  },
  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    bottom: '-22px',
    width: '350px',
    height: '20px',
    fontSize: 'theme.customFontSizes[1]',
  },
  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    bottom: '-22px',
    width: '350px',
    height: '20px',
    fontSize: 'theme.customFontSizes[1]',
  },
}));
