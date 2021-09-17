import { FooterForm, FooterLinks } from '@components';
import { Wrapper } from './FooterStyles';

const Footer = () => {
  return (
    <Wrapper>
      <div className='container'>
        <div className='footer__head'>
          <FooterLinks />
          <FooterForm />
        </div>

        <div className='footer__copyright'>
          <p>© 2021 POWER ON POWER OFF LLC.</p>
        </div>

        <div className='footer__statement'>
          <p>
            *These statements have not been evaluated by the Food and Drug
            Administration. These products are not intended to diagnose, treat,
            cure, or prevent any disease.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
