import styled from 'styled-components';

export const ModalBoxNotice = theme => ({
  overflow: 'scroll',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '280px',
  height: 'auto',
  minHeight: '80vh',
  bgcolor: '#FFFFFF',
  borderRadius: '20px',
  boxShadow: '7px 4px 14px rgba(0, 0, 0, 0.11)',
  p: 4,
  [theme.breakpoints.up('mobileResponsive')]: {
    blockSize: 'auto',
    minHeight: '530px',
    padding: '60px 20px 40px 20px',
  },

  [theme.breakpoints.up('tablet')]: {
    width: '704px',
    minHeight: '530px',
    height: 'auto',
    padding: '32px 20px 32px 20px',
  },
  [theme.breakpoints.up('desktop')]: {},
});

export const FontButtonNotice = theme => ({
  fontFamily: theme.customFontFamily.primary,
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '14px',
  textTransform: 'none',
  color: theme.customColors.primaryFont,
  textAlign: 'start',
  width: '100%',
  lineHeight: '19px',
  letterSpacing: '-0.01em',
  [theme.breakpoints.up('tablet')]: {
    fontSize: '16px',
    lineHeight: '22px',
  },
});

export const TextLabel = theme => ({
  display: 'flex',
  justifyContent: 'center',
  fontWeight: '500',
  fontFamily: 'Manrope',
  fontStyle: 'normal',
  fontSize: '12px',
  textTransform: 'none',
  lineHeight: '16px',
  minWidth: '20px',
  color: '#111111',
  width: 'auto',
});

export const Text = theme => ({
  fontWeight: '600',
  fontFamily: 'Manrope',
  fontStyle: 'normal',
  fontSize: '12px',
  textTransform: 'none',
  lineHeight: '16px',
  mb: '8px',
  minWidth: '115px',
  [theme.breakpoints.up('tablet')]: {
    fontSize: '16px',
    lineHeight: '22px',
    miwidth: '115px',
  },
});

export const TextT = theme => ({
  fontWeight: '500',
  fontFamily: 'Manrope',
  fontStyle: 'normal',
  fontSize: '14px',
  textTransform: 'none',
  //   minWidth: '115px',
  lineHeight: '19px',
  width: 'auto',
  [theme.breakpoints.up('tablet')]: {
    fontSize: '16px',
    lineHeight: '22px',
  },
});

export const TitleNotice = theme => ({
  mt: '16px',
  fontWeight: '700',
  fontFamily: 'Manrope',
  fontStyle: 'normal',
  fontSize: '24px',
  textTransform: 'none',
  lineHeight: '33px',
  [theme.breakpoints.up('tablet')]: {
    fontSize: '28px',
    lineHeight: '38px',
    mt: '0px',
    mb: '20px',
  },
});

export const Ul = styled.ul(({ theme }) => ({
  listStyleType: 'none',
  display: 'flex',
  flexDirection: 'column',
  padding: '0',
}));

export const L = styled.li(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
}));

export const B = theme => ({
  position: 'relative',
  width: '100',
  height: '240px',
  backgroundColor: 'rgba(245, 146, 86, 0.5)',
  borderRadius: '0px 0px 40px 40px',
  [theme.breakpoints.up('tablet')]: {
    width: '288px',
    height: '328px',
    backgroundColor: 'rgba(245, 146, 86, 0.5)',
    marginRight: '20px',
    mb: '28px',
  },
});

export const Div = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
export const DivBox = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
  }
`;
export const ButtonBoxNotice = theme => ({
  mt: '40px',
  [theme.breakpoints.up('tablet')]: {
    width: '335px',
    display: 'flex',
    height: '100%',
  },
});

export const GGGG = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const CategoryText = styled.div`
  position: absolute;
  top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  background: rgba(255, 255, 255, 0.6);
  width: 158px;
  height: 28px;
  padding: 6px 0px 6px 0px;
  backdrop-filter: blur(50px);
  @media only screen and (min-width: 768px) {
  }
`;

export const NoticeImg = styled.img`
  object-fit: cover;
  border-radius: 0px 0px 40px 40px;
  width: 100%;
  height: 100%;
`;
