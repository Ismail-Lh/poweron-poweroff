import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const ContentContainer = styled(motion.div)`
  display: grid;
  place-content: center;

  @media (max-width: 1024px) {
    text-align: center;
    place-items: center;

    & .btn {
      font-size: 1.2rem;
      padding: 1.2rem 3rem 0.9rem 3rem;
      width: auto;
    }
  }

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

  @media (max-width: 1024px) {
    font-size: 3rem;
    line-height: 3rem;
    width: auto;
    margin: 1rem 0;
  }

  @media (max-width: 375px) {
    font-size: 2.5rem;
    line-height: 2.5rem;
    letter-spacing: 0;
  }
`;

export const SubTitle = styled.p`
  margin: 2rem 0;
  text-transform: capitalize;
  font-size: 2.4rem;
  line-height: 3rem;
  width: 20ch;

  @media (max-width: 1024px) {
    font-size: 1.8rem;
    line-height: 2.4rem;
    margin: 0 0 1rem 0;
  }
`;
