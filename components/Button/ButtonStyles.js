import styled, { css } from 'styled-components';

export const ButtonWrapper = styled.button`
  padding: 1rem 3rem;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.blueberry};
  width: 45%;
  font-size: 1.6rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.65px;
  line-height: 1.64;
  border: 3px solid transparent;
  border-radius: 100px;
  transition: all 0.3s ease-in;

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
