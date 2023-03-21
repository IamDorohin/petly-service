import styled from 'styled-components';

export const NoticesItem = styled.li`
list-style: none;
position: relative;
width: 280px;
height: 606px;
`

export const GlobalContainer = styled.div`
width: 100%;



@media screen and (min-width: 768px ){
   width: 336px;

};
@media screen and (min-width: 1280px ){
   width: 288px;

}
`

// export const ImageContainer = styled.div`
// /* position: relative;
// width: 280px;
// height: 288px; */
// width: 100%;
// `
export const Image = styled.img`
width: 100%;
`

export const ImageText = styled.p`
    width: 158px;
    position: absolute;
    top: 10px;
    padding: 6px 0px 7px 20px;
    border-radius: 0px 40px 40px 0px;
    font-family: 'Inter';
    font-weight: 500;
    font-size: 12px;
    line-height: 1.25;
    letter-spacing: 0.04em;
    background-color: rgba(255, 255, 255, 0.6);
    color: rgb(17, 17, 17);

    @media screen and (min-width: 768px) {
    font-family: Manrope;
  }
`

export const LikeBtn = styled.button`
    position: absolute;
    top: 12px;
    right: 12px;
    width: 44px;
    height: 44px;
    
    background-color: rgba(255, 255, 255, 0.6);
    display: flex;
     justify-content: center;
     align-items: center;
    padding: 11px 10px;
    cursor: pointer;
    border-radius: 50%;
    border: none;
`



export const DescriptoinTitle = styled.h3`
margin: 20px;
font-family: 'Manrope';
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 1.35;
letter-spacing: -0.01em;

color: #111111;
`

export const DescriptionList = styled.ul`
list-style: none;
margin-bottom: 50px;
`

export const DescriptionItem = styled.li`
font-family: 'Manrope';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 1.375;
`

export const DescriptionText = styled.span`
display: inline-block;
    min-width: 90px;
`

export const ButtonStyles = `
margin: 0 20px 12px 20px;
  width: 248px;
    padding: 8px 28px;
   background: #ffffff;
  border: 2px solid #f59256;
  border-radius: 40px;
  font-family: "Manrope";
  font-weight: 500;
  font-size: 16px;
  line-height: 1.37;
  letter-spacing: 0.04em;
  color: #f59256;
  &&:hover {
    border-color: #ff6101;
    color: #ff6101;
    cursor: pointer;
  };
`;

export const DescriptionBtn = styled.button`
 ${ButtonStyles};
`

export const DeleteBtn = styled.button`
    ${ButtonStyles};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 14px;
    `