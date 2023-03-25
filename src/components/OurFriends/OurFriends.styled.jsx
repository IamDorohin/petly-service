import { styled } from '@mui/system';

export const StyledList = styled('ul')`
  display: flex;
  gap: 12px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 100px;
  @media screen and (min-width:768px) {
    gap: 32px;
  }
  @media screen and (min-width: 1280px) {
    gap: 32px;
  }
  li {
    display: flex;
    justify-content: center;
    align-self: stretch;
    @media screen and (max-width: 767px) {
      width: 100%;
    }
    @media screen and (min-width: 768px) {
      flex-basis: calc((100%) / 2 - 16px);
    }
    @media screen and (min-width:1280px) {
      flex-basis: calc((100% - 64px) / 3);
    }
  }
`;





export const StyledContainer = styled('div')`
  text-align: center;
  h2 {
    margin-top: 42px;
    margin-bottom: 28px;
    font-family: "Manrope";
    font-size: 24px;
    line-height: 1.375;
    color:#111111;
    @media screen and (min-width: 768px) {
      margin-top: 92px;
      margin-bottom: 40px;
      font-size: 48px;
    }
    @media screen and (min-width: 1280px) {
      margin-top: 60px;
      margin-bottom: 60px;
      font-size: 48px;
    }
  }
`;

export const StyledFriend = styled('div')`
  width: 100%;
  max-width: 280px;
  padding: 14px 4px 12px 4px;
  overflow: hidden;
  font-family: "Manrope";
  font-size: 24px;
  line-height: 1.33;
  font-weight: 500;
  color:#111111;
  background-color: #FFFFFF;
  border-radius: 20px;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  @media screen and (min-width: 768px) {
    max-width: 336px;
    padding: 16px 4px;
    font-size: 36px;
    line-height: 1.366;
    border-radius: 40px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 395px;
    padding: 16px 4px;
    font-size: 36px;
    line-height: 1.336;
    border-radius: 40px;
  }
  h3 {
    min-height: 38px;
    @media screen and (min-width: 768px) {
      min-height: 46px;
    }
    @media screen and (min-width: 1280px) {
      min-height: 56px;
    }
  }
  h3 > a {
    color: #ffa726;
    text-decoration-line: underline;
    font-weight: 700;
    @media screen and (min-width: 768px) {
      font-size: 36px;
    }
    @media screen and (min-width: 1280px) {
      font-size: 68px;
    }
  }
  > div {
    display: flex;
    gap: 12px;
    margin-top: 12px;
  }
  dl {
    text-align: left;
    > div {
      margin-bottom: 4px;
      transition: all 100ms linear;
      @media screen and (min-width: 768px) {
        margin-bottom: 8px;
      }
      @media screen and (min-width: 1280px) {
        margin-bottom: 12px;
      }
      &:has(button:hover) {
        color: #ffa726;
      }
      &:has(a:hover) {
        color: #ffa726;
      }
      button {
        font-family: "Manrope";
        font-size: 24px;
        line-height: 1.33;
        font-weight: 500;
        border: none;
        background-color: transparent;
        cursor: pointer;
        transition:all 100ms linear;
        &:hover {
          color: #ffa726;
        }
        @media screen and (min-width: 768px) {
          font-size: 24px;
          line-height: 1.366;
        }
        @media screen and (min-width: 1280px) {
          font-size: 36px;
          line-height: 1.366;
        }
      }
    }
    a {
      text-decoration-line: underline;
      color:#111111;
      transition: all 100ms linear;
      &:hover {
        color: #ffa726;
      }
    }
  }
  dd {
    margin: 0;
    button {
      padding: 0;
      color: #111111;
    }
  }
  img {
    width: 110px;
    height: 78px;
    border-radius: 20px;
    filter: none;
    @media screen and (min-width: 768px) {
      width: 120px;
      height: 85px;
    }
    @media screen and (min-width:1280px) {
      width: 158px;
      height: 112px;
    }
  }
  div.empty-image {
    position: relative;
    padding: 39px 55px;
    background-color: transparent;
    @media screen and (min-width: 768px) {
      padding: 42.5px 60px;
    }
    @media screen and (min-width: 1280px) {
      padding: 56px 79px;
    }
  }
`;

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

