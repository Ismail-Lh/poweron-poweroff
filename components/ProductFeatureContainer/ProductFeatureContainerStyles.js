import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  padding-left: 4rem;

  @media (max-width: 428px) {
    padding: 0;
  }
`;

export const ProductFeature = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.white};

  @media (max-width: 375px) {
    margin-bottom: 2rem;
  }

  @media (max-width: 320px) {
    margin-bottom: 1.5rem;
  }

  svg {
    fill: ${({ theme }) => theme.blueberry};
  }

  ${({ primary }) =>
    primary &&
    css`
      color: ${({ theme }) => theme.zeus};

      svg {
        fill: ${({ theme }) => theme.radicalRed};
      }
    `}
`;

export const Icon = styled.div`
  svg {
    width: 3rem;
    height: 3rem;

    @media (max-width: 1366px) {
      width: 2.5rem;
      height: 2.5rem;
    }

    @media (max-width: 428px) {
      width: 2rem;
      height: 2rem;
    }

    @media (max-width: 320px) {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;

export const Content = styled.div``;

export const Title = styled.h4`
  text-transform: uppercase;
  font-size: 1.8rem;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;

  @media (max-width: 428px) {
    font-size: 1.6rem;
  }

  @media (max-width: 320px) {
    font-size: 1.5rem;
  }
`;

export const Text = styled.p`
  font-size: 1.6rem;
  line-height: 2.2rem;

  @media (max-width: 428px) {
    font-size: 1.4rem;
    line-height: 1.8rem;
  }

  @media (max-width: 320px) {
    font-size: 1.2rem;
    line-height: 1.4rem;
  }
`;
