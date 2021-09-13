import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;

  @media (max-width: 1024px) {
    width: auto;
    height: auto;
    display: block;
  }

  img {
    max-width: 30rem;
    z-index: 100;
    transition: all 0.2s ease-in;

    @media (max-width: 1024px) {
      max-width: 11rem;
    }
  }
`;
