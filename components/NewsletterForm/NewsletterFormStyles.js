import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 70.8rem;
  margin: 4rem 0;

  input,
  button {
    font-size: 2.2rem;
    border-radius: 2rem;
  }

  .form {
    &__input {
      width: 100%;
      padding: 3.5rem 0 3.5rem 3.5rem;
      color: ${({ theme }) => theme.mountainMist};
    }

    &__button {
      color: ${({ theme }) => theme.white};
      text-transform: uppercase;
      padding: 2.5rem 4rem;
      background-image: linear-gradient(to right, #3c3ea9, #fc345c);
      height: 7.7rem;
      position: absolute;
      right: 1rem;
    }
  }
`;
