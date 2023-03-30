import { useSelector, useDispatch } from 'react-redux';
import selectTheme from 'redux/theme/selectors';
import { changeTheme } from 'redux/theme/themeSlice';
import { useState } from 'react';
import * as React from 'react';
import Switch from '@mui/material/Switch';


export default function ThemeToggleButton() {
    const dispatch = useDispatch();
    const theme = useSelector(selectTheme);
    const [isChecked, setIsChecked] = useState(theme === 'light' ? true : false);

    return (
        <Switch>
            checked={isChecked}
            onChange={() => {
                setIsChecked(!isChecked);
                dispatch(changeTheme());
                          }}
            inputProps={{ 'aria-label': 'controlled' }}
        </Switch>

    )
};









