import styled from 'styled-components';

export const StyledContainer = styled.div`
  background-color: rgba(253, 247, 242, 1);
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  z-index: 1000;
  padding: 0 20px;

  @media (min-width: 768px) {
    width: 440;
    padding: 24px 32px;
  }
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 46px;
  padding-top: 26px;

  @media (min-width: 768px) {
    width: 768px;
    padding-top: 38px;
    padding-left: 42px;
    padding-right: 42px;
    margin-bottom: 88px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const StyledContainerUserMenu = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const StyledUserMenu = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 60px;
`;
