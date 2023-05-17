import { styled } from '@mui/material/styles';

export const Wrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'start',
  padding: '0 12px 0 16px',

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    padding: '0 52px 0 12px',
  },
  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    padding: '0',
  },
}));

export const UserDataListContainer = styled('ul')(({ theme }) => ({
  position: 'relative',
  paddingLeft: 0,
  margin: 0,
  width: '100%',

  // [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
  //   padding: '40px 52px 80px 12px',
  // },
  // [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
  //   padding: '0',
  // },
}));

export const UserDataListItem = styled('li')(({ theme }) => ({
  listStyle: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  width: '100%',
  fontFamily: theme.customFontFamily.primary,
  fontWeight: theme.customFontWeight.normalS,
  fontSize: theme.customFontSizes[0],
  color: theme.customColors.primaryFont,
  lineHeight: theme.customLineHeight[1],

  '&:not(:last-child)': {
    marginBottom: '8px',
  },

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    fontSize: theme.customFontSizes[3],
    lineHeight: theme.customLineHeight[6],
    '&:not(:last-child)': {
      marginBottom: '10px',
    },
  },
}));

export const UserDataListItemName = styled('p')(({ theme }) => ({
  padding: 0,
  margin: 0,
}));

export const UserDataListWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
}));

export const UserDataListContent = styled('p')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: '149px',
  height: '20px',
  margin: '0',
  marginRight: '9px',

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    width: '160px',
    marginRight: '52px',
  },
  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    width: '180px',
  },
}));

export const UserDataListInput = styled('input')(({ theme }) => ({
  width: '159px',
  height: '20px',
  marginRight: '9px',
  border: '1px solid rgba(245, 146, 86, 0.5)',
  borderRadius: theme.customBorderRadius.primary,
  backgroundColor: theme.customColors.appBackground,
  paddingLeft: '12px',
  fontSize: '16px',

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    width: '216px',
    height: '26px',
  },
  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    width: '236px',
    height: '26px',
  },
}));

export const UserDataPencilIcon = styled('button')(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0',
  width: '20px',
  height: '20px',
  border: 'none',
  borderRadius: theme.customBorderRadius.round,
  color: theme.customColors.accent,
  backgroundColor: theme.customColors.appBackground,

  '&:disabled': {
    '&:hover': {
      borderColor: 'transparent',
    },
    '& svg': {
      color: theme.customColors.primaryFont,
    },
  },

  '&:hover': {
    border: '1px solid',
    borderColor: theme.customColors.accent,
  },
  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    width: '32px',
    height: '32px',
  },
}));

export const UserDataError = styled('p')(({ theme }) => ({
  position: 'absolute',
  top: '19px',
  padding: '0',
  margin: '0',
  fontSize: '9px',
  color: theme.customColors.errorNotif,

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    top: '30px',
    left: '12px',
    fontSize: '11px',
  },
}));
