import styled from 'styled-components';

export const CartContainer = styled.div`
  padding: 0 2.5rem;
`;

export const CartHeader = styled.div`
  padding-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid ${({ theme }) => theme.dune};
`;

export const CartTitle = styled.h3`
  text-transform: capitalize;
  font-size: 2.4rem;
`;

export const CartItemsContainer = styled.div`
  margin-top: 2rem;

  p {
    font-size: 1.6rem;
  }
`;
