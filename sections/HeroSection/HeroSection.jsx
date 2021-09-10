import { useState } from 'react';
import { HeroImage, HeroSliderContent } from '@components';
import { Wrapper, HeroContent } from './HeroSectionStyles';

const HeroSection = () => {
  const [powerOn, setPowerOn] = useState(false);
  const [powerOff, setPowerOff] = useState(false);

  return (
    <Wrapper>
      <HeroContent
        bgColor='#f7f7fb'
        powerOn={powerOn}
        onMouseEnter={() => setPowerOn(true)}
        onMouseLeave={() => setPowerOn(false)}
        className='left'>
        <HeroImage
          imgSrc='/assets/power-on-product.png'
          imgAlt='power-on-product'
        />
        {powerOn && (
          <HeroSliderContent
            title='get focused, without the jitters'
            subtitle='Enhance productivity without overstimulation'
            imgSrc='/assets/power-on-bg.jpg'
            imgAlt='power-on-bg'
            powerOn={powerOn}
          />
        )}
      </HeroContent>

      <HeroContent
        bgColor='#1d1d1d'
        powerOff={powerOff}
        onMouseEnter={() => setPowerOff(true)}
        onMouseLeave={() => setPowerOff(false)}
        className='right'>
        <HeroImage
          imgSrc='/assets/power-off-product.png'
          imgAlt='power-off-product'
        />
        {powerOff && (
          <HeroSliderContent
            title="get a better night's sleep"
            subtitle='Sleep better, without risk of dependency'
            imgSrc='/assets/power-off-bg.jpg'
            imgAlt='power-off-bg'
            powerOff={powerOff}
          />
        )}
      </HeroContent>
    </Wrapper>
  );
};

export default HeroSection;
