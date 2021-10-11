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
`;

export const NavbarContainer = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
