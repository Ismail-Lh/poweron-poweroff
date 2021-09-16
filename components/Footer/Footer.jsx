import { FooterForm, FooterLinks } from '@components';
import { Wrapper } from './FooterStyles';

const Footer = () => {
  return (
    <Wrapper>
      <div className='container'>
        <FooterLinks />
        <FooterForm />
      </div>
    </Wrapper>
  );
};

export default Footer;
