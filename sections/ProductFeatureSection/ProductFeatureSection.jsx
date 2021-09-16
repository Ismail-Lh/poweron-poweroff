/* eslint-disable @next/next/no-img-element */
import {
  HeroImage,
  HeroTextContent,
  ProductFeatureContainer,
} from '@components';
import { Wrapper, GridContainer } from './ProductFeatureSectionStyles';

const ProductFeatureSection = ({
  bgColor,
  title,
  subtitle,
  imgSrc,
  imgAlt,
  primary,
  productFeature,
}) => {
  return (
    <Wrapper bgColor={bgColor}>
      <GridContainer className='container' primary={primary}>
        <div>
          <HeroTextContent
            title={title}
            subtitle={subtitle}
            primary={primary}
          />

          <img
            src='/assets/nsf-badge.png'
            alt='nsf-badge'
            className='nsf-badge'
          />
        </div>

        <HeroImage imgSrc={imgSrc} imgAlt={imgAlt} />
        <ProductFeatureContainer
          productFeature={productFeature}
          primary={primary}
        />
      </GridContainer>
    </Wrapper>
  );
};

export default ProductFeatureSection;
