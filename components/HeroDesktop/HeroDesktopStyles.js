import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 41.291rem auto;

  @media (max-width: 1366px) {
    grid-template-columns: 28.602rem auto;
  }

  @media (max-width: 1280px) {
    grid-template-columns: 26.988rem auto;
  }

  /* & .arrow {
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
    `} */
`;

export const ImageContainer = styled(motion.div)`
  &.product__img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 45rem;
    height: 80rem;

    @media (max-width: 1366px) {
      width: 30.532rem;
      height: 54.4rem;
    }

    @media (max-width: 1280px) {
      width: 28.2rem;
      height: 50.244rem;
    }

    &-on {
      left: 18.8rem;

      @media (max-width: 1366px) {
        left: 13.12rem;
      }

      @media (max-width: 1280px) {
        left: 12.89rem;
      }
    }
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export const BigTitle = styled.h1`
  font-size: 16.1rem;
  font-weight: bold;
  text-transform: uppercase;
  color: ${({ theme }) => theme.mountainMist};
  opacity: 8%;
  position: absolute;
  top: 50%;
  right: -22rem;
  transform: translateY(-50%) rotate(90deg);

  @media (max-width: 1366px) {
    font-size: 11.5rem;
    right: -14rem;
  }

  @media (max-width: 1280px) {
    font-size: 10rem;
    right: -12rem;
  }
`;
