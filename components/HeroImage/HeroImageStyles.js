import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-content: center;
  justify-content: flex-end;
  z-index: 1;
  overflow: hidden;

  @media (max-width: 768px) {
    align-items: center;
  }

  @media (max-width: 428px) {
    display: block;
    width: 18.2rem;
    height: 32.381rem;
  }

  img {
    width: 45rem;
    height: 80rem;

    @media (max-width: 1366px) {
      width: 26.032rem;
      height: 46.3rem;
    }

    @media (max-width: 768px) {
      transform: translateX(-50%);
    }

    @media (max-width: 768px) and (max-height: 1024px) {
      width: 200%;
      height: 100%;
    }

    @media (max-width: 768px) and (max-height: 768px) {
      width: 150%;
      height: 90%;
    }

    @media (max-width: 428px) {
      width: 100%;
      height: 100%;
      transform: translateX(0);
    }
  }
`;
