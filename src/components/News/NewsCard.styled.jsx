import { styled } from '@mui/material/styles'

export const Card = styled('li')(({ theme }) => ({
    flexBasis: '100%',
    [theme.breakpoints.up(theme.breakpoints.values.mobileResponsive)]: {
    
    },
    [theme.breakpoints.up(theme.breakpoints.values.mobileAdaptive)]: {
    
    },
    [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    flexBasis: 'calc((100% - 30px) / 2)',
    },
    [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    flexBasis: 'calc((100% - 60px) / 3)',
    }
}));





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