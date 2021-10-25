import styled, { css } from 'styled-components';

export const ButtonWrapper = styled.button`
  padding: 2.25rem 5.1rem;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.blueberry};
  font-size: 1.6rem;
  font-weight: bold;
  text-transform: uppercase;
  border: 3px solid transparent;
  border-radius: 100px;
  transition: all 0.3s ease-in;

  @media (max-width: 1440px) {
    padding: 1.5rem 4rem;
    font-size: 1.4rem;
  }

  @media (max-width: 428px) {
    padding: 1rem 3rem;
  }

  &:hover {
    border: 3px solid ${({ theme }) => theme.blueberry};
    background-color: transparent;
  }

  ${({ primary }) =>
    primary &&
    css`
      background-color: ${({ theme }) => theme.radicalRed};

      &:hover {
        border: 3px solid ${({ theme }) => theme.radicalRed};
        color: ${({ theme }) => theme.radicalRed};
      }
    `}
`;
