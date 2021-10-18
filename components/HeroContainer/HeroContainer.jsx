/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
// import { useState } from 'react';
// import { AnimatePresence } from 'framer-motion';
// import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

// import { leftToRight, rightToLeft } from '@utils/animations';
import { HeroText, HeroImage } from '@components';
import Blob from '../../svg/Blob';

import {
  Wrapper,
  ContentContainer,
  ImageContainer,
} from './HeroContainerStyles';

const HeroContainer = props => {
  return (
    <Wrapper powerOff={props.powerOff}>
      <ContentContainer>
        <HeroImage {...props} />

        <HeroText {...props} />
      </ContentContainer>

      <ImageContainer>
        <img src={props.bgImgSrc} alt={props.bgImgAlt} />
      </ImageContainer>
    </Wrapper>
  );
};

export default HeroContainer;
