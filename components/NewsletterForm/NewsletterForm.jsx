import { FormContainer } from './NewsletterFormStyles';

const NewsletterForm = () => {
  return (
    <FormContainer>
      <input
        type='email'
        name='newsletter'
        placeholder='Your email address'
        className='form__input'
      />
      <button className='form__button' type='submit'>
        subscribe
      </button>
    </FormContainer>
  );
};

export default NewsletterForm;
