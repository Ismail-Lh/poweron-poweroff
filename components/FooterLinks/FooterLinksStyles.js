import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const List = styled.ul``;

export const ListItem = styled.li`
  &:not(:last-of-type) {
    margin-bottom: 0.5rem;
  }

  a {
    color: ${({ theme }) => theme.silverSand};
    text-transform: uppercase;
    font-size: 1.4rem;
    letter-spacing: 1.24px;
    transition: all 0.2s ease-in;

    &:hover {
      color: ${({ theme }) => theme.iron};
    }
  }
`;
