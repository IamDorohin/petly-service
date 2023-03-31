import styled from 'styled-components';

import heroBg from '../../img/header-hero/heroBg.png';
import heroBgTab from '../../img/header-hero/heroBgTab.png';
import heroBgDes from '../../img/header-hero/hero-bg-des.png';
import heart from '../../img//header-hero/hero-heart-des.png';
import heroDogMob from '../../img/header-hero/hero-dog-mob.png';
import heroDogTab from '../../img/header-hero/hero-dog-tab.png';
import heroDogDes from '../../img/header-hero/hero-dog-des.png';
// @media(min - width: 768px) {

// }
export const MainContainer = styled.div`
  width: 320px;
  height: 100%;
  margin: 0 auto;
  padding: 0px 20px 0;

  @media (min-width: 768px) {
    width: 768px;
    padding: 40px 32px 0;
  }
  @media (min-width: 1280px) {
    width: 1280px;
    padding: 46px 16px 0;
  }
`;

export const HomeSection = styled.section`
  background-color: #fdf7f2;
  position: relative;
  display: flex;
  justify-content: center;
  min-height: 512px;
  height: calc(100vh - 56px);

  background-image: url('${heroDogMob}'), url('${heroBg}');
  background-repeat: no-repeat;
  background-size: 280px, cover;
  background-position: center bottom -10px, bottom -40px left 35%;
  overflow: hidden;

  @media (min-width: 768px) {
    min-height: 942px;
    height: calc(100vh - 130px);
    background-image: url('${heroDogTab}'), url('${heroBgTab}');
    background-position: center bottom -100px, bottom -70px left 25%;
    background-size: 636px, cover;
  }

  @media (min-width: 1280px) {
    min-height: 688px;
    height: calc(100vh - 130px);

    background-image: url('${heroDogDes}'), url('${heroBgDes}');
    background-position: right 100px bottom, bottom;
    background-size: 524px, contain;
  }
`;

export const ImagesWrapper = styled.div`
  position: absolute;
  bottom: -4px;

  @media (min-width: 768px) {
    width: 704px;
    padding-left: 13px;
  }

  @media (min-width: 1280px) {
    width: 1240px;
    text-align: right;
    padding-left: 0;

    &::after {
      content: '';
      display: block;
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
