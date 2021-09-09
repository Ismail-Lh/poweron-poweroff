import { HeroContent } from '@components';
import { useState } from 'react';
import { Wrapper } from './HeroSectionStyles';

const HeroSection = () => {
  const [powerOn, setPowerOn] = useState(false);
  const [powerOff, setPowerOff] = useState(false);

  return (
    <Wrapper>
      <HeroContent
        imgSrc='/assets/power-on-product.png'
        imgAlt='power-on-product'
        bgColor='#f7f7fb'
        powerOn={powerOn}
        handleMouseEnter={() => setPowerOn(true)}
        handleMouseLeave={() => setPowerOn(false)}
      />
      <HeroContent
        imgSrc='/assets/power-off-product.png'
        imgAlt='power-off-product'
        bgColor='#1d1d1d'
        powerOff={powerOff}
        handleMouseEnter={() => setPowerOff(true)}
        handleMouseLeave={() => setPowerOff(false)}
      />
    </Wrapper>
  );
};

export default HeroSection;
