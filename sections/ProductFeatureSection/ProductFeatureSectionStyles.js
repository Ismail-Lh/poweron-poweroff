import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: ${({ bgColor }) => bgColor};
  position: relative;
  display: grid;
  place-content: center;

  @media (max-width: 1366px), (max-width: 428px) {
    height: 76.8rem;
  }

  @media (max-width: 768px) {
    height: 110vh;
  }

  @media (max-width: 428px) {
    height: 70rem;
  }

  @media (max-width: 375px) {
    height: 60rem;
  }

  .nsfBadge {
    position: absolute;
    left: 20.1rem;
    bottom: 5rem;
    width: 14.4rem;

    @media (max-width: 1366px) {
      width: 8.2rem;
      left: 4.2rem;
      bottom: 4.2rem;
    }

    @media (max-width: 1280px) {
      left: 2rem;
      bottom: 2rem;
    }

    @media (max-width: 768px) {
      width: 6rem;
      height: 7.4rem;
      left: 1rem;
    }

    @media (max-width: 375px) {
      width: 4rem;
      height: 5.4rem;
    }
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 56.6rem 45rem;
  align-items: center;
  justify-content: center;
  gap: 8rem;

  @media (max-width: 1366px) {
    grid-template-columns: 41.1rem 37.1rem;
    gap: 5rem;
  }

  @media (max-width: 1280px) {
    grid-template-columns: 40rem 37.1rem;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 31rem 37.1rem;
    gap: 4rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 80%;
    gap: 4rem;
  }

  @media (max-width: 428px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 428px) {
    display: none;
  }

  img {
    width: 39.4rem;
    height: 70.199rem;
    transform: rotate(15deg);
    z-index: 10;

    @media (max-width: 1366px) {
      width: 28.588rem;
      height: 50.936rem;
    }

    @media (max-width: 1280px) {
      width: 26.5rem;
      height: 47.215rem;
    }

    @media (max-width: 1024px) {
      width: 20.529rem;
      height: 36.576rem;
    }

    @media (max-width: 768px) {
      width: 23.74rem;
      height: 42.297rem;
    }
  }

  .svgContainer {
    width: 100%;
    height: 56.801rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    @media (max-width: 1366px) {
      height: 41.224rem;
    }

    @media (max-width: 1024px) {
      height: 32.182rem;
    }

    @media (max-width: 768px) {
      height: 37.216rem;
      width: 35.848rem;
    }

    svg {
      fill: ${({ theme }) => theme.radicalRed};

      ${({ powerOff }) =>
        powerOff &&
        css`
          fill: ${({ theme }) => theme.blueberry};
        `}
    }
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3rem !important;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
  }

  @media (max-width: 375px) {
    gap: 1rem;
  }

  h1 {
    color: ${({ theme }) => theme.darkJungleGreen};
    font-size: 4.5rem;
    font-weight: bold;
    text-transform: uppercase;
    margin-right: 9rem;

    @media (max-width: 1366px) {
      font-size: 4rem;
      margin-right: 6rem;
    }

    @media (max-width: 1280px) {
      font-size: 3.5rem;
      margin-right: 4rem;
    }

    @media (max-width: 768px) {
      font-size: 3rem;
      margin-right: 0;
    }

    @media (max-width: 428px) {
      font-size: 2.5rem;
      text-align: center;
    }

    @media (max-width: 375px) {
      font-size: 2rem;
    }

    @media (max-width: 320px) {
      font-size: 1.5rem;
    }

    ${({ powerOff }) =>
      powerOff &&
      css`
        color: ${({ theme }) => theme.white};
      `}
  }
`;
