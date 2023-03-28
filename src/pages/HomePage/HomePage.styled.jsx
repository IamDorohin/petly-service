import styled from 'styled-components';

import heroBg from '../../img/header-hero/heroBg.png';
import heroBgTab from '../../img/header-hero/heroBgTab.png';
import heroBgDes from '../../img/header-hero/hero-bg-des.png';
import heart from '../../img//header-hero/hero-heart-des.png';
// @media(min - width: 768px) {

// }
export const MainContainer = styled.div`

  width: 320px;
  height: 100%
  margin: 0 auto;
  padding: 60px 20px 0;

  @media(min-width: 768px) {
  width: 768px;
  padding: 88px 32px 0;
}
    @media(min-width: 1280px) {
      width: 1280px;
  padding: 92px 16px 0;
}
`;

export const HomeSection = styled.section`
  background-color: #fdf7f2;
  position: relative;
  width: 100vw;
  display: flex;
  justify-content: center;
  height: calc(100vh - 56px);
  background-image: url('${heroBg}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom -70px left 35%;
  overflow: hidden;

  @media (min-width: 768px) {
    height: calc(100vh - 83.2px);
    background-image: url('${heroBgTab}');
    background-position: bottom -70px left 25%;
    background-size: cover;
  }

  @media (min-width: 1280px) {
    height: calc(100vh - 79.2px);

    background-image: url('${heroBgDes}');
    background-position: bottom;
    background-size: 1400px;
  }
`;

export const ImagesWrapper = styled.div`
  position: absolute;
  bottom: -4px;

    @media(min-width: 768px) {
      width: 704px;
      padding-left: 13px;
    }

    @media(min-width: 1280px) {
        width: 1240px;
        text-align: right;
        padding-left: 0;
        
        &::after {
    content: '';
    display block;
    position: absolute;
    width: 95px;
    height: 95px;
      background-image: url('${heart}');
  background-repeat: no-repeat;
  background-size: contain;

  top: -20px;
  left: 670px;

  }
    }
`;

export const Image = styled.img`
  position: relative;

  width: 280px;

  @media (min-width: 768px) {
    width: 100%;
  }

  @media (min-width: 1280px) {
    width: 524px;
  }
`;

export const HomeTitle = styled.h1`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  color: #000000;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 68px;
    line-height: 100px;
  }

  @media (min-width: 1280px) {
    display: block;
    width: 590px;
  }
`;

export const HomeWrapp = styled.div``;
