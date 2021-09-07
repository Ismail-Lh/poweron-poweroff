import styled from 'styled-components';

export const Header = styled.header`
  padding: 4rem 0 3.6rem 0;

  @media (max-width: 1024px) {
    padding: 1.5rem 0;
  }

  .container {
    max-width: 134.2rem;
  }

  .navbar {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;

    &__btn {
      height: 2.5rem;
      width: 2.5rem;

      @media (max-width: 525px) {
        width: 2rem;
        height: 2rem;
      }
    }
  }

  .cart,
  .menu {
    display: none;

    @media (max-width: 1024px) {
      display: block;
    }
  }

  .cart {
    @media (max-width: 1024px) {
      display: flex;
      justify-content: flex-end;
    }
  }
`;
