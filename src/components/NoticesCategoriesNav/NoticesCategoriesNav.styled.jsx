import { NavLink } from 'react-router-dom'
import styled from 'styled-components';


export const OverallContainer = styled.div`
  position: relative;
`

export const CategoriesContainer = styled.div`
   display: flex;
   gap: 12px;
`;

export const CategoriesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  gap: 12px;
`;
  
// export const Button = styled.button`
//     /* display: flex;
//       justify-content: center;
//   align-items: center; */
//   font-family: Manrope;
//   background-color: #ffffff;
//   padding: 8px 28px;
//   font-size: 14px;
//   /* font-weight: 500; */
//   letter-spacing: 0.04em;
//   line-height: 1.35;
//   border: 2px solid #f59256;
//   border-radius: 40px;
//   cursor: pointer;
 

//    &:hover {
//  background-color: #F59256;

 
//  }

//  @media screen and (min-width: 768px) {
//     padding: 10px 28px;
//     font-size: 20px;
//   }
// `

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
color: #111111;

   /* &.active {
    color: white;
    background-color: #F59256
   } */
     &:hover {
 background-color: #F59256;
color: #ffffff;
     }

      font-family: Manrope;
  background-color: #ffffff;
  padding: 8px 28px;
  font-size: 14px;
  /* font-weight: 500; */
  letter-spacing: 0.04em;
  line-height: 1.35;
  border: 2px solid #f59256;
  border-radius: 40px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    padding: 10px 28px;
    font-size: 20px;
  }
  `

export const ContainerAddBtn = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0;
  padding: 0;
  gap: 12px;
  color: black;
`

export const TitleAddBtn = styled.p`
  font-family: 'Manrope';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 1.35;

color: #111111;
`

export const AddButton = styled.button`
  display: flex;
    align-items: center;
    background-color: #F59256;
    width: 44px;
height: 44px;
border-radius: 50%;
    border: none;
    
        /* position: absolute;
    left: 1200px;
    top: 200px; */
  `