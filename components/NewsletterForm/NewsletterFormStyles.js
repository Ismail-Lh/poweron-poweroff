import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 70.8rem;
  margin: 2rem 0;

  @media (max-width: 768px) {
    width: 60.8rem;
  }

  @media (max-width: 428px) {
    width: 35rem;
    flex-direction: column;
    gap: 2rem;
  }

  @media (max-width: 320px) {
    width: 24.6rem;
    gap: 1rem;
  }

  input,
  button {
    font-size: 2.2rem;
    border-radius: 2rem;

    @media (max-width: 1366px) {
      font-size: 2rem;
    }

    @media (max-width: 428px) {
      font-size: 1.6rem;
    }

    @media (max-width: 320px) {
      font-size: 1.4rem;
    }
  }

  .form {
    &__input {
      width: 100%;
      padding: 3.5rem 0 3.5rem 3.5rem;
      color: ${({ theme }) => theme.mountainMist};

      @media (max-width: 1366px) {
        padding: 2.8rem 0 2.8rem 3.5rem;
      }

      @media (max-width: 428px) {
        padding: 2rem;
      }

      @media (max-width: 320px) {
        padding: 1.5rem;
      }
    }

    &__button {
      color: ${({ theme }) => theme.white};
      text-transform: uppercase;
      padding: 2.5rem 4rem;
      background-image: linear-gradient(to right, #3c3ea9, #fc345c);
      position: absolute;
      right: 1rem;
      transition: all 0.2s ease-in;

      &:hover {
        transform: scale(0.9);
      }

      @media (max-width: 1366px) {
        padding: 2rem 3rem;
      }

      @media (max-width: 768px) {
        transform: none;
      }

      @media (max-width: 428px) {
        position: static;
        padding: 1.5rem 3rem;
      }
    }
  }
`;
