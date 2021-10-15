import styled from 'styled-components';

export const LinksContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: ${({ right }) => right && 'flex-end'};

  button {
    display: ${({ left }) => left && 'none'};

    @media (max-width: 1024px) {
      display: block;
    }

    height: 3rem;
    width: 3rem;

    @media (max-width: 1366px) {
      width: 2.5rem;
      height: 2.5rem;
    }

    svg {
      path {
        fill: ${({ theme }) => theme.mountainMist};
        transition: all 0.2s ease-in;

        @media (max-width: 1024px) {
          fill: ${({ theme }) => theme.stormDust};
        }

        &:hover {
          fill: ${({ theme }) => theme.stormDust};
        }
      }
    }

    @media (max-width: 525px) {
      width: 2rem;
      height: 2rem;
    }
  }
`;

export const List = styled.ul`
  display: flex;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const ListItem = styled.li`
  margin-right: 3rem;

  @media (max-width: 1366px) {
    margin-right: 2rem;
  }

  a {
    color: ${({ theme }) => theme.mountainMist};
    font-size: 1.6rem;
    letter-spacing: 1.24px;
    text-transform: uppercase;
    transition: all 0.2s ease-in;

    &:hover {
      color: ${({ theme }) => theme.stormDust};
    }

    @media (max-width: 1366px) {
      font-size: 1.4rem;
    }
  }
`;
