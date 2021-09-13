import { useMediaQuery } from '@react-hook/media-query';

import { HeroDesktop, HeroSmallScreen } from '@components';
import { Wrapper } from './HeroSectionStyles';

const HeroSection = () => {
  const matchesMedia = useMediaQuery('only screen and (max-width: 1024px)');

  return (
    <Wrapper>{!matchesMedia ? <HeroDesktop /> : <HeroSmallScreen />}</Wrapper>
  );
};

export default HeroSection;
