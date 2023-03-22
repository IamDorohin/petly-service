import { useState } from 'react';

import * as SC from './NoticesSearch.styled';
import SearchIcon from '@mui/icons-material/Search';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export const NoticesSearch = () => {
  const [focus, setFocus] = useState(null);
  const [value, setValue] = useState('');

  const handleInputFocus = event => {
    setFocus(true);
  };

  const handleChange = event => {
    setValue(event.target.value);
  };

  const onChangeBtnOff = event => {
    setValue('');
    setFocus(false);
  };

  return (
    <SC.SearchContainer>
      <SC.Title>Find your favorite pet</SC.Title>
      <SC.Form onFocus={handleInputFocus}>
        <SC.Input
          type="text"
          placeholder="Search"
          value={value}
          onChange={handleChange}
        />
        {!focus ? (
          <SC.Button type="submit">
            <SearchIcon
              sx={{
                width: 24,
                height: 24,
                color: '#111111',
              }}
            />
          </SC.Button>
        ) : (
          <SC.Button onClick={onChangeBtnOff}>
            <HighlightOffIcon
              sx={{
                width: 24,
                height: 24,
                color: '#111111',
              }}
            />
          </SC.Button>
        )}
      </SC.Form>
    </SC.SearchContainer>
  );
};
