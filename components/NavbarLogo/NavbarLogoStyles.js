import styled from 'styled-components';

export const Logo = styled.div`
  display: grid;
  place-items: center;

  svg {
    width: 29.6rem;
    height: 3.5rem;

    @media (max-width: 428px) {
      width: 19rem;
      height: 2.247rem;
    }

    @media (max-width: 320px) {
      width: 13.1rem;
      height: 1.547rem;
    }
  }
`;
