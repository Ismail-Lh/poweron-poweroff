import styled from 'styled-components';

export const Wrapper = styled.footer`
  background-color: ${({ theme }) => theme.whiteLilac};
  height: 54rem;

  p {
    font-size: 2.2rem;
    color: ${({ theme }) => theme.mountainMist};
  }

  & .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;

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

  .footer {
    &__statement {
      .logo {
        height: 4.5rem;
      }

      .text {
        line-height: 2.5rem;
        margin: 2.5rem 0;
      }
    }
  }

  .mediaIcons {
    display: flex;
    gap: 2rem;

    a {
      width: 3.5rem;
      height: 3.5rem;
    }
  }

  svg,
  img {
    height: 100%;
    width: 100%;
  }
`;
