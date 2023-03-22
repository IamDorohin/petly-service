import { NavLink } from 'react-router-dom'
import styled from 'styled-components';


export const OverallContainer = styled.div`
  position: relative;
`

// export const CategoriesContainer = styled.div`
//    display: flex;
//    gap: 12px;
// `;

export const CategoriesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  gap: 12px;

  list-style: none;

  /* @media screen and (min-width: 768px) and (max-width: 1199px) {
    display: flex;
  flex-wrap: wrap;
  
  } */
`;
  
export const CategoriesItem = styled.li`
 padding: 8px 28px;
  background-color: #ffffff;
  border: 2px solid #f59256;
  border-radius: 40px;
cursor: pointer;

  &:hover {
 background-color: #F59256;

     }

  @media screen and (min-width: 768px) {
    padding: 10px 28px;
    
  }
`

export const NavLinkStyled = styled(NavLink)`
 text-decoration: none;
color: #111111;

   &.active {
    color: white;
    background-color: #F59256
   }
  ${CategoriesItem}:hover & {
 
color: #ffffff;
     }

      font-family: Manrope;
  
 
  font-size: 14px;
  /* font-weight: 500; */
  letter-spacing: 0.04em;
  line-height: 1.35;
  
  

  @media screen and (min-width: 768px) {
    
    font-size: 20px;
  }
  `

