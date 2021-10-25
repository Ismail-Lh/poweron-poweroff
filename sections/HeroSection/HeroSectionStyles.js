import styled from 'styled-components';

export const Wrapper = styled.section`
  height: calc(100vh - 10.5rem);
  width: 100vw;

  @media (max-width: 1440px) {
    height: calc(100vh - 8rem);
  }

  @media (max-width: 1024px) {
    height: calc(100vh - 6rem);
  }

  @media (max-width: 850px) {
    height: calc(100vh - 5.5rem);
  }

  @media (max-width: 428px) {
    padding: 2rem 0;
    display: grid;
    place-content: center;
  }

  @media (max-width: 320px) and (max-height: 568px) {
    height: fit-content;
  }
`;
