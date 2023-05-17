import { styled } from '@mui/material/styles';

export const NoticeItem = styled('li')(({ theme }) => ({
  listStyle: 'none',
  position: 'relative',
  width: '280px',
  backgroundColor: theme.customColors.cardsBackground,
  marginBottom: '32px',
  borderRadius: '0px 0px 40px 40px',
  boxShadow: theme.customShadow.secondary,

  '&:hover': {
    transform: 'scale(1.05)',
    transition: 'transform 250ms ease-in-out',
  },

  [theme.breakpoints.between(
    theme.breakpoints.values.tablet,
    theme.breakpoints.values.desktop
  )]: {
    width: '336px',
    marginRight: '32px',
  },

  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    width: '288px',
    marginRight: '32px',
  },
}));

export const NoticeImageWrapper = styled('div')(({ theme }) => ({
  marginBottom: 10,
}));

export const NoticeImage = styled('img')(({ theme }) => ({
  width: '100%',
}));

export const NoticeCategory = styled('p')(({ theme }) => ({
  position: 'absolute',
  margin: '0',
  top: '20px',
  left: '0',
  width: '158px',
  height: '28px',
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

export const NoticeLikeBtn = styled('button', {
  shouldForwardProp: prop => prop !== 'true',
})(({ className, theme }) => ({
  position: 'absolute',
  top: '12px',
  right: '12px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: '44px',
  height: '44px',
  padding: '10px',

  backgroundColor: theme.customColors.photoDescription,
  borderRadius: '50%',
  borderColor: 'transparent',

  cursor: 'pointer',

  '&:hover': {
    transition: 'transform 250ms linear ',
    transform: 'scale(1.2)',
  },

  ...(className && {
    '& .forHoverBtn': { color: theme.customColors.accent },
  }),
}));

export const NoticeInformation = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  height: 200,
}));

export const NoticeButtonsWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  height: 100,
}));

export const NoticeDescription = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '318px',
  paddingRight: '20px',
  paddingLeft: '20px',
  paddingBottom: '12px',

  display: 'flex',
  flexWrap: 'wrap',
}));

export const NoticeTitle = styled('p')(({ theme }) => ({
  margin: '0',
  height: 40,
  marginBottom: '20px',
  textAlign: 'start',
  fontStyle: 'normal',
  fontFamily: theme.customFontFamily.primary,
  fontWeight: theme.customFontWeight.bold,
  fontSize: theme.customFontSizes[6],
  lineHeight: theme.customLineHeight[10],
  letterSpacing: theme.customLetterSpacing.s,
  wordBreak: 'break-all',
  color: theme.customColors.primaryFont,
}));

export const NoticeList = styled('ul')(({ theme }) => ({
  listStyle: 'none',
  paddingLeft: '0',
}));

export const NoticeListItem = styled('li')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '8px',
  fontFamily: theme.customFontFamily.primary,
  fontStyle: 'normal',
  fontWeight: theme.customFontWeight.normalM,
  fontSize: theme.customFontSizes[2],
  lineHeight: theme.customLineHeight[4],

  '&:last-child': {
    marginBottom: '0',
  },
}));

export const NoticeListItemtitle = styled('div')(({ theme }) => ({
  width: '50px',
  marginRight: '40px',
}));

export const NoticeListItemDetails = styled('p')(({ theme }) => ({
  display: 'inline-block',
  margin: '0',
}));

export const NoticeLearnMoreBtn = styled('button', {
  shouldForwardProp: prop => prop !== 'true',
})(({ className, theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '240px',
  marginRight: 'auto',
  marginLeft: 'auto',
  padding: '8px 0',
  border: '2px solid',
  borderColor: theme.customColors.accent,
  borderRadius: theme.customBorderRadius.primary,
  backgroundColor: theme.customColors.cardsBackground,

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

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    width: '248px',
  },

  ...(!className && {
    position: 'absolute',
    bottom: '32px',
    left: '18px',

    [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
      left: '44px',
    },

    [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
      left: '20px',
    },
  }),
}));

export const NoticeDeleteBtn = styled('button')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '240px',
  marginRight: 'auto',
  marginLeft: 'auto',
  marginTop: '12px',
  padding: '8px 0',
  border: '2px solid',
  borderColor: theme.customColors.accent,
  borderRadius: theme.customBorderRadius.primary,
  backgroundColor: theme.customColors.cardsBackground,

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

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    width: '248px',
  },
}));

export const NoticeDeleteBtnText = styled('p')(({ theme }) => ({
  margin: '0',
  padding: '0',
  marginRight: '15px',
}));
