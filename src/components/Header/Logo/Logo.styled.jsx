import styled from 'styled-components';

export const StyledLogoContainer = styled.div`
  width: 82px;

  @media (min-width: 768px) {
    width: 94px;
  }
  @media (min-width: 1280px) {
    margin-right: 80px;
  }
`;

export const StyledLogo = styled.a`
  color: rgba(17, 17, 17, 1);
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  letter-spacing: 0.07em;
  text-decoration: none;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`;

export const StyledLogoT = styled.a`
  color: rgba(245, 146, 86, 1);
`;
