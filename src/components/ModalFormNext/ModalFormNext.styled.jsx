import styled from 'styled-components';
// import { styled } from '@mui/material/styles';
import { Button, Input, inputBaseClasses, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';



export const AddBtn = styled(Button)`
  display: flex;
  width: 208px;
  height: 208px;
  color: #111111;
  box-shadow: none;
  border-radius: 40px;
  background: #fdf7f2;
  margin-bottom: 20px;
//   margin-right: 36px;
//   margin-left: 36px;
  :focus,
  :focus,
  :active,
  :hover {
    border: 2px solid #f59256;
    background: #fdf7f2;
    box-shadow: none;
    // color: #ffffff;
  }
`;


export const AddIcone = styled(AddIcon)`

  width: 48px;
  height: 48px;
 color: rgba(17, 17, 17, 0.6);


 
`;
export const ModalBox = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: column;
`;

export const TextFielde = styled(Input)`
  width: 100%;
  height: 100px;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 20px;
  background: #fdf7f2;
  margin-bottom: 40px;
`;
