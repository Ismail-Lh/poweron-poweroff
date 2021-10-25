import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-content: center;
  justify-content: flex-end;
  z-index: 1;
  position: relative;

  @media (max-width: 768px) {
    align-items: center;
  }

  @media (max-width: 428px) {
    display: block;
    width: 18.2rem;
    height: 32.381rem;
  }

  img {
    width: 50%;
    height: auto;

    @media (max-width: 1500px) {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }

    @media (max-width: 1500px) and (max-height: 900px) {
      left: 22rem;
    }

    @media (max-width: 1440px) {
      left: 21rem;
    }

    @media (max-width: 1366px) {
      left: 15.2rem;
    }

    @media (max-width: 1280px) {
      left: 16rem;
    }

    @media (max-width: 1200px) {
      left: 17rem;
    }

    @media (max-width: 1024px) {
      width: 55%;
      left: 15rem;
    }

    @media (max-width: 950px) {
      left: 16rem;
    }

    @media (max-width: 850px) {
      top: 50%;
      left: 0;
      transform: translate(-50%, -50%);
    }

    @media (max-width: 850px) and (max-height: 1024px) {
      width: 120%;
    }

    @media (max-width: 768px) and (max-height: 1024px) {
      width: 140%;
    }

    @media (max-width: 850px) and (max-height: 663px) {
      width: 110%;
    }

    @media (max-width: 768px) and (max-height: 663px) {
      width: 120%;
    }

    @media (max-width: 650px) and (max-height: 663px) {
      width: 130%;
    }

    @media (max-width: 550px) and (max-height: 663px) {
      width: 145%;
    }

    @media (max-width: 428px) {
      width: 100%;
      height: 100%;
      top: 0;
      transform: translateX(0);
    }
  }
`;
