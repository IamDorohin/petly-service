import styled from 'styled-components';

export const ContainerAddBtn = styled.div`
  position: relative;
  display: flex;
  /* flex-wrap: wrap; */
  align-items: center;
  margin: 0;
  padding: 0;
  gap: 12px;
  color: black;
`

export const TitleAddBtn = styled.p`
margin: 0;
    display: inline-block;
    padding: 12px 0;
width: 63px;
  font-family: 'Manrope';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 1.35;

color: #111111;

@media screen and (max-width: 767px ){
    display: none;
 /* position: absolute;
   top: 180px;
   left: 265px;
   z-index: 2;
   font-size: 14px; */
}
`

export const AddButton = styled.button`
  display: flex;
    align-items: center;
    background-color: #F59256;
    width: 44px;
height: 44px;
border-radius: 50%;
    border: none;
    
  @media screen and (max-width: 767px ){
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: fixed;
   right: 20px;
    bottom: 100px;
   z-index: 1;
   width: 80px;
   height: 80px;
transition: all 250ms ease 0s;
  }
    `

export const TitleAddBtnForMobile = styled.p`
    margin: 0;
      font-family: Manrope;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: rgb(255, 255, 255);
    
    @media screen and (min-width: 768px ){
        display: none;
    }
    `