import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const FirsModalContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '280px',
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'no-wrap',
  flexDirection: 'column',
  padding: '20px 0',
  backgroundColor: theme.customColors.accentFont,
  borderRadius: theme.customBorderRadius.secondary,
  boxShadow: theme.customShadow.popUp,
}));

export const ModalContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  textAlign: 'center',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '300px',
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'no-wrap',
  flexDirection: 'column',
  padding: '0 5px',
  backgroundColor: theme.customColors.accentFont,
  borderRadius: theme.customBorderRadius.secondary,
  boxShadow: theme.customShadow.popUp,
  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    width: '700px',
  },
  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    width: '1000px',
  },
}));

export const Grid = styled('ul')(({ theme }) => ({
  padding: 0,
  margin: 0,
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '10px',
  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {},
  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {},
}));

export const Item = styled('li')(({ theme }) => ({
  textAlign: 'center',
  listStyleType: 'none',
  borderRadius: '40px',
  flexBasis: 'calc((100% - 30px) / 4)',
  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {},
  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    flexBasis: 'calc((100% - 60px) / 7)',
  },
}));

export const Photo = styled('img')(({ theme }) => ({
  width: '100%',
  borderRadius: '20px',

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {},
  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {},
}));

export const Name = styled('p')(({ theme }) => ({
  margin: 0,

  fontFamily: theme.customFontFamily.primary,
  fontWeight: theme.customFontWeight.normalS,
  fontSize: '12px',
  lineHeight: theme.customLineHeight[2],
  color: theme.customColors.primaryFont,

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    fontSize: '16px',
    lineHeight: theme.customLineHeight[5],
  },
  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {},
}));
