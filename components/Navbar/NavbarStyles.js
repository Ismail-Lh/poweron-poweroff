import styled from 'styled-components';

export const Header = styled.header`
  padding: 4rem 0 3.6rem 0;

  @media (max-width: 1024px) {
    padding: 1.5rem 0;
  }

  .container {
    max-width: 134.2rem;
  }
`;

export const NavbarContainer = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
`;
