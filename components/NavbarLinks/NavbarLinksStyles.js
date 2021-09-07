import styled from 'styled-components';

export const List = styled.ul`
  display: flex;

  @media (max-width: 1024px) {
    display: none;
  }

  .list__items {
    a {
      padding: 1.5rem 2rem;
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
  }
`;
