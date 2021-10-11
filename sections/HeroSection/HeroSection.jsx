import { useMediaQuery } from '@react-hook/media-query';

import { Wrapper } from './HeroSectionStyles';
import { HeroDesktop } from '@components';

const HeroSection = () => {
  const matchesMedia = useMediaQuery('only screen and (max-width: 1024px)');

  return (
    <Wrapper>
      <HeroDesktop />
    </Wrapper>
  );
};

export default HeroSection;
