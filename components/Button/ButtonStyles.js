import styled, { css } from 'styled-components';

export const ButtonWrapper = styled.button`
  padding: 2.25rem 5.1rem;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.blueberry};
  width: 50%;
  font-size: 1.6rem;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1.7rem;
  letter-spacing: 1.5px;
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
