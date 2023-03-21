import { useState } from 'react';

import {
  UserBlock,
  UserTitleInfo,
  UserInfoBlock,
  UserInfoImage,
  UserEditBlock,
  UserEditPhoto,
  UserEditInput,
  UserEditIcon,
  Form,
  FormLabel,
  FormTitle,
  FormInput,
  FormWrap,
  FormIconPen,
  LogoutBtn,
  LogoutBtnIcon,
  PetCardBlock,
  AddPetBtn,
  AddPetBtnIcon,
  PetCard,
  PetCardImg,
  PetCardDelete,
  PetCardDeleteIcon,
  PetCardDescript,
  PetCardTitle,
} from './UserPage.style';

const inputs = [
  { id: 1, name: 'Name' },
  { id: 2, name: 'Email' },
  { id: 3, name: 'Birthday' },
  { id: 4, name: 'Phone' },
  { id: 5, name: 'City' },
];

const UserPage = () => {
  const [name, setName] = useState();
  console.log(name);

  function inputChange(evt) {
    const inputName = evt.target.name;
    console.log('inputName', inputName);
    if (inputName) {
      setName(evt.target.value);
    } else {
      return;
    }
  }
  // function onFormSubmit(evt) {
  //   evt.preventDefault();
  //   const inputName = evt.target.name;
  // }
  return (
    <UserBlock>
      <UserTitleInfo>My information:</UserTitleInfo>
      <UserInfoBlock>
        <UserInfoImage src="../../../public/no-photo.jpg" alt="No photo" />

        <UserEditBlock>
          <UserEditPhoto>
            <UserEditIcon />
            <UserEditInput type="file" accept=".jpg, .jpeg, .png" />
            Edit photo
          </UserEditPhoto>
        </UserEditBlock>
        {/* test */}
        {/* onFormSubmit={onFormSubmit} */}
        <Form>
          {inputs.map(input => {
            return (
              <FormLabel key={input.id}>
                <FormTitle>{input.name}</FormTitle>
                <FormWrap>
                  <FormInput
                    onChange={inputChange}
                    name={input.name.toLowerCase()}
                  />
                  <FormIconPen />
                </FormWrap>
              </FormLabel>
            );
          })}
        </Form>

        <LogoutBtn>
          <LogoutBtnIcon />
          Log Out
        </LogoutBtn>
      </UserInfoBlock>

      <PetCardBlock>
        <UserTitleInfo style={{ marginBottom: '0' }}>My pets:</UserTitleInfo>

        <AddPetBtn>
          Add pet
          <AddPetBtnIcon />
        </AddPetBtn>
      </PetCardBlock>

      <PetCard>
        <PetCardImg src="/public/cat.jpg" alt="You pet" />

        <PetCardDelete>
          <PetCardDeleteIcon />
        </PetCardDelete>
        <PetCardTitle>
          Name:
          <PetCardDescript> Jack</PetCardDescript>
        </PetCardTitle>

        <PetCardTitle>
          Date of birth:
          <PetCardDescript> 22.04.2018</PetCardDescript>
        </PetCardTitle>

        <PetCardTitle>
          Breed:
          <PetCardDescript> Persian cat</PetCardDescript>
        </PetCardTitle>

        <PetCardTitle style={{ marginBottom: '0' }}>
          Comments:
          <PetCardDescript>
            {' '}
            Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet,
            consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum
            dolor sit amet, consectetur
          </PetCardDescript>
        </PetCardTitle>
      </PetCard>
    </UserBlock>
  );
};

export default UserPage;
