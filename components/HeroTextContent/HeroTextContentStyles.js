import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const ContentContainer = styled(motion.div)`
  display: grid;
  place-content: center;

  & .content {
    width: 52rem;

    @media (max-width: 1024px) {
      width: 42.1rem;
    }

    @media (max-width: 768px) {
      margin-left: 13rem;
    }
  }

  /* ${({ powerOn }) =>
    powerOn &&
    css`
      margin-left: 15rem;
    `}

  ${({ powerOff }) =>
    powerOff &&
    css`
      margin-right: 15rem;
    `} */
`;

export const Title = styled.h1`
  font-size: 7.4rem;
  line-height: 8rem;
  letter-spacing: 1.5px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 1rem;

  @media (max-width: 1366px) {
    font-size: 7rem;
  }

  @media (max-width: 1280px) {
    font-size: 6rem;
    line-height: 7rem;
  }

  @media (max-width: 1024px) {
    font-size: 5.5rem;
    line-height: 6rem;
  }

  /* @media (max-width: 1024px) {
    font-size: 3rem;
    line-height: 3rem;
    width: auto;
    margin: 1rem 0;
  }

  @media (max-width: 375px) {
    font-size: 2.5rem;
    line-height: 2.5rem;
    letter-spacing: 0;
  } */
`;

export const SubTitle = styled.p`
  margin-bottom: 3rem;
  text-transform: capitalize;
  font-size: 3rem;
  line-height: 3.5rem;
  letter-spacing: 1.5px;
  color: ${({ theme }) => theme.mountainMist};
  width: 38.2rem;

  @media (max-width: 1280) {
    margin-bottom: 2rem;
  }

  /* @media (max-width: 1024px) {
    font-size: 1.8rem;
    line-height: 2.4rem;
    margin: 0 0 1rem 0;
  } */
`;
