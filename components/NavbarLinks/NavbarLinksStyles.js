import styled from 'styled-components';

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    justify-content: ${({ cart }) => cart && 'flex-end'};
  }

  button {
    display: ${({ menu }) => menu && 'none'};

    @media (max-width: 1024px) {
      display: block;
    }

    height: 2.5rem;
    width: 2.5rem;

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
  align-items: center;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const ListItem = styled.li`
  padding: 1.5rem 2rem;
  a {
    color: ${({ theme }) => theme.mountainMist};
    font-size: 1.4rem;
    font-weight: 500;
    letter-spacing: 1.24px;
    text-transform: uppercase;
    transition: all 0.2s ease-in;

    &:hover {
      color: ${({ theme }) => theme.stormDust};
    }
  }
`;
