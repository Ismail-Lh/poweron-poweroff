import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 50%;
  height: 100%;
  display: grid;
  place-items: center;
  background-color: ${({ bgColor }) => bgColor};
  transition: all 0.3s cubic-bezier(0.44, 0.13, 0.48, 0.87);

  ${({ powerOn }) =>
    powerOn &&
    css`
      &:first-child {
        width: 140%;
      }
    `}

  ${({ powerOff }) =>
    powerOff &&
    css`
      &:nth-child(2) {
        width: 140%;
      }
    `}

  img {
    max-width: 30rem;
  }
`;

// export const ContentContainer = styled.div``;
// export const Content = styled.div``;

// export const ImageContainer = styled.div``;
