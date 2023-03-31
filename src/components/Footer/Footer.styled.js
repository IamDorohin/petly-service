import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
    backdrop-filter: blur(20px);
    background: hsla(0, 0%, 100%, 0.1);
    bottom: 0;
    left: 0;
    box-shadow: 1px -1px 10px -1px rgba(0, 0, 0, 0.5);
    display: flex;
    font-size: 14px;
    height: 30px;
    position: fixed;
    width: 100vw;
    z-index: 1001;
  }
`;

export const FooterSection = styled.div`
  max-width: 1280px;
  padding: 0 16px;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  flex-wrap: wrap;
`;

export const FooterContent = styled.p`
  color: #fff;
  text-align: center;
  margin: 10px 20px;
  font-size: 14px;
`;

export const FooterMenu = styled.ul`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 15px;
  flex-wrap: wrap;
`;

export const MenuItem = styled.li`
  list-style: none;
`;

export const MenuItemLink = styled.a`
  font-size: 14px;
  color: #fff;
  margin: 0 10px;
  display: inline-block;
  transition: 0.5s;
  text-decoration: none;
  opacity: 0.75;
  &:hover {
    opacity: 1;
    transform: translateY(-3px);
  }
`;

/********** Modal */
