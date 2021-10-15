import styled from 'styled-components';

export const Wrapper = styled.section`
  height: calc(100vh - 10.5rem);
  width: 100vw;

  @media (max-width: 1366px) {
    height: calc(100vh - 8rem);
  }

  @media (max-width: 1024px) {
    height: calc(100vh - 6rem);
  }

  @media (max-width: 768px) {
    height: calc(100vh - 5.5rem);
  }

  /* @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 50rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  } */
`;
