/* eslint-disable @next/next/no-img-element */
import { Button, ProductFeatureContainer } from '@components';
import {
  Wrapper,
  GridContainer,
  ImageContainer,
  TitleContainer,
} from './ProductFeatureSectionStyles';

import Blob from '../../svg/Blob';

const ProductFeatureSection = ({
  bgColor,
  primary,
  powerOff,
  title,
  productImgAlt,
  productImgSrc,
  productFeature,
}) => {
  return (
    <Wrapper bgColor={bgColor} powerOff={powerOff}>
      <GridContainer className='container' primary={primary}>
        <ImageContainer powerOff={powerOff}>
          <div className='svgContainer'>
            <Blob />
          </div>
          <img src={productImgSrc} alt={productImgAlt} />
        </ImageContainer>

        <ProductFeatureContainer
          productFeature={productFeature}
          primary={primary}
        />
      </GridContainer>

      <TitleContainer className='container' powerOff={powerOff}>
        <h1>{title}</h1>
        <Button route='/' link='lear more' primary={primary} />
      </TitleContainer>

      <img src='assets/nsf-badge.png' alt='nsf-badge' className='nsfBadge' />
    </Wrapper>
  );
};

export default ProductFeatureSection;
