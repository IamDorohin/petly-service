import React, { useState } from 'react';
import TimeModal from './FriendsTimeModal';
import { H3, StyledFriend, FriendsLink, FriendsBox,IMG, ImgDiv, DL, DlDiv, Button, DD, TextLink } from './OurFriends.styled';



const Friend = ({ friend }) => {
  const [showModal, setShowModal] = useState(false);
  const { address, addressUrl, email, phone, title, url, workDays, imageUrl } = friend;

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <StyledFriend>
      <H3>
        <FriendsLink href={url} target="_blank" rel="noreferrer">
          {title}
        </FriendsLink>
      </H3>

      <FriendsBox>
        {imageUrl ? <IMG src={imageUrl} alt="company logo" /> : <ImgDiv/>}
        <DL>
          <DlDiv>
            <dt>Time:</dt>
            <DD>
              {!workDays || workDays.length === 0 ? (
                '--------------------'
              ) : (
                <Button type="button" onMouseEnter={toggleModal} onMouseLeave={toggleModal}>
                  {workDays.find(day => day.isOpen === true).from} -{' '}
                  {workDays.find(day => day.isOpen === true).to}
                </Button>
              )}
              {showModal && <TimeModal timeTable={workDays} />}
            </DD>
          </DlDiv>
          <div>
            <dt>Adress:</dt>
            <DD>
              {!addressUrl ? (
                !address ? (
                  '--------------------'
                ) : (
                  `${address}`
                )
              ) : (
                <TextLink href={addressUrl} target="_blank" rel="noreferrer">
                  {address}
                </TextLink>
              )}
            </DD>
          </div>
          <div>
            <dt>Email:</dt>
            <DD>{!email ? '--------' : <TextLink href={`mailto:${email}`}>{email}</TextLink>}</DD>
          </div>
          <div>
            <dt>Phone:</dt>
            <DD>{!phone ? '--------------------' : <TextLink href={`tel:${phone}`}>{phone}</TextLink>}</DD>
          </div>
        </DL>
      </FriendsBox>
    </StyledFriend>
  );
};

export default Friend;