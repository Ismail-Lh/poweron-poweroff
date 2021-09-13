import { Wrapper } from './HeroSmallScreenContentStyles';
import { HeroImage, HeroTextContent } from '@components';

const HeroSmallScreenContent = ({
  bgColor,
  imgSrc,
  imgAlt,
  title,
  subtitle,
  primary,
}) => {
  return (
    <Wrapper bgColor={bgColor} primary={primary}>
      <HeroImage imgSrc={imgSrc} imgAlt={imgAlt} />
      <HeroTextContent title={title} subtitle={subtitle} primary={primary} />
    </Wrapper>
  );
};

export default HeroSmallScreenContent;
