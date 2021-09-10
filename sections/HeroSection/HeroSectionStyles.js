import styled, { css } from 'styled-components';

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

        .img__container {
          order: 2;
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
