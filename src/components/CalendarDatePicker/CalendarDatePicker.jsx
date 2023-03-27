import React from 'react';
import { DatePicker, DatePickerInput } from './CalendarDatePicker.styled';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import 'dayjs/locale/uk';
import { LabelFormic } from '../../modals/Modal/Modal.styled';
import { FormLabel } from '@mui/material';

const CalendarDatePicker = ({ onChange, label, value }) => {
  return (
    <FormLabel sx={LabelFormic}>
      {label}
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="uk">
        <DemoItem sx={{ mb: '8px' }}>
          <DatePicker
            sx={DatePickerInput}
            id="dateOfBirth"
            type="dateOfBirth"
            onChange={onChange}
            value={value}
            label={null}
          />
        </DemoItem>
      </LocalizationProvider>
    </FormLabel>
  );
};

export default CalendarDatePicker;
