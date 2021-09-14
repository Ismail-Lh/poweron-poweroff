import { HeroSmallScreenContent } from '@components';
import { powerOffContent, powerOnContent } from '@utils/constants';

const HeroSmallScreen = () => {
  return (
    <>
      <HeroSmallScreenContent {...powerOnContent} />
      <HeroSmallScreenContent {...powerOffContent} />
    </>
  );
};

export default HeroSmallScreen;
