import styled from 'styled-components';

export const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.white};
  z-index: 9000;
  padding: 3.5rem 5rem;

  @media (max-width: 1366px) {
    padding: 3rem 5rem;
  }

  @media (max-width: 1280px) {
    padding: 2.5rem 4rem;
  }

  @media (max-width: 1024px) {
    padding: 2rem 5rem;
  }

  @media (max-width: 428px) {
    padding: 2.5rem 2.2rem;
    height: 7.5rem;
  }

  @media (max-width: 390px) {
    padding: 2rem;
    height: 6.5rem;
  }

  @media (max-width: 320px) {
    padding: 1.5rem;
    height: 5.5rem;
  }
`;

export const NavbarContainer = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
