import styled from 'styled-components';

export const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.balticSea};
  height: 54rem;
  width: 100vw;
  position: relative;
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
`;

export const Text = styled.p`
  font-size: 2.2rem;
  line-height: 2.2rem;
  color: ${({ theme }) => theme.white};
  text-align: center;

  &.lightGrey {
    color: ${({ theme }) => theme.mountainMist};
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

  .outlineCircle {
    width: 14.1rem;
    height: 14.1rem;
    border-radius: 50%;
    background-color: transparent;
    border: 4px solid #fff;
    display: grid;
    place-content: center;

    svg {
      width: 10rem;
      height: 10rem;
      fill: ${({ theme }) => theme.white};
    }
  }
`;
