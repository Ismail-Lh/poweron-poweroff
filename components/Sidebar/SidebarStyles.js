import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
`;

export const SidebarContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 35%;
  background-color: ${({ theme }) => theme.darkJungleGreen};
  z-index: 1000;
  padding: 2rem 0;

  @media (max-width: 768px) {
    width: 50%;
  }

  @media (max-width: 525px) {
    width: 75%;
  }

  @media (max-width: 375px) {
    width: 100%;
  }

  ${({ cart }) =>
    cart &&
    css`
      right: 0;
    `};
`;
