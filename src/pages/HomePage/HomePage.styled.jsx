import styled from 'styled-components';

import heroBgMob from '../../img/header-hero/hero-bg-mob.png';
import heroBgMob2x from '../../img/header-hero/hero-bg-mob-2x.png';

import heroBgTab from '../../img/header-hero/hero-bg-tab.png';
import heroBgTab2x from '../../img/header-hero/hero-bg-tab-2x.png';

import heroBgDes from '../../img/header-hero/hero-bg-des.png';
import heroBgDes2x from '../../img/header-hero/hero-bg-des-2x.png';

import heroHeartDes from '../../img/header-hero/hero-heart-des.png';
import heroHeartDes2x from '../../img/header-hero/hero-heart-des-2x.png';

export const MainContainer = styled.div`
  width: 320px;
  margin: 0 auto;
  padding: 0 20px;
  height: -webkit-fill-available;
  @media (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
  }
  @media (min-width: 1280px) {
    width: 1280px;
    padding: 0 16px;
  }
`;

export const HomeSection = styled.section`
  position: absolute;
  z-index: -1;
  bottom: 0;
  left: 0;
  background-image: url('${heroBgMob}');
  background-repeat: no-repeat;
  background-position: center 0;
  background-size: cover;
  padding-top: 60px;
  width: -webkit-fill-available;
  height: calc(100% - 56px);
  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url('${heroBgMob2x}');
  }
  @media screen and (min-width: 768px) {
    background-image: url('${heroBgTab}');
    padding-top: 90px;
    width: -webkit-fill-available;
    height: calc(100% - 56px);
    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('${heroBgTab2x}');
    }
  }
  @media screen and (min-width: 1280px) {
    width: -webkit-fill-available;
    height: calc(100% - 69px);
    background-size: contain;
    background-position: bottom;
    background-image: url('${heroBgDes}');
    padding-top: 60px;
    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('${heroBgDes2x}');
    }
  }
`;

export const Image = styled.img`
  min-width: 320px;
  height: calc(100vh - 250px);
  @media screen and (min-width: 768px) {
    max-width: 645px;
    height: calc(100vh - 440px);
    margin-left: 61px;
    margin-right: 62px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 590px;
    height: calc(100vh - 200px);
  }
`;

export const HomeTitle = styled.h1`
z-index: 1;
  color: rgba(17, 17, 17, 1);
  font-weight: 700;
  font-size: 32px;
  line-height: 1.38;
  margin-bottom: 58px;
  width: 280px;
  @media screen and (min-width: 768px) {
    width: 620px;
    height: 200px;
    font-size: 68px;
    line-height: 1.47;
    padding-left: 32px;
    margin-bottom: 118px;
    text-align: left;
  }
  @media screen and (min-width: 1280px) {
    width: 658px;
    height: 200px;
    padding-left: 16px;
    text-align: left;
    margin-top: 30px;
  }
`;

export const HomeWrapp = styled.div`
  height: -webkit-fill-available;
  @media screen and (min-width: 1280px) {
    display: flex;
  }
`;

export const ImagesWrapper = styled.div`
  position: absolute;
  z-index: -1;
  bottom: -4px;
  left: 5%;
  @media screen and (min-width: 768px) {
    position: absolute;
    bottom: -4px;
    left: 10%;
  }
  @media screen and (min-width: 1280px) {
    position: static;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    background-image: url('${heroHeartDes}');
    background-repeat: no-repeat;
    background-position: top 2px left 38px;
    width: auto;
    margin-left: 0px;
    margin-right: 10px;
    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('${heroHeartDes2x}');
      background-size: 90px 90px;
    }
  }
`;