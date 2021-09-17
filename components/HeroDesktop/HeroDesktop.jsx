/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

import { HeroImage, HeroSliderContent, HeroTextContent } from '@components';
import { leftToRight, rightToLeft } from '@utils/animations';

import { HeroContent, ImageContainer } from './HeroDesktopStyles';
import { powerOffContent, powerOnContent } from '@utils/constants';

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
        <HeroImage {...powerOnContent} />
        <AnimatePresence initial={false}>
          {powerOn && (
            <HeroSliderContent powerOn={powerOn}>
              <ImageContainer className='img__container' variants={leftToRight}>
                <img src='/assets/power-on-bg.jpg' alt='power-on-bg' />
              </ImageContainer>
              <HeroTextContent
                powerOn={powerOn}
                powerOff={powerOff}
                {...powerOnContent}
              />
            </HeroSliderContent>
          )}
        </AnimatePresence>
        <div className='arrow arrow__left'>
          <BsArrowLeft />
        </div>
      </HeroContent>

      <HeroContent
        bgColor='#1d1d1d'
        powerOff={powerOff}
        onMouseEnter={() => setPowerOff(true)}
        onMouseLeave={() => setPowerOff(false)}
        className='right'>
        <HeroImage {...powerOffContent} />
        <AnimatePresence initial={false}>
          {powerOff && (
            <HeroSliderContent powerOff={powerOff}>
              <HeroTextContent
                powerOn={powerOn}
                powerOff={powerOff}
                {...powerOffContent}
              />
              <ImageContainer className='img__container' variants={rightToLeft}>
                <img src='/assets/power-off-bg.jpg' alt='power-off-bg' />
              </ImageContainer>
            </HeroSliderContent>
          )}
        </AnimatePresence>
        <div className='arrow arrow__right'>
          <BsArrowRight />
        </div>
      </HeroContent>
    </>
  );
};

export default HeroDesktop;
