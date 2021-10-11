import { Button } from '@components';
import { ContentContainer, Title, SubTitle } from './HeroTextContentStyles';

import { fadeIn } from '@utils/animations';

const HeroTextContent = ({ title, subtitle, powerOn, powerOff, primary }) => {
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
    </ContentContainer>
  );
};

export default HeroTextContent;
