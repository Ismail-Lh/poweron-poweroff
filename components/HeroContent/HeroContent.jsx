import Image from 'next/image';

import {
  Wrapper,
  ImageContainer,
  ContentContainer,
  Content,
} from './HeroContentStyles';

const HeroContent = ({
  imgSrc,
  imgAlt,
  bgColor,
  powerOn,
  powerOff,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  return (
    <Wrapper
      bgColor={bgColor}
      powerOn={powerOn}
      powerOff={powerOff}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      {/* <ContentContainer>
        <Content>
          <ImageContainer
            style={{ position: 'relative', height: 'auto', width: '30rem' }}>
            <Image src={imgSrc} alt={imgAlt} layout='fill' />
          </ImageContainer>
        </Content>
      </ContentContainer> */}
      <img src={imgSrc} alt={imgAlt} />
    </Wrapper>
  );
};

export default HeroContent;
