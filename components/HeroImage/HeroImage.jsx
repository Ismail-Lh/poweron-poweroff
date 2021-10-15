/* eslint-disable @next/next/no-img-element */

import { Wrapper } from './HeroImageStyles';

const HeroImage = ({ productImgSrc, productImgAlt }) => {
  return (
    <Wrapper>
      <img src={productImgSrc} alt={productImgAlt} />
    </Wrapper>
  );
};

export default HeroImage;
