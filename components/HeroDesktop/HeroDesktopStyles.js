import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

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
