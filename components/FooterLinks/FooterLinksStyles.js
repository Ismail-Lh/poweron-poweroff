import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  h3 {
    text-transform: uppercase;
    font-size: 2.2rem;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.mountainMist};
    margin-bottom: 1rem;
  }

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
    row-gap: 1rem;
    text-align: center;
  }
`;

export const List = styled.ul``;

export const ListItem = styled.li`
  &:not(:last-of-type) {
    margin-bottom: 0.75rem;
  }

  a {
    color: ${({ theme }) => theme.mountainMist};
    text-transform: uppercase;
    font-size: 1.6rem;
    letter-spacing: 1.24px;
    transition: all 0.2s ease-in;

    &:hover {
      color: ${({ theme }) => theme.iron};
    }
  }
`;
