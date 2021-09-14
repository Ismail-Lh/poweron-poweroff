/* eslint-disable @next/next/no-img-element */

import { Wrapper } from './HeroImageStyles';

const HeroImage = ({ imgSrc, imgAlt }) => {
  return (
    <Wrapper className='product__feature-img'>
      <img src={imgSrc} alt={imgAlt} className='product__img' />
    </Wrapper>
  );
};

export default HeroImage;
