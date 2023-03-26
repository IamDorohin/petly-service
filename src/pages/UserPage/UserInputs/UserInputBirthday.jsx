// import {
//   FormLabel,
//   FormTitle,
//   FormInput,
//   FormWrap,
//   FormIconPen,
//   FormIconPenInclude,
// } from './../UserPage.style';

// import { useState } from 'react';
// import { BsCheck } from 'react-icons/bs';
// import { useDispatch, useSelector } from 'react-redux';
// import { patchContact } from 'redux/userPage/userPageOperations';

// export const UserBirthday = () => {
//   const [birthday, setBirthday] = useState(user.birthday);
//   const dispatch = useDispatch();
//   const [disabled, setDisabled] = useState(true);

//   function handleInputClick({ setIsEdit, isEdit }) {
//     if (!isEdit) {
//       setIsEdit(true);
//       setDisabled(false);
//     } else if (!disabled && isEdit) {
//       dispatch(patchContact(birthday));
//       setIsEdit(false);
//       setDisabled(true);
//     }
//   }

//   return (
//     <FormLabel>
//       <FormTitle>Birthday:</FormTitle>
//       <FormWrap onClick={handleInputClick}>
//         <FormInput
//           value={birthday}
//           onChange={e => setBirthday(e.target.value)}
//         />
//         {disabled ? (
//           <FormIconPen />
//         ) : (
//           <FormIconPenInclude>
//             <BsCheck style={{ width: '100%', height: '100%' }} />
//           </FormIconPenInclude>
//         )}
//       </FormWrap>
//     </FormLabel>
//   );
// };

// export default UserBirthday;
