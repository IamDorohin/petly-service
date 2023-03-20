import { Button } from '@mui/material';
import {
  DatePicker,
  LocalizationProvider,
  MobileDatePicker,
} from '@mui/x-date-pickers';
import { Field, Form } from 'formik';
import styled from 'styled-components';

export const Input = styled(Field)`
  box-sizing: border-box;
  width: 240px;
  height: 40px;
  left: 20px;
  top: 136px;
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  margin-bottom: 16px;
  padding: 11px 20px 12px 14px;

  :focus {
    border: 2px solid #f59256;
    outline: none;
  }
`;

export const Inputt = styled(DatePicker)`
  box-sizing: border-box;
  width: 240px;
  height: 40px;
  width: 100%;
  //   left: 20px;
  //   top: 136px;
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  margin-bottom: 16px;
  padding: 11px 20px 12px 14px;
  :focus {
    border: 2px solid #f59256;
    outline: none;
  }
`;
export const BrowserInput = styled(MobileDatePicker)`
  box-sizing: border-box;
  width: 240px;
  height: 40px;
  //   left: 20px;
  //   top: 136px;
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  margin-bottom: 16px;
  padding: 11px 20px 12px 14px;
  :focus {
    border: 2px solid #f59256;
    outline: none;
  }
`;
// export const Xxxx = styled(LocalizationProvider)`
//   padding: 0;
//   border: 0;
// `;

export const Forma = styled(Form)`
position: relative;
  // height: 530px
  :last-child {
    margin-bottom: 56px;
  }
`;
export const NextBtn = styled(Button)`
position:absolut;
// top: 0;
// left:0;
  width: 100%;
  font-size: 16px;
  text-transform: none;
  color: #111111;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  border: 2px solid #f59256;
  border-radius: 40px;
  background: #ffffff;
  margin-bottom: 12px;
  :focus,
  :active,
  :hover {
    background: #f59256;
    color: #ffffff;
  }
`;
export const CantBtn = styled(Button)`
  width: 100%;
  font-size: 16px;
  text-transform: none;
  color: #111111;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  border: 2px solid #f59256;
  border-radius: 40px;
  background: #ffffff;
  margin-top: 92px;
  :focus,
  :active,
  :hover {
    background: #f59256;
    color: #ffffff;
  }`


export const Title = styled.h2`
//   width: 88px;
//   height: 33px;
font-weight: 500;
  display: flex;
justify-content: center;
}
`;
