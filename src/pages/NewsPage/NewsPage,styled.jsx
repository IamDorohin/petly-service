import { styled } from '@mui/material/styles'
import Container from '@mui/material/Container';

export const NewsContainer = styled(Container)(({ theme }) => ({
    backgroundColor: theme.customColors.appBackground,
    [theme.breakpoints.up(theme.breakpoints.values.mobileResponsive)]: {
        minWidth: '320px',
        paddingLeft: '16px',
    paddingRight: '16px',
    },
    [theme.breakpoints.up(theme.breakpoints.values.mobileAdaptive)]: {
        maxWidth: '480px',
    },
    [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
        minWidth: '768px',
        maxWidth: '768px',
    },
    [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
        minWidth: '1200px',
        maxWidth: '1200px',
    }
}));