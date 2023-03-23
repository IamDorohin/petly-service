import PropTypes from 'prop-types';
import { Field } from 'formik';
import { useMemo } from 'react';
import { nanoid } from 'nanoid';
import { Box, ImageList, Hidden } from '@mui/material';
import { male, female } from 'images';
import { TextField } from 'formik-mui';

const RadioButtons = ({ label, name, ...rest }) => {
  const id = useMemo(() => nanoid(), []);
  const options = [
    { value: 'male', text: 'male' },
    { value: 'female', text: 'female' },
  ];
  return (
    <Box mb={{ base: '8', md: '10' }}>
      <Box
        display={'inline-flex'}
        fontSize={{ base: '18px', md: '2xl' }}
        fontWeight={'medium'}
        lineHeight={{ base: '1.44', md: '1.08' }}
        mb={{ base: '4', md: '7' }}
      >
        {label}
      </Box>
      <Box as="ul" display="flex" listStyleType="none">
        <Field name={name} {...rest}>
          {({ field }) => {
            return options.map(({ value, text }) => {
              return (
                <Box
                  as="li"
                  key={value}
                  w={{ base: '55px', md: '65px' }}
                  _focusWithin={{
                    outline: '2px solid #FF6101',
                    borderRadius: '8px',
                  }}
                  mr={{ base: '10', md: '60px' }}
                >
                  <Hidden
                    type="radio"
                    {...field}
                    id={id + value}
                    value={value}
                    checked={field.value === value}
                  />
                  <Box
                    as="label"
                    htmlFor={id + value}
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                    mb={'0'}
                  >
                    <ImageList
                      boxSize={{ base: '40px', md: '60px' }}
                      objectFit="cover"
                      mb={{ base: '3', md: '5' }}
                      src={value === 'male' ? male : female}
                      alt={value}
                    />
                    <TextField
                      fontSize={{ base: '18px', md: 'xl' }}
                      fontWeight={'medium'}
                      lineHeight={{ base: '1.44', md: '1.08' }}
                      _hover={{ color: '#F59256' }}
                      color={field.value === value ? '#F59256' : '#000000'}
                    >
                      {text}
                    </TextField>
                  </Box>
                </Box>
              );
            });
          }}
        </Field>
      </Box>
    </Box>
  );
};

export default RadioButtons;

RadioButtons.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  name: PropTypes.string.isRequired,
};
