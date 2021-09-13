import { Button } from '@components';
import { ContentContainer, Title, SubTitle } from './HeroTextContentStyles';

import { fadeIn } from '@utils/animations';

const HeroTextContent = ({ title, subtitle, powerOn, powerOff, primary }) => {
  return (
    <ContentContainer powerOn={powerOn} powerOff={powerOff} variants={fadeIn}>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
      <Button route='/' link='learn more' primary={primary} />
    </ContentContainer>
  );
};

export default HeroTextContent;
