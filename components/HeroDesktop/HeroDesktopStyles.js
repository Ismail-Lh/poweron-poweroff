import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const HeroContent = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  background-color: ${({ bgColor }) => bgColor};
  transition: all 0.3s cubic-bezier(0.44, 0.13, 0.48, 0.87);

  & .arrow {
    position: absolute;
    top: 50%;
    right: 1.5rem;
    transform: translateY(-50%);
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.darkJungleGreen};
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      font-size: 2.5rem;
      fill: ${({ theme }) => theme.whiteLilac};
    }
  }

  &.right {
    & .arrow {
      left: 1.5rem;
      background-color: ${({ theme }) => theme.whiteLilac};

      svg {
        fill: ${({ theme }) => theme.darkJungleGreen};
      }
    }
  }

  ${({ powerOff }) =>
    powerOff &&
    css`
      &.right {
        width: 140%;

        & .product__img {
          transform: translateX(20rem);
        }

        & .arrow {
          &__right {
            display: none;
          }
        }
      }
    `}

  ${({ powerOn }) =>
    powerOn &&
    css`
      &.left {
        width: 140%;

        & .product__img {
          transform: translateX(-20rem);
        }

        & .arrow {
          &__left {
            display: none;
          }
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
