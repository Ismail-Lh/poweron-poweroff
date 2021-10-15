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

  @media (max-width: 1366px) {
    padding: 1.5rem 4rem;
    font-size: 1.4rem;
  }

  /* @media (max-width: 1024px) {
    padding: 2.25rem 3.1rem;
  }

  @media (max-width: 428px) {
    width: 19.6rem;
    letter-spacing: normal;
    padding: 1.5rem;
  } */

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
