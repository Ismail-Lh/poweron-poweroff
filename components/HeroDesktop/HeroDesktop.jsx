/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import { HeroImage, HeroSliderContent, HeroTextContent } from '@components';
import { leftToRight, rightToLeft } from '@utils/animations';

import { HeroContent, ImageContainer } from './HeroDesktopStyles';

const HeroDesktop = () => {
  const [powerOn, setPowerOn] = useState(false);
  const [powerOff, setPowerOff] = useState(false);

  return (
    <>
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
        <AnimatePresence initial={false}>
          {powerOn && (
            <HeroSliderContent powerOn={powerOn}>
              <ImageContainer className='img__container' variants={leftToRight}>
                <img src='/assets/power-on-bg.jpg' alt='power-on-bg' />
              </ImageContainer>
              <HeroTextContent
                powerOn={powerOn}
                powerOff={powerOff}
                title='get focused, without the jitters'
                subtitle='Enhance productivity without overstimulation'
                primary={true}
              />
            </HeroSliderContent>
          )}
        </AnimatePresence>
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
        <AnimatePresence initial={false}>
          {powerOff && (
            <HeroSliderContent powerOff={powerOff}>
              <HeroTextContent
                powerOn={powerOn}
                powerOff={powerOff}
                title="get a better night's sleep"
                subtitle='Sleep better, without risk of dependency'
              />
              <ImageContainer className='img__container' variants={rightToLeft}>
                <img src='/assets/power-off-bg.jpg' alt='power-off-bg' />
              </ImageContainer>
            </HeroSliderContent>
          )}
        </AnimatePresence>
      </HeroContent>
    </>
  );
};

export default HeroDesktop;
