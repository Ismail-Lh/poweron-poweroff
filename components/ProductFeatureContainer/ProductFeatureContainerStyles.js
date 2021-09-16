import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  padding-left: 4rem;
`;

export const ProductFeature = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.white};

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
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export const Content = styled.div``;

export const Title = styled.h4`
  text-transform: uppercase;
  font-size: 1.6rem;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
`;

export const Text = styled.p`
  font-size: 1.4rem;
  line-height: 2.2rem;
`;
