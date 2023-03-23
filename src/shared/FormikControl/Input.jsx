import PropTypes from 'prop-types';
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  IconButton,
  InputBase,
  InputLabel,
} from '@mui/material';
// import { VisibilityIcon, VisibilityOffIcon } from '@mui/icons-material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Field } from 'formik';
// import { InputBase } from 'formik-mui';

const CustomInput = ({
  label,
  name,
  id,
  mb = '16px',
  width = '280px',
  type = 'text',
  show,
  handleClick,
  ...rest
}) => {
  return (
    <Field>
      {({ form }) => (
        <FormControl
          isInvalid={form.errors[name] && form.touched[name]}
          w={{ base: `${width}`, md: '448px', xl: '458px' }}
          mb={
            form.errors[name] && form.touched[name] ? `calc(${mb} - 15px)` : mb
          }
        >
          {label && (
            <FormLabel
              display={'inline-flex'}
              htmlFor={id}
              fontSize={{ base: '18px', md: '2xl' }}
              fontWeight={'medium'}
              lineHeight={'1.44'}
              color={'#111111'}
              mb={2}
              mr="0"
            >
              {label}
            </FormLabel>
          )}
          <InputBase
            maxH={{ base: '40px', md: '52px' }}
            mb={form.errors[name] && form.touched[name] ? '1px' : 0}
          >
            <Field
              as={Input}
              type={type !== 'password' ? type : show ? 'text' : 'password'}
              id={id}
              name={name}
              variant="filled"
              minH={'none'}
              h={{ base: '10', md: '52px' }}
              p={{ base: '11px 14px', md: '14px 32px' }}
              fontSize={{ base: 'sm', md: '18px' }}
              lineHeight={'short'}
              color={
                type === 'date' && form.values.birthday === ''
                  ? 'rgba(27, 27, 27, 0.6)'
                  : '#111111'
              }
              bg="#FDF7F2"
              border="1px solid rgba(245, 146, 86, 0.5)"
              borderRadius="40px"
              _placeholder={{ color: '#111111' }}
              {...rest}
              defaultValue="Normal"
            />
            {type === 'password' && (
              <InputLabel
                width={{ base: '10', md: '52px' }}
                height={{ base: '10', md: '52px' }}
              >
                <IconButton
                  onClick={handleClick}
                  icon={show ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  width={{ base: '30px', md: '10' }}
                  height={{ base: '30px', md: '10' }}
                  minW={'none'}
                  backgroundColor={'transparent'}
                  borderRadius={'50%'}
                />
              </InputLabel>
            )}
          </InputBase>
          <FormHelperText fontSize="xs" mt={0} id="demo-helper-text-aligned">
            {form.errors[name]}
          </FormHelperText>
        </FormControl>
      )}
    </Field>
  );
};

export default CustomInput;

CustomInput.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  mb: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
  type: PropTypes.string.isRequired,
  show: PropTypes.bool,
  handleClick: PropTypes.func,
};
