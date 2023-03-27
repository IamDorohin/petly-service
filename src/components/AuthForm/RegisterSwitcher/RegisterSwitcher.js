import RegisterFirstStep from './RegisterFirstStep/RegisterFirstStep';
import RegisterSecondStep from './RegisterSecondStep/RegisterSecondStep';

const RegisterSwitcher = ({ step, ...rest }) => {
  switch (step) {
    case 'step1':
      return <RegisterFirstStep {...rest} />;
    case 'step2':
      return <RegisterSecondStep {...rest} />;
    default:
      return null;
  }
};

export default RegisterSwitcher;
