import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const ContentContainer = styled(motion.div)`
  position: relative;

  & .content {
    width: 52rem;

    @media (max-width: 1440px) {
      width: 45.9rem;
    }

    @media (max-width: 950px) {
      width: 30.9rem;
    }

    @media (max-width: 768px) {
      left: 25.5rem;
    }

    @media (max-width: 428px) {
      width: 26.8rem;
      text-align: center;
    }
  }
`;

export const Title = styled.h1`
  font-size: 7.4rem;
  line-height: 8rem;
  letter-spacing: 1.5px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 1rem;

  @media (max-width: 1440px) {
    font-size: 6rem;
    line-height: 7rem;
  }

  @media (max-width: 1280px) {
    font-size: 6rem;
    line-height: 7rem;
  }

  @media (max-width: 1024px) {
    font-size: 5rem;
    line-height: 5.5rem;
  }

  @media (max-width: 950px) {
    font-size: 4rem;
    line-height: 4rem;
  }

  @media (max-width: 428px) {
    font-size: 3.5rem;
    line-height: 3.5rem;
  }
`;

export const SubTitle = styled.p`
  margin-bottom: 3rem;
  text-transform: capitalize;
  font-size: 3rem;
  line-height: 3.5rem;
  letter-spacing: 1.5px;
  color: ${({ theme }) => theme.mountainMist};

  @media (max-width: 1440px) {
    font-size: 2rem;
    line-height: 2rem;
    margin-bottom: 2rem;
    width: 25rem;
  }

  @media (max-width: 1280px) {
    margin-bottom: 2rem;
  }

  @media (max-width: 428px) {
    font-size: 1.8rem;
    line-height: 1.8rem;
    width: 26.8rem;
  }
`;

export const BigTitle = styled.h1`
  font-size: 14rem;
  font-weight: bold;
  text-transform: uppercase;
  color: ${({ theme }) => theme.mountainMist};
  opacity: 8%;
  position: absolute;
  top: 50%;
  right: -22rem;
  transform: translateY(-50%) rotate(90deg);

  @media (max-width: 1440px) {
    font-size: 10rem;
    right: -13rem;
  }

  @media (max-width: 1280px) {
    display: none;
  }
`;
