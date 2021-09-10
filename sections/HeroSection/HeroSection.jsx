/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import { Button, HeroImage, HeroSliderContent } from '@components';
import { fadeIn, leftToRight, rightToLeft } from '@utils/animations';

import {
  Wrapper,
  HeroContent,
  ImageContainer,
  Title,
  SubTitle,
  ContentContainer,
} from './HeroSectionStyles';

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
        <AnimatePresence initial={false}>
          {powerOn && (
            <HeroSliderContent powerOn={powerOn}>
              <ImageContainer className='img__container' variants={leftToRight}>
                <img src='/assets/power-on-bg.jpg' alt='power-on-bg' />
              </ImageContainer>
              <ContentContainer
                powerOn={powerOn}
                powerOff={powerOff}
                variants={fadeIn}>
                <Title>get focused, without the jitters</Title>
                <SubTitle>
                  Enhance productivity without overstimulation
                </SubTitle>
                <Button route='/' link='learn more' powerOn={powerOn} />
              </ContentContainer>
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
              <ContentContainer
                powerOn={powerOn}
                powerOff={powerOff}
                variants={fadeIn}>
                <Title>get a better night's sleep</Title>
                <SubTitle>Sleep better, without risk of dependency</SubTitle>
                <Button route='/' link='learn more' />
              </ContentContainer>
              <ImageContainer className='img__container' variants={rightToLeft}>
                <img src='/assets/power-off-bg.jpg' alt='power-off-bg' />
              </ImageContainer>
            </HeroSliderContent>
          )}
        </AnimatePresence>
      </HeroContent>
    </Wrapper>
  );
};

export default HeroSection;
