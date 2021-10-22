import styled from 'styled-components';

export const Wrapper = styled.footer`
  background-color: ${({ theme }) => theme.whiteLilac};
  height: 54rem;

  @media (max-width: 1366px) {
    height: 45rem;
  }

  @media (max-width: 428px) {
    height: 70rem;
  }

  p {
    font-size: 2.2rem;
    color: ${({ theme }) => theme.mountainMist};

    @media (max-width: 1366px) {
      font-size: 1.6rem;
    }
  }

  & .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;

    @media (max-width: 428px) {
      text-align: center;
    }

    .copyrightText {
      margin-top: 2rem;
      text-align: center;
    }
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 40rem auto;
  justify-content: space-between;
  padding-bottom: 7rem;
  border-bottom: 1px solid #8d8d8d;

  @media (max-width: 1366px) {
    padding-bottom: 5.5rem;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  @media (max-width: 428px) {
    padding-bottom: 4rem;
  }

  .footer {
    &__statement {
      @media (max-width: 1024px) {
        display: flex;
        flex-direction: column;
      }

      @media (max-width: 428px) {
        align-items: center;
      }

      .logo {
        height: 4.5rem;
        width: fit-content;

        @media (max-width: 1366px) {
          height: 2.5rem;
        }
      }

      .text {
        line-height: 2.5rem;
        margin: 2.5rem 0;

        @media (max-width: 1366px) {
          line-height: 2rem;
          margin: 1.5rem 0;
        }
      }
    }
  }

  .mediaIcons {
    display: flex;
    gap: 2rem;

    @media (max-width: 1366px) {
      gap: 1rem;
    }

    a {
      width: 3.5rem;
      height: 3.5rem;

      @media (max-width: 1366px) {
        height: 2.75rem;
        width: 2.75rem;
      }
    }
  }

  svg,
  img {
    height: 100%;
    width: 100%;
  }
`;
