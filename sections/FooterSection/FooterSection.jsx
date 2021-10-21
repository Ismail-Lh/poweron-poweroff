/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

import { FooterLinks } from '@components';
import { SiteLogo } from '@icons';

import { Wrapper, GridContainer } from './FooterSectionStyles';

const FooterSection = () => {
  return (
    <Wrapper>
      <div className='container'>
        <GridContainer>
          <div className='footer__statement'>
            <div className='logo'>
              <SiteLogo />
            </div>
            <p className='text'>
              *These statements have not been evaluated by the Food and Drug
              Administration. These products are not intended to diagnose,
              treat, cure, or prevent any disease.
            </p>

            <div className='mediaIcons'>
              <Link href='/'>
                <a>
                  <img
                    src='assets/facebook-icon.svg'
                    alt='facebook-logo-icon'
                  />
                </a>
              </Link>
              <Link href='/'>
                <a>
                  <img src='assets/twitter-icon.svg' alt='twitter-logo-icon' />
                </a>
              </Link>
            </div>
          </div>
          <FooterLinks />
        </GridContainer>

        <p className='copyrightText'>© 2021 POWER ON POWER OFF LLC.</p>
      </div>
    </Wrapper>
  );
};

export default FooterSection;
