// import { styled } from '@mui/system';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles'

export const StyledList = styled('ul')(({ theme }) => ({
display: 'flex',
  listStyle: 'none',
padding: 0,
  flexWrap: 'wrap',
  gap: '12px',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingBottom: '100px',
  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    
    gap: '32px',

    },

  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    
    gap: '32px',

    },
}))




export const Item = styled('li')(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
  alignSelf: 'stretch',
      textAlign: 'start',
  flexBasis: '100%',
    height: '192px',

    
    [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
        flexBasis: 'calc((100% - 32px) / 2)',
        height: '246px',
    },
    [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
        flexBasis: 'calc((100% - 64px) / 3)',
        height: '287px',
    }
}));

export const Title = styled('h2')(({ theme }) => ({
    margin: 0,
  marginBottom: '28px',
    marginTop: '42px',
    fontFamily: theme.customFontFamily.primary,
    fontWeight: theme.customFontWeight.bold,
    fontSize: theme.customFontSizes[5],
    lineHeight: theme.customLineHeight[9],
    letterSpacing: theme.customLetterSpacing.s,
  color: theme.customColors.primaryFont,
        
    [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
      marginBottom: '40px',
        marginTop: '88px',
     fontSize: theme.customFontSizes[9],
    },
  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    marginBottom: '60px',
      marginTop: '72px',
  },
}));




export const StyledContainer = styled('div')({
  textAlign: 'center',
});






export const StyledFriend = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: '280px',
  padding: '14px 4px 12px 4px',
  overflow: 'hidden',
  fontFamily: theme.customFontFamily.primary,
  // fontSize: theme.customFontSizes[5],
  // lineHeight: theme.customLineHeight[9],
  // fontWeight: theme.customFontWeight.normalM,
  color: theme.customColors.primaryFont,
  backgroundColor: theme.customColors.cardsBackground,
  borderRadius: theme.customBorderRadius.secondary,
  boxShadow: theme.customShadow.addButton,
      [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
   maxWidth: '336px',
    padding:' 16px 4px',
    // fontSize: theme.customFontSizes[8],
    lineHeight: theme.customLineHeight[9],
    borderRadius: theme.customBorderRadius.primary,
    },
  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    maxWidth: '395px',
  }

}))

export const H3 = styled('h3')(({ theme }) => ({
  fontSize: theme.customFontSizes[0],
  lineHeight: theme.customLineHeight[1],
   fontWeight:theme.customFontWeight.bold,
  textAlign: 'center',
  margin: 0,

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
          fontSize: theme.customFontSizes[2],
  lineHeight: theme.customLineHeight[4],

 
    },
  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
              fontSize: theme.customFontSizes[4],
  lineHeight: theme.customLineHeight[8],

  }

}))

export const FriendsLink = styled(Link)(({ theme }) => ({
  textDecoration:'none',
  color: theme.customColors.accent,
    textDecorationLine: 'underline',
   
}));

export const FriendsBox = styled('div')(({ theme }) => ({
    display: 'flex',
    gap: '12px',
    marginTop: '12px',

}));

export const IMG = styled('img')(({ theme }) => ({
   width: '110px',
    height: '78px',
    borderRadius: theme.customBorderRadius.secondary,
    filter: 'none',
  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
              width: '120px',
      height: '85px',
    },
  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
     width: '158px',
      height: '112px',
  }

}))

export const ImgDiv = styled('div')(({ theme }) => ({
    position: 'relative',
    padding: '39px 55px',
    backgroundColor: 'transparent',
  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
  padding: '42.5px 60px',
    },
  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
  padding: '56px 79px',
  }

}))

export const DL = styled('dl')(({ theme }) => ({
  textAlign: 'left',
  fontSize: theme.customFontSizes[0],
  lineHeight: theme.customLineHeight[1],


    [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    fontSize: theme.customFontSizes[1],
    lineHeight: theme.customLineHeight[3],
  },
  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    fontSize: theme.customFontSizes[2],
    lineHeight: theme.customLineHeight[4],
  }

}))




export const DlDiv = styled('div')(({ theme }) => ({
       marginBottom: '4px',
      transition: 'all 100ms linear',
  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
  marginBottom: '8px',
    },
  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    marginBottom: '12px',
  }
}))

export const Button = styled('button')(({ theme }) => ({
  fontFamily: theme.customFontFamily.primary,
  fontSize: theme.customFontSizes[0],
  lineHeight: theme.customLineHeight[1],
  fontWeight: theme.customFontWeight.normalM,
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  transition: 'all 100ms linear',
  padding: '0',

  '&:hover': {
  color: theme.customColors.accent,
  },


  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    fontSize: theme.customFontSizes[1],
    lineHeight: theme.customLineHeight[3],
  },
  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    fontSize: theme.customFontSizes[2],
    lineHeight: theme.customLineHeight[4],
  }


}))


export const DD = styled('div')(({ theme }) => ({
  margin: 0, 
      transition: 'all 100ms linear',
  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
  marginBottom: '8px',
    },
  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    marginBottom: '12px',
  }
}))

export const TextLink = styled(Link)(({ theme }) => ({
      textDecorationLine: 'underline',
      transition: 'all 100ms linear',
    fontFamily: theme.customFontFamily.primary,
    fontWeight: theme.customFontWeight.normalM,
    fontSize: theme.customFontSizes[0],
    lineHeight: theme.customLineHeight[1],
  color: theme.customColors.primaryFont,

      [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    fontSize: theme.customFontSizes[1],
    lineHeight: theme.customLineHeight[3],
  },
  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    fontSize: theme.customFontSizes[2],
    lineHeight: theme.customLineHeight[4],
  }
}));

//   dd {
//     margin: 0;
//     button {
//       padding: 0;
//       color: #111111;
//     }
//       &:has(a:hover) {
//         color: #ffa726;
//       }
//       button {

//         &:hover {
//           color: #ffa726;
//         }
//         @media screen and (min-width: 768px) {
//           font-size: 24px;
//           line-height: 1.366;
//         }
//         @media screen and (min-width: 1280px) {
//           font-size: 36px;
//           line-height: 1.366;
//         }
//       }
//     }
//     a {
//       text-decoration-line: underline;
//       color:#111111;
//       transition: all 100ms linear;
//       &:hover {
//         color: #ffa726;
//       }
//     }
//   }
//   
//   }


export const StyledModal = styled('div')`
  box-shadow: 4px 4px 8px rgba(255, 255, 255, 0.25);
  padding: 12px 10px;
  position: absolute;
  width: 120px;
  font-family: "Manrope";
  font-weight: 500;
  font-size: '24px';
  line-height: 1.33;
  color: #111111;
  border: 1px solid #ffa726;
  border-radius: 8px;
  background-color: #FFFFFF;
  li {
    display: flex;
    justify-content: space-between;
    :not(:last-child) {
      margin-bottom: 4px;
    }
  }
`;









