import styled from 'styled-components';

export const StyledHeader = styled.header`
  /* width: 100%; */

  /* padding-bottom: 60px;
  padding-top: 26px; */
  background-color: #fdf7f2;

  /* @media (min-width: 768px) {
    width: 700px;
    padding-top: 24px;
    justify-content: baseline;
  }
  @media (min-width: 1280px) {
    width: 100%;
  } */
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 320px;
  margin: 0 auto;
  padding: 26px 20px 60px 20px;

  /* margin: 0; */
  /* padding: 0 20px; */
  /* background-color: #fdf7f2; */

  @media (min-width: 768px) {
    width: 768px;
    padding: 26px 32px 60px 32px;
  }
  @media (min-width: 1280px) {
    width: 1280px;
    padding: 26px 16px 60px 16px;
  }
`;

export const Wrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: end;
    align-items: center;
    margin-left: 246px;
  }
  @media (min-width: 1280px) {
  }
`;
