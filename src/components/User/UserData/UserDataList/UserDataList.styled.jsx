import { styled } from '@mui/material/styles';

export const UserDataListContainer = styled('ul')(({ theme }) => ({
  position: 'relative',
  padding: '0 14px',
}));

export const UserDataListItem = styled('li')(({ theme }) => ({
  listStyle: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  marginBottom: '12px',
  fontFamily: theme.customFontFamily.primary,
  fontWeight: theme.customFontWeight.normalS,
  fontSize: theme.customFontSizes[0],
}));

export const UserDataListWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}));

export const UserDataListContent = styled('p')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: '149px',
  height: '20px',
  margin: '0',
  marginRight: '9px',
}));

export const UserDataListInput = styled('input')(({ theme }) => ({
  width: '159px',
  height: '20px',
  marginRight: '9px',
  border: '1px solid rgba(245, 146, 86, 0.5)',
  borderRadius: theme.customBorderRadius.primary,
  backgroundColor: theme.customColors.appBackground,
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

  '&:hover': {
    border: '1px solid',
    borderColor: theme.customColors.accent,
  },
}));
