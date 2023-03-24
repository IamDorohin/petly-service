import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from './CalendarDatePicker.styled';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import 'dayjs/locale/uk';

const CalendarDatePicker = ({ onChange, label, value }) => {
  return (
    <label>
      {label}
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="uk">
        <DemoItem>
          <DatePicker
            id="dateOfBirth"
            type="dateOfBirth"
            onChange={onChange}
            value={value}
            label={null}
          />
        </DemoItem>
      </LocalizationProvider>
    </label>
  );
};

export default CalendarDatePicker;
