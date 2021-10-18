import { Button } from '@components';
import { ContentContainer, Title, SubTitle, BigTitle } from './HeroTextStyles';

import { fadeIn } from '@utils/animations';

const HeroText = ({
  title,
  subtitle,
  powerOn,
  powerOff,
  primary,
  bigTitle,
}) => {
  return (
    <ContentContainer
      className='product__feature-text'
      powerOn={powerOn}
      powerOff={powerOff}
      variants={fadeIn}>
      <div className='content'>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
        <Button route='/' link='learn more' primary={primary} />
      </div>

      <BigTitle>{bigTitle}</BigTitle>
    </ContentContainer>
  );
};

export default HeroText;
