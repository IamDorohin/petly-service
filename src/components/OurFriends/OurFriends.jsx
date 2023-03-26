import React, { useState } from 'react';
import TimeModal from './FriendsTimeModal';
import {  StyledFriend, FriendsLink, FriendsBox,IMG, ImgDiv, Adress, ItemAdress, Button, TextLink, P } from './OurFriends.styled';



const Friend = ({ friend }) => {
  const [showModal, setShowModal] = useState(false);
  const { address, addressUrl, email, phone, title, url, workDays, imageUrl } = friend;

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <StyledFriend>
    
      <FriendsLink href={url} target="_blank" rel="noreferrer">
        {title.length < 30 ? title :  title.slice(0, 30) + '...'}
        {/* { title.slice(0, 30)} */}
        </FriendsLink>
           <FriendsBox>
        {imageUrl ? <IMG src={imageUrl} alt="company logo" /> : <ImgDiv />}
        

        <Adress>
          <ItemAdress>
            <P>Time:</P>
            <P>
              {!workDays || workDays.length === 0 ? (
                '--------------------'
              ) : (
                <Button type="button" onMouseEnter={toggleModal} onMouseLeave={toggleModal}>
                  {workDays.find(day => day.isOpen === true).from} -{' '}
                  {workDays.find(day => day.isOpen === true).to}
                </Button>
              )}
              {showModal && <TimeModal timeTable={workDays} />}
            </P>
          </ItemAdress>
          
          <ItemAdress>
          <P>Adress:</P>
            <P>
              {!addressUrl ? (
                !address ? (
                  '--------------------'
                ) : (
                  `${address}`
                )
              ) : (
                <TextLink href={addressUrl} target="_blank" rel="noreferrer">
                  {address.slice(0, 25) + '...'}
                </TextLink>
              )}
            </P>
          </ItemAdress>       
          <ItemAdress>
            <P>Email:</P>
            <P>{!email ? '--------------------' : <TextLink href={`mailto:${email}`}>{email}</TextLink>}</P>
               </ItemAdress>
       <ItemAdress>
            <P>Phone:</P>
            <P>{!phone ? '--------------------' : <TextLink href={`tel:${phone}`}>{phone}</TextLink>}</P> 

            </ItemAdress>
               
   
        </Adress>
      </FriendsBox>
    </StyledFriend>
  );
};

export default Friend;