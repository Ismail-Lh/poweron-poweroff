import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100%;
  background-color: ${({ bgColor }) => bgColor};
  padding: 11rem 0;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;

  @media (max-width: 750px) {
    display: none;
  }

  & .product__feature-text,
  & .product__feature-img {
    display: block;
  }

  & .product__feature-text {
    h3,
    p {
      color: ${({ theme }) => theme.white};
    }

    h3 {
      font-size: 3.2rem;
      line-height: 3.8rem;
      font-weight: 500;
      width: 17ch;
    }

    p {
      font-size: 2rem;
      line-height: 2.8rem;
      margin-top: 3px;
      margin-bottom: 2.5rem;
      width: 20ch;
    }

    button {
      width: 60%;
    }

    ${({ primary }) =>
      primary &&
      css`
        h3 {
          color: ${({ theme }) => theme.zeus};
        }

        p {
          color: ${({ theme }) => theme.smokeyGrey};
        }
      `}
  }

  & .product__feature-img {
    width: auto;

    img {
      max-width: 33.9rem;
    }
  }

  .nsf-badge {
    max-width: 7rem;
    margin-top: 3.5rem;
  }
`;
