import styled from 'styled-components';

export const NoticesItem = styled.li`
list-style: none;
`
export const ImageContainer = styled.div`
position: relative;
width: 280px;
`
export const Image = styled.img``

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

export const DescriptonContainer = styled.div``

export const DescriptoinTitle = styled.h3``

export const DescriptionList = styled.ul``

export const DescriptionItem = styled.li``

export const DescriptionText = styled.span``

export const DescriptionBtn = styled.button``