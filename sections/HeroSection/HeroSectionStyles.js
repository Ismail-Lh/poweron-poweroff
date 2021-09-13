import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  height: 76rem;
  width: 100vw;

  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 50rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
