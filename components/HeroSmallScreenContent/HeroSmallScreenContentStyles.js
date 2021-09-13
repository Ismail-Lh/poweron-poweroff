import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ primary }) => (!primary ? '#f7f7fb' : '#1d1d1d')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 4.5rem 0;
  }
`;
