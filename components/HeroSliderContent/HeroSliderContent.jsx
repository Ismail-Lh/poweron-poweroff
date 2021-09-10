/* eslint-disable @next/next/no-img-element */
import { Button } from '@components';
import { leftToRight, rightToLeft, stagger, fadeIn } from '@utils/animations';
import {
  Wrapper,
  ImageContainer,
  ContentContainer,
  Title,
  SubTitle,
} from './HeroSliderContentStyles';

const HeroSliderContent = ({
  title,
  subtitle,
  imgSrc,
  imgAlt,
  powerOn,
  powerOff,
  children,
}) => {
  const animation = powerOn ? leftToRight : rightToLeft;

  return (
    <Wrapper
      powerOn={powerOn}
      variants={stagger}
      initial='initial'
      animate='animate'
      exit='initial'>
      {/* <ImageContainer className='img__container' variants={animation}>
        <img src={imgSrc} alt={imgAlt} />
      </ImageContainer>
      <ContentContainer powerOn={powerOn} powerOff={powerOff} variants={fadeIn}>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
        <Button route='/' link='learn more' powerOn={powerOn} />
      </ContentContainer> */}
      {children}
    </Wrapper>
  );
};

export default HeroSliderContent;
