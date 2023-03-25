import NotFoundStyle from './NotFound.styled';
import errorImg from './error.png';

const NotFound = () => {
  return <NotFoundStyle src={errorImg} alt="page_not_found" />;
};

export default NotFound;