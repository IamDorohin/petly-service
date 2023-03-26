import React from 'react';

import { FriendsModal, Day} from './OurFriends.styled';



const daysOfWeek = {
  0: 'MN',
  1: 'TU',
  2: 'WE',
  3: 'TH',
  4: 'FR',
  5: 'SA',
  6: 'SU',
};

const TimeModal = ({ timeTable }) => {
  if (!timeTable || timeTable.length === 0) {
    return;
  }

  return (
    <FriendsModal>
    
        {timeTable.map((day, idx) => {
          return (
            <Day key={idx}>
              <span>{daysOfWeek[idx]} </span>
              <span>
                {day.from}- {day.to}
              </span>
            </Day>
          );
        })}
     
    </FriendsModal>
  );
};

export default TimeModal;


