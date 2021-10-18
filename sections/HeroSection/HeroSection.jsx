import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { Wrapper } from './HeroSectionStyles';
import { HeroContainer } from '@components';
import { powerOnContent, powerOffContent } from '@utils/constants';

const HeroSection = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 1,
    },
  };

  return (
    <Wrapper>
      <Carousel
        ssr={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}>
        <HeroContainer {...powerOnContent} />
        <HeroContainer {...powerOffContent} />
      </Carousel>
    </Wrapper>
  );
};

export default HeroSection;
