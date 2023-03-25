import {
  UserContainer,
  UserBlock,
  UserBlockWrapper,
  UserTitleInfo,
  UserInfoBlock,
  UserInfoWrapper,
  UserFormWrapper,
  UserInfoImage,
  UserEditBlock,
  UserEditPhoto,
  UserEditInput,
  UserEditIcon,
  Form,
  LogoutBtn,
  LogoutBtnIcon,
  PetCardBlock,
  PetTitle,
  AddPetBtn,
  AddPetBtnIcon,
  PetCard,
  PetBlockWrapper,
  PetScrollWrapper,
  PetCardImg,
  PetCardDelete,
  PetCardWrapper,
  PetCardDescript,
  PetCardTitle,
} from './UserPage.style';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { HiTrash } from 'react-icons/hi2';

import UserName from './UserInputs/UserInputName';
import UserMail from './UserInputs/UserInputMail';
import UserBirthday from './UserInputs/UserInputBirthday';
import UserPhone from './UserInputs/UserInputsPhone';
import UserCity from './UserInputs/UserInputCity';

import {
  fetchUserPets,
  removePetCard,
} from './../../redux/userPage/userPageOperations';
import { selectUserPets } from './../../redux/userPage/userPageSelectors';

const UserPage = () => {
  // const user = useSelector("залогиненый юзерь");
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserPets());
  }, [dispatch]);

  //! const items = useSelector(selectUserPets);
  //! items.map()

  const deletePetCard = id => {
    return dispatch(removePetCard(id));
  };

  const changeImage = async event => {
    const formData = new FormData();
    formData.append('avatar', event.target.files[0]);
    dispatch('сюда  вставить ф-я загрузки аватара на бэк'(formData));
  };

  const handleLogout = () => {
    dispatch('сюда  вставить ф-я выхода из аккаунта');
    return <Navigate to="/login" />;
  };

  return (
    <UserBlock>
      <UserContainer>
        <UserBlock>
          <UserBlockWrapper>
            <UserTitleInfo>My information:</UserTitleInfo>
            <UserInfoBlock>
              <UserInfoWrapper>
                <UserInfoImage
                  //! сюда вместо заглушки - src={user.img}
                  src="../../../public/no-photo.jpg"
                  alt="No photo"
                />

                <UserEditBlock>
                  <UserEditPhoto>
                    <UserEditIcon />
                    <UserEditInput
                      onChange={changeImage}
                      type="file"
                      name="file"
                      accept=".jpg, .jpeg, .png"
                    />
                    Edit photo
                  </UserEditPhoto>
                </UserEditBlock>
              </UserInfoWrapper>
              <UserFormWrapper>
                <Form>
                  <UserName setIsEdit={setIsEdit} isEdit={isEdit} />
                  <UserMail setIsEdit={setIsEdit} isEdit={isEdit} />
                  <UserBirthday setIsEdit={setIsEdit} isEdit={isEdit} />
                  <UserPhone setIsEdit={setIsEdit} isEdit={isEdit} />
                  <UserCity setIsEdit={setIsEdit} isEdit={isEdit} />
                </Form>

                <LogoutBtn onClick={handleLogout}>
                  <LogoutBtnIcon />
                  Log Out
                </LogoutBtn>
              </UserFormWrapper>
            </UserInfoBlock>
          </UserBlockWrapper>

          <PetBlockWrapper>
            <PetCardBlock>
              <PetTitle style={{ marginBottom: '0' }}>My pets:</PetTitle>

              {/*//! Сюда добавить открытие модалки по клику, добавить животное */}
              <AddPetBtn>
                Add pet
                <AddPetBtnIcon />
              </AddPetBtn>
            </PetCardBlock>

            <PetScrollWrapper>
              {/*//! Список животных */}
              {/* {items.map(
                item => {
                  return (
                    <PetCard>
                      <PetCardImg src="/public/cat.jpg" alt="You pet" />

                      <PetCardDelete
                        type="button"
                        onClick={() => deletePetCard(id)}
                      >
                        <HiTrash style={{ width: '100%', height: '100%' }} />
                      </PetCardDelete>

                      <PetCardWrapper>
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
                            Lorem ipsum dolor sit amet, consecteturLorem ipsum
                            dolor sit amet, consectetur Lorem ipsum dolor sit
                            amet, consectetur Lorem ipsum dolor sit amet,
                            consecteturLorem ipsum dolor sit amet, consectetur
                            Lorem ipsum dolor sit amet, consectetur
                          </PetCardDescript>
                        </PetCardTitle>
                      </PetCardWrapper>
                    </PetCard>
                  );
                }
              )} */}
            </PetScrollWrapper>
          </PetBlockWrapper>
        </UserBlock>
      </UserContainer>
    </UserBlock>
  );
};

export default UserPage;
