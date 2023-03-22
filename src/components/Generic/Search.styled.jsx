import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton';


export const SearchInput = styled('input')(({ theme }) => ({
    backgroundColor: theme.customColors.cardsBackground,
    fontFamily: theme.customFontFamily.searchBar,
    fontWeight: theme.customFontWeight.normalM,
    paddingLeft: '15px',
    paddingRight: '90px',
    color: theme.customColors.searchBarPlaceholder,
    letterSpacing: theme.customLetterSpacing.m,
    borderRadius: theme.customBorderRadius.secondary,
    boxShadow: theme.customShadow.secondary,
    borderColor: 'transparent',
    width: '100%',
    height: '40px',
    
    [theme.breakpoints.up(theme.breakpoints.values.mobileResponsive)]: {
        
        fontSize: theme.customFontSizes[2],
        lineHeight: theme.customLineHeight[4],
    },
    [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
        width: '608px',
        height: '44px',
        fontSize: theme.customFontSizes[4],
        lineHeight: theme.customLineHeight[8],
    },
}));


export const FindButton = styled(IconButton)(({ theme }) => ({
    width: '20px',
    height: '20px',
    color: theme.customColors.primaryFont,
    position: 'absolute',
    top: 10,
    right: 15,
    [theme.breakpoints.up(theme.breakpoints.values.mobileResponsive)]: {
    
    },
    [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    width: '24px',
    height: '24px',  
    },
}));

export const DeleteButton = styled(IconButton)(({ theme }) => ({
    width: '20px',
    height: '20px',
    color: theme.customColors.primaryFont,
    position: 'absolute',
    top: 10,
    right: 55,
    [theme.breakpoints.up(theme.breakpoints.values.mobileResponsive)]: {
    
    },
    [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    width: '24px',
    height: '24px',  
    },
}));


export const Container = styled('div')(({ theme }) => ({
        marginLeft: 'auto',
        marginRight: 'auto',
        position: 'relative',
        marginBottom: '40px',
    [theme.breakpoints.up(theme.breakpoints.values.mobileResponsive)]: {
    width: '100%',
        height: '40px',
    
    },
    [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
        width: '608px',
        height: '44px',
        marginBottom: '60px',
    },
}));


