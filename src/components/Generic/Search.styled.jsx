import { styled } from '@mui/material/styles'

export const SearchInput = styled('input')(({ theme }) => ({
    backgroundColor: theme.customColors.cardsBackground,
    fontFamily: theme.customFontFamily.searchBar,
    fontWeight: theme.customFontWeight.normalM,
    
    [theme.breakpoints.up(theme.breakpoints.values.mobileResponsive)]: {
        width: '100%',
        height: '40px',
        fontSize: theme.customFontSizes[2],
        lineHeight: theme.customLineHeight[4],
    },
    [theme.breakpoints.up(theme.breakpoints.values.mobileAdaptive)]: {
    
    },
    [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
        width: '608px',
        fontSize: theme.customFontSizes[4],
        lineHeight: theme.customLineHeight[8],
    },
    [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    
    }
}));


// font-size: 20px;
// line-height: 24px;
// display: flex;
// align-items: center;
// letter-spacing: 0.04em;

// color: #535353;



// import { styled } from '@mui/material/styles'

// export const SearchInput = styled('input')(({ theme }) => ({
    
//     [theme.breakpoints.up(theme.breakpoints.values.mobileResponsive)]: {
    
//     },
//     [theme.breakpoints.up(theme.breakpoints.values.mobileAdaptive)]: {
    
//     },
//     [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    
//     },
//     [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    
//     }
// }));