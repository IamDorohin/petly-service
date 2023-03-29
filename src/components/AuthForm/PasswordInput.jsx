import { InputAdornment, IconButton, FormControl } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import * as SC from './Form.styled';

export const PasswordInput = ({
  formik,
  name,
  label,
  id,
  type,
  value,
  onChange,
  error,
  size,
  showPassword,
  setShowPassword,
}) => {
  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  return (
    <FormControl variant="outlined">
      <SC.Label error={error} size={size} htmlFor={id}>
        {label}
      </SC.Label>
      <SC.PasswordInput
        fullWidth
        name={name}
        label={label}
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        error={error}
        size={size}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
      <SC.HelperText error={error}>
        {formik.touched[name] && formik.errors[name]}
      </SC.HelperText>
    </FormControl>
  );
};
