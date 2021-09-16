import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.balticSea};
  padding: 6rem 0;

  & .container {
    display: grid;
    grid-template-columns: 55% 45%;

    h3 {
      text-transform: uppercase;
      font-size: 1.6rem;
      letter-spacing: 1px;
      color: ${({ theme }) => theme.lavenderPinocchio};
      margin-bottom: 1rem;
    }
  }
`;
