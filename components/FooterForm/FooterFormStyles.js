import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  & .form {
    width: 75%;
    position: relative;

    &__input {
      padding: 1rem 3rem;
      background-color: transparent;
      border: 2px solid #686868;
      border-radius: 100px;
      width: 100%;
      text-transform: capitalize;
      font-size: 1.6rem;
      color: ${({ theme }) => theme.white};

      &::placeholder {
        color: ${({ theme }) => theme.white};
      }
    }

    &__btn {
      position: absolute;
      /* top: 0; */
      right: 0;

      svg {
        font-size: 1.6rem;
      }
    }
  }
`;
