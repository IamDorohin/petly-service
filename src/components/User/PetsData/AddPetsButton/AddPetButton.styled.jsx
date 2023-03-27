import { styled } from '@mui/material/styles';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

export const AddPetBtn = styled('button')(({ theme }) => ({
  position: 'absolute',
  right: '0',
  top: '-8px',
  background: 'none',
  border: 'none',
  padding: '0',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  fontWeight: theme.customFontWeight.normalM,
  fontSize: theme.customFontSizes[4],
  lineHeight: theme.customLineHeight[8],
  transition: 'opacity 250ms linear',
  '&:hover': {
    opacity: '0.5',
  },
  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    top: '4px',
  },
  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    top: '0',
  },
}));
export const AddPetBtnIcon = styled(AddRoundedIcon)(({ theme }) => ({
  width: '40px',
  height: '40px',
  padding: '8px',
  marginLeft: '12px',
  borderRadius: theme.customBorderRadius.round,
  color: theme.customColors.cardsBackground,
  background: theme.customColors.accent,
  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    marginLeft: '16px',
  },
}));
