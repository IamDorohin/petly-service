import PropTypes from 'prop-types';
import {
  CustomInput,
  CustomTextField,
  CustomInputFile,
  RadioButtons,
  RadioButtonsCategory,
} from './index';

const FormikControl = ({ control = 'input', ...rest }) => {
  switch (control) {
    case 'input':
      return <CustomInput {...rest} />;
    case 'textarea':
      return <CustomTextField {...rest} />;
    case 'editable':
      //     return <CustomEditable {...rest}/>
      // case 'file':
      return <CustomInputFile {...rest} />;
    case 'radio-button':
      return <RadioButtons {...rest} />;
    case 'category-radio':
      return <RadioButtonsCategory {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;

FormikControl.propTypes = {
  control: PropTypes.oneOf([
    'input',
    'textarea',
    'editable',
    'radio-button',
    'category-radio',
  ]),
};
