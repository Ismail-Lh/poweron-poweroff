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
  grid-template-columns: 40% auto;
  grid-template-rows: calc(100vh - 10.5rem);
  align-items: center;

  @media (max-width: 1440px) {
    grid-template-rows: calc(100vh - 8rem);
  }

  @media (max-width: 1024px) {
    grid-template-columns: 50% auto;
  }

  @media (max-width: 850px) {
    grid-template-columns: 35% auto;
    grid-template-rows: calc(100vh - 5.5rem);
  }

  @media (max-width: 428px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 3rem;
  }

  @media (max-width: 390px) {
    gap: 2rem;
  }
`;

export const ImageContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 41.291rem;
  height: 100%;

  @media (max-width: 1440px) and (max-height: 900px) {
    width: 35.5rem;
  }

  @media (max-width: 1366px) {
    width: 29.24rem;
  }

  @media (max-width: 850px) {
    display: none;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;
