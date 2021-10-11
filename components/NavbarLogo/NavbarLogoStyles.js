import styled from 'styled-components';

export const Logo = styled.div`
  display: grid;
  place-items: center;

  svg {
    width: 29.6rem;
    height: 3.5rem;

    @media (max-width: 1024px) {
      width: 25rem;
    }

    @media (max-width: 750px) {
      width: 22.5rem;
    }

    @media (max-width: 525px) {
      width: 17.5rem;
    }
  }
`;
