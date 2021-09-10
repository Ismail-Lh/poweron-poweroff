/* eslint-disable @next/next/no-img-element */
import { Button } from '@components';
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
}) => {
  return (
    <Wrapper powerOn={powerOn}>
      <ImageContainer className='img__container'>
        <img src={imgSrc} alt={imgAlt} />
      </ImageContainer>
      <ContentContainer powerOn={powerOn} powerOff={powerOff}>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
        <Button route='/' link='learn more' powerOn={powerOn} />
      </ContentContainer>
    </Wrapper>
  );
};

export default HeroSliderContent;
