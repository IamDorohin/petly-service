import React, { useState } from 'react';
import TimeModal from './FriendsTimeModal';
import {
  StyledFriend,
  FriendsLink,
  FriendsBox,
  IMG,
  Adress,
  ItemAdress,
  Button,
  TextLink,
  P,
  Text,
} from './OurFriends.styled';
import noImg from '../../img/friends/no-logo2.png';

const Friend = ({ friend }) => {
  const [showModal, setShowModal] = useState(false);
  const { address, addressUrl, email, phone, title, url, workDays, imageUrl } =
    friend;

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <StyledFriend>
      <FriendsLink href={url} target="_blank" rel="noreferrer" title={title}>
        {title.length < 30 ? title : title.slice(0, 30) + '...'}
        {/* { title.slice(0, 30)} */}
      </FriendsLink>
      <FriendsBox>
        {imageUrl ? (
          <IMG src={imageUrl} alt="company logo" />
        ) : (
          <IMG src={noImg} />
        )}

        <Adress>
          <ItemAdress>
            <P>Time:</P>
            <div>
              {!workDays || workDays.length === 0 ? (
                '--------------------'
              ) : (
                <Button
                  type="button"
                  onMouseEnter={toggleModal}
                  onMouseLeave={toggleModal}
                >
                  {workDays.find(day => day.isOpen === true).from} -{' '}
                  {workDays.find(day => day.isOpen === true).to}
                </Button>
              )}
              {showModal && <TimeModal timeTable={workDays} />}
            </div>
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
                <TextLink
                  href={addressUrl}
                  target="_blank"
                  rel="noreferrer"
                  title={address}
                >
                  {address.slice(0, 20) + '...'}
                </TextLink>
              )}
            </P>
          </ItemAdress>
          <ItemAdress>
            <P>Email:</P>
            <P>
              {!email ? (
                '--------------------'
              ) : (
                <Text href={`mailto:${email}`}>{email}</Text>
              )}
            </P>
          </ItemAdress>
          <ItemAdress>
            <P>Phone:</P>
            <P>
              {!phone ? (
                '--------------------'
              ) : (
                <Text href={`tel:${phone}`}>{phone}</Text>
              )}
            </P>
          </ItemAdress>
        </Adress>
      </FriendsBox>
    </StyledFriend>
  );
};

export default Friend;
