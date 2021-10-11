/* eslint-disable @next/next/no-page-custom-font */
import { useGlobalContext } from '@contexts/global_context';
import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import { Cart, Footer, MobileMenu, Navbar } from '..';

const Layout = ({ title, children, description }) => {
  const { isMenuOpen, isCartOpen } = useGlobalContext();

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />

        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <main>
        <Navbar />
        <AnimatePresence initial={false}>
          {isMenuOpen && <MobileMenu />}
          {isCartOpen && <Cart />}
        </AnimatePresence>
        {children}
        {/* <Footer /> */}
      </main>
    </div>
  );
};

Layout.defaultProps = {
  title: 'PowerOn | PowerOff',
  description:
    "Men's Basics are evolving. BYLT Underwear and BYLT Shirts. Get BYLT's new line of Men's Premium Basics online at a fair price. BYLT™ - Confidence starts here™",
};

export default Layout;
