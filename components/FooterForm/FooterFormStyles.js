import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  & .form {
    width: 75%;
    position: relative;
    display: flex;
    align-items: center;

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
      right: 2rem;

      svg {
        font-size: 1.6rem;
        fill: ${({ theme }) => theme.white};
      }
    }
  }

  & .icons {
    margin-top: 2rem;

    a {
      color: ${({ theme }) => theme.silverSand};
      transition: all 0.2s ease-in;

      &:hover {
        color: ${({ theme }) => theme.iron};
      }

      &:not(:last-of-type) {
        margin-right: 2rem;
      }

      svg {
        font-size: 2rem;
        /* fill: ${({ theme }) => theme.starDust}; */
      }
    }
  }
`;
