// import React, { useState } from 'react';
import Modal from 'modals/Modal/Modal';
import { useGetNoticesByIdQuery } from 'redux/notices/noticesSlice';

export const NoticeDetailsModal = ({
  isOpen,
  onClose,
  onFavButtonClick,
  activeNoticeId,
}) => {
  const { moreDetails = {} } = useGetNoticesByIdQuery(activeNoticeId);

  const { breed, category, title, imgUrl, location, price, owner, _id, like } =
    moreDetails;

  console.log(moreDetails);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="">
      <div>
        <div>{breed}breed</div>
        <div>{category}</div>
        <div>{title}title</div>
        <div>{imgUrl}photo</div>
        <div>{location}location</div>
        <div>{price}price</div>
        <div>{owner}owner</div>
        <div>{_id}</div>
        <div>{like}</div>
      </div>
    </Modal>
  );
};
