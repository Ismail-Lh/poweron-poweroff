import styled, { css } from 'styled-components';

export const MenuContainer = styled.div`
  color: #fff;

  .close__btn {
    padding: 1.5rem 3rem;
    button {
      width: 2rem;
      height: 2rem;

      svg path {
        fill: #fff;
      }
    }
  }
`;

export const MenuList = styled.ul`
  ${({ secondary }) =>
    secondary &&
    css`
      margin-top: 1.5rem;
    `}
`;

export const MenuListItem = styled.li`
  text-transform: capitalize;
  font-size: 1.8rem;
  border-bottom: 1px solid ${({ theme }) => theme.dune};

  &:first-of-type {
    background-color: ${({ theme }) => theme.radicalRed};
  }

  &:nth-of-type(2) {
    background-color: ${({ theme }) => theme.blueberry};
  }

  a {
    padding: 1.5rem 3rem;
    display: block;
    transition: all 0.2s ease-in;

    &:hover {
      opacity: 0.7;
    }
  }

  ${({ secondary }) =>
    secondary &&
    css`
      border-bottom: 0;
      font-size: 1.4rem;
      background-color: transparent !important;

      a {
        padding: 0.2rem 0 0.2rem 3rem;
      }
    `}
`;
