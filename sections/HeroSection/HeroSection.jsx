import { useMediaQuery } from '@react-hook/media-query';

import { Wrapper } from './HeroSectionStyles';
import { HeroDesktop, HeroSmallScreen } from '@components';

const HeroSection = () => {
  const matchesMedia = useMediaQuery('only screen and (max-width: 1024px)');

  return (
    <Wrapper>{!matchesMedia ? <HeroDesktop /> : <HeroSmallScreen />}</Wrapper>
  );
};

export default HeroSection;
