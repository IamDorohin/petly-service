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

// export const UserCity = ({ setIsEdit, isEdit }) => {
//   const user = useSelector(
//     'залогиненый юзер из редакса, вся инфа про юзера, auth'
//   );
//   const [city, setCity] = useState(user.name);
//   const [disabled, setDisabled] = useState(true);
//   const dispatch = useDispatch();

//   function handleInputClick() {
//     if (!isEdit) {
//       setIsEdit(true);
//       setDisabled(false);
//     } else if (!disabled && isEdit) {
//       dispatch(patchContact(city));
//       setIsEdit(false);
//       setDisabled(true);
//     }
//   }

//   return (
//     <FormLabel>
//       <FormTitle>City:</FormTitle>
//       <FormWrap onClick={handleInputClick}>
//         <FormInput value={city} onChange={e => setCity(e.target.value)} />
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

// export default UserCity;
