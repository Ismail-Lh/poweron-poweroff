import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.section`
  display: flex;
  height: 76rem;
  width: 100vw;
`;

export const HeroContent = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  background-color: ${({ bgColor }) => bgColor};
  transition: all 0.3s cubic-bezier(0.44, 0.13, 0.48, 0.87);

  ${({ powerOff }) =>
    powerOff &&
    css`
      &.right {
        width: 140%;

        img.product__img {
          transform: translateX(60%);
        }
      }
    `}

  ${({ powerOn }) =>
    powerOn &&
    css`
      &.left {
        width: 140%;

        img.product__img {
          transform: translateX(-60%);
        }
      }
    `}
`;

export const ImageContainer = styled(motion.div)`
  img {
    width: 100%;
    height: 100%;
  }
`;

export const ContentContainer = styled(motion.div)`
  display: grid;
  place-content: center;

  ${({ powerOn }) =>
    powerOn &&
    css`
      margin-left: 15rem;
    `}

  ${({ powerOff }) =>
    powerOff &&
    css`
      margin-right: 15rem;
    `}
`;

export const Title = styled.h3`
  font-size: 6.4rem;
  line-height: 6.4rem;
  letter-spacing: -2px;
  font-weight: 400;
  text-transform: uppercase;
  width: 12ch;
`;

export const SubTitle = styled.p`
  margin: 2rem 0;
  text-transform: capitalize;
  font-size: 2.4rem;
  line-height: 3rem;
  width: 20ch;
`;
