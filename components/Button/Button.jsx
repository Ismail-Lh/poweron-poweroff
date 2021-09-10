import { NextLink } from '@components';

import { ButtonWrapper } from './ButtonStyles';

const Button = ({ route, link, powerOn }) => {
  return (
    <ButtonWrapper powerOn={powerOn}>
      <NextLink route={route} link={link} />
    </ButtonWrapper>
  );
};

export default Button;
