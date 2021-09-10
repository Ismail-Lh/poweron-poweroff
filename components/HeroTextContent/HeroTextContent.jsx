import { Button } from '@components';
import { ContentContainer, Title, SubTitle } from './HeroTextContent';

import { fadeIn } from '@utils/animations';

const HeroTextContent = ({ title, subtitle, powerOn, powerOff }) => {
  return (
    <ContentContainer powerOn={powerOn} powerOff={powerOff} variants={fadeIn}>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
      <Button route='/' link='learn more' powerOn={powerOn} />
    </ContentContainer>
  );
};

export default HeroTextContent;
