import { Wrapper } from './HeroSectionStyles';
import { HeroContainer } from '@components';
import { powerOnContent } from '@utils/constants';

const HeroSection = () => {
  return (
    <Wrapper>
      <HeroContainer {...powerOnContent} />
    </Wrapper>
  );
};

export default HeroSection;
