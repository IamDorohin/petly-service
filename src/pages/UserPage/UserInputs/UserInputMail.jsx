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

// export const UserMail = ({ setIsEdit, isEdit }) => {
//   const user = useSelector(
//     'залогиненый юзер из редакса, вся инфа про юзера, auth'
//   );
//   const [email, setEmail] = useState(user.email);
//   const dispatch = useDispatch();
//   const [disabled, setDisabled] = useState(true);

//   function handleInputClick(e) {
//     if (!isEdit) {
//       setIsEdit(true);
//       setDisabled(false);
//     } else if (!disabled && isEdit) {
//       dispatch(patchContact(email));
//       setIsEdit(false);
//       setDisabled(true);
//     }
//   }

//   return (
//     <FormLabel>
//       <FormTitle>Mail:</FormTitle>
//       <FormWrap onClick={handleInputClick}>
//         <FormInput value={email} onChange={e => setEmail(e.target.value)} />
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

// export default UserMail;
