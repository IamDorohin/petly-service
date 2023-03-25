import {
  FormLabel,
  FormTitle,
  FormInput,
  FormWrap,
  FormIconPen,
  FormIconPenInclude,
} from './../UserPage.style';

import { useState } from 'react';
import { BsCheck } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { patchContact } from 'redux/userPage/userPageOperations';

export const UserPhone = ({ setIsEdit, isEdit }) => {
  const user = useSelector(
    'залогиненый юзер из редакса, вся инфа про юзера, auth'
  );
  const [phone, setPhone] = useState(user.phone);
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(true);

  function handleInputClick() {
    if (!isEdit) {
      setIsEdit(true);
      setDisabled(false);
    } else if (!disabled && isEdit) {
      dispatch(patchContact(phone));
      setIsEdit(false);
      setDisabled(true);
    }
  }

  return (
    <FormLabel>
      <FormTitle>Phone:</FormTitle>
      <FormWrap onClick={handleInputClick}>
        <FormInput value={phone} onChange={e => setPhone(e.target.value)} />
        {disabled ? (
          <FormIconPen />
        ) : (
          <FormIconPenInclude>
            <BsCheck style={{ width: '100%', height: '100%' }} />
          </FormIconPenInclude>
        )}
      </FormWrap>
    </FormLabel>
  );
};

export default UserPhone;
