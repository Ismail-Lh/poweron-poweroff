import { NextLink } from '@components';

import { ButtonWrapper } from './ButtonStyles';

const Button = ({ route, link, primary }) => {
  return (
    <ButtonWrapper primary={primary} className='btn'>
      <NextLink route={route} link={link} />
    </ButtonWrapper>
  );
};

export default Button;
