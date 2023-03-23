import PropTypes from 'prop-types';
import { Button } from '@mui/material';

const CustomButton = ({ children, controle = 'primary', ...rest }) => {
  return (
    <Button
      type={'button'}
      width={'full'}
      height={{ base: '10', md: '44px', xl: '12' }}
      py={{ base: '2', md: '2.5' }}
      px={7}
      bg={controle === 'secondary' ? '#F59256' : '#FFFFFF'}
      color={controle === 'secondary' ? '#FFFFFF' : '#111111'}
      border={'2px solid'}
      borderColor={'#F59256'}
      borderRadius={'40px'}
      fontSize={{ base: 'md', md: 'xl' }}
      fontWeight={'medium'}
      letterSpacing={'0.04em'}
      lineHeight={{ base: 'short', md: '1.35' }}
      _hover={{
        bg: `${controle === 'secondary' ? '#FFFFFF' : '#F59256'}`,
        color: `${controle === 'secondary' ? '#111111' : '#FFFFFF'}`,
      }}
      _focus={{ bg: '#F59256', color: '#FFFFFF' }}
      aria-label="button"
      {...rest}
    >
      {children}
    </Button>
  );
};

export default CustomButton;

CustomButton.propTypes = {
  children: PropTypes.node,
  controle: PropTypes.oneOf(['secondary', 'primary']),
};
