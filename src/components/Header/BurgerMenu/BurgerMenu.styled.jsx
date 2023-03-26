import styled from 'styled-components';

export const StyledContainer = styled.div`
  background-color: rgba(253, 247, 242, 1);
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  z-index: 1;
  padding: 16px 20px;
  @media (min-width: 768px) {
    padding: 24px 32px;
  }
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 46px;
  width: 320px;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 768px) {
    width: 768px;
    padding-top: 8px;
    padding-left: 32px;
    padding-right: 32px;
    margin-bottom: 88px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const StyledContainerUserMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledUserMenu = styled.div`
  margin-bottom: 60px;
`;