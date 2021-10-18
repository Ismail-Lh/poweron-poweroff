import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
  color: ${({ theme }) => theme.balticSea};
  background-color: ${({ theme }) => theme.whiteLilac};
  position: relative;
  height: 100%;
  width: 100%;

  ${({ powerOff }) =>
    powerOff &&
    css`
      background-color: ${({ theme }) => theme.darkJungleGreen};
      color: ${({ theme }) => theme.white};
    `}
`;

export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 63.8rem auto;
  grid-template-rows: calc(100vh - 10.5rem);
  align-items: center;
  gap: 3rem;

  @media (max-width: 1366px) {
    grid-template-columns: 42.252rem auto;
    grid-template-rows: calc(100vh - 8rem);
  }

  @media (max-width: 1024px) {
    grid-template-rows: calc(100vh - 6rem);
  }

  @media (max-width: 950px) {
    grid-template-columns: 38.252rem auto;
  }

  @media (max-width: 768px) {
    grid-template-columns: 23.4rem auto;
    grid-template-rows: calc(100vh - 5.5rem);
  }

  @media (max-width: 768px) and (max-height: 768px) {
    gap: 0;
  }

  @media (max-width: 428px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: calc(76.8rem - 5.5rem);
    gap: 4rem;
  }

  @media (max-width: 390px) {
    gap: 3rem;
  }

  @media (max-width: 375px) {
    gap: 2rem;
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
  position: absolute;
  top: 0;
  left: 0;
  width: 41.291rem;
  height: 100%;

  @media (max-width: 1366px) {
    width: 29.24rem;
  }

  @media (max-width: 950px) {
    width: 25rem;
  }

  @media (max-width: 768px) {
    display: none;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;
