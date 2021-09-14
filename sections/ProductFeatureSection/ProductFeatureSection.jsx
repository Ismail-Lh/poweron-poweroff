/* eslint-disable @next/next/no-img-element */
import { HeroImage, HeroTextContent } from '@components';
import { Wrapper, GridContainer } from './ProductFeatureSectionStyles';

const ProductFeatureSection = ({
  bgColor,
  title,
  subtitle,
  imgSrc,
  imgAlt,
  primary,
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
      </GridContainer>
    </Wrapper>
  );
};

export default ProductFeatureSection;
