import { FaArrowRight } from 'react-icons/fa';
import { Wrapper } from './FooterFormStyles';

const FooterForm = () => {
  return (
    <Wrapper>
      <h3>sign up for our newsletter</h3>
      <form className='form'>
        <input
          type='email'
          name='email'
          id='email'
          placeholder='your email address'
          className='form__input'
        />
        <button type='submit' className='form__btn'>
          <FaArrowRight />
        </button>
      </form>
    </Wrapper>
  );
};

export default FooterForm;
