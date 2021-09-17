import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.balticSea};
  padding: 6rem 0;

  & .container {
    h3 {
      text-transform: uppercase;
      font-size: 1.6rem;
      letter-spacing: 1px;
      color: ${({ theme }) => theme.lavenderPinocchio};
      margin-bottom: 1rem;
    }
  }

  & .footer {
    &__head {
      display: grid;
      grid-template-columns: 55% 45%;
      margin-bottom: 4.5rem;
    }

    &__copyright {
      text-align: center;

      p {
        color: ${({ theme }) => theme.blackEel};
        font-size: 1.6rem;
        letter-spacing: 1.24px;
        text-transform: uppercase;
      }
    }

    &__statement {
      padding: 2rem 4rem;
      border: 2px solid #686868;
      margin-top: 4.5rem;

      p {
        color: ${({ theme }) => theme.white};
        font-size: 1.4rem;
      }
    }
  }
`;
