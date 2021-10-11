/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

import { HeroImage, HeroSliderContent, HeroTextContent } from '@components';
import { leftToRight, rightToLeft } from '@utils/animations';

import { HeroContent, ImageContainer, BigTitle } from './HeroDesktopStyles';
import { powerOffContent, powerOnContent } from '@utils/constants';

const HeroDesktop = () => {
  const [powerOn, setPowerOn] = useState(false);
  const [powerOff, setPowerOff] = useState(false);

  return (
    <>
      <HeroSliderContent powerOn={powerOn}>
        <HeroContent>
          <ImageContainer className='img__container' variants={leftToRight}>
            <img src='/assets/power-on-bg.jpg' alt='power-on-bg' />
          </ImageContainer>

          <HeroTextContent
            powerOn={powerOn}
            powerOff={powerOff}
            {...powerOnContent}
          />
        </HeroContent>
        <ImageContainer className='product__img product__img-on'>
          <img src='/assets/power-on-product.png' alt='power-on-product' />
        </ImageContainer>
        <BigTitle>poweron</BigTitle>
      </HeroSliderContent>

      {/* <HeroSliderContent powerOff={powerOff}>
        <HeroTextContent
          powerOn={powerOn}
          powerOff={powerOff}
          {...powerOffContent}
        />
        <ImageContainer className='img__container' variants={rightToLeft}>
          <img src='/assets/power-off-bg.jpg' alt='power-off-bg' />
        </ImageContainer>
      </HeroSliderContent> */}
    </>
  );
};

export default HeroDesktop;
