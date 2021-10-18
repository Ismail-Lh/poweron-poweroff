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

  @media (max-width: 428px) {
    height: calc(76.8rem - 5.5rem);
  }
`;
