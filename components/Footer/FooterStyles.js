import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.balticSea};
  padding: 6rem 0;

  @media (max-width: 425px) {
    padding: 4rem 0;
  }

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

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
        row-gap: 2rem;
        margin-bottom: 3.5rem;
      }

      @media (max-width: 425px) {
        margin-bottom: 2.5rem;
      }
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

      @media (max-width: 768px) {
        margin-top: 3.5rem;
      }

      @media (max-width: 425px) {
        margin-top: 2.5rem;
        padding: 2rem;
      }

      p {
        color: ${({ theme }) => theme.white};
        font-size: 1.4rem;
      }
    }
  }
`;
