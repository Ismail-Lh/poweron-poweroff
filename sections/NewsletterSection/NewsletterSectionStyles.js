import styled from 'styled-components';

export const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.balticSea};
  height: 54rem;
  width: 100vw;
  position: relative;

  @media (max-width: 1366px) {
    height: 45rem;
  }

  @media (max-width: 1024px) {
    height: 40rem;
  }

  @media (max-width: 320px) {
    height: 35rem;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-content: center;
`;

export const TextContainer = styled.div`
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 4.5rem;
  font-weight: bold;
  text-transform: uppercase;
  color: ${({ theme }) => theme.radicalRed};
  margin-bottom: 2rem;

  @media (max-width: 1366px) {
    font-size: 4rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 428px) {
    font-size: 3rem;
  }

  @media (max-width: 320px) {
    font-size: 2.5rem;
  }
`;

export const Text = styled.p`
  font-size: 2.2rem;
  line-height: 2.2rem;
  color: ${({ theme }) => theme.white};
  text-align: center;

  &.lightGrey {
    color: ${({ theme }) => theme.mountainMist};
  }

  @media (max-width: 1366px) {
    font-size: 2rem;
    line-height: 2rem;
  }

  @media (max-width: 428px) {
    font-size: 1.6rem;
    line-height: 1.6rem;
  }

  @media (max-width: 320px) {
    font-size: 1.4rem;
    line-height: 1.4rem;
  }
`;

export const IconContainer = styled.div`
  width: 16.5rem;
  height: 16.5rem;
  border-radius: 50%;
  background-image: linear-gradient(to right, #3c3ea9, #fc345c);
  display: grid;
  place-content: center;
  position: absolute;
  top: -8.25rem;
  left: 50%;
  transform: translate(-50%);

  @media (max-width: 1366px) {
    width: 8.6rem;
    height: 8.6rem;
    top: -4.3rem;
  }

  @media (max-width: 768px) {
    width: 7.5rem;
    height: 7.5rem;
    top: -3.75rem;
    left: 75%;
  }

  @media (max-width: 428px) {
    left: 50%;
  }

  @media (max-width: 375px) {
    width: 5rem;
    height: 5rem;
    top: -2.5rem;
  }

  .outlineCircle {
    width: 14.1rem;
    height: 14.1rem;
    border-radius: 50%;
    background-color: transparent;
    border: 4px solid #fff;
    display: grid;
    place-content: center;

    @media (max-width: 1366px) {
      width: 7.375rem;
      height: 7.375rem;
    }

    @media (max-width: 768px) {
      width: 6.275rem;
      height: 6.275rem;
    }

    @media (max-width: 375px) {
      width: 4rem;
      height: 4rem;
      border: 2px solid #fff;
    }

    svg {
      width: 10rem;
      height: 10rem;
      fill: ${({ theme }) => theme.white};

      @media (max-width: 1366px) {
        width: 5.231rem;
        height: 5.231rem;
      }

      @media (max-width: 768px) {
        width: 4.5rem;
        height: 4.5rem;
      }

      @media (max-width: 375px) {
        width: 2.5rem;
        height: 2.5rem;
      }
    }
  }
`;
