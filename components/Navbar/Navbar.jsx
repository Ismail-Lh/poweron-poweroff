import { navBarLinks_1, navBarLinks_2 } from '@utils/constants';
import { NavbarLinks, NavbarLogo } from '@components';

import { Header } from './NavbarStyles';
import { CartIcon, MenuIcon } from '@icons';

const Navbar = () => (
  <Header>
    <div className='container'>
      <nav className='navbar '>
        <NavbarLinks links={navBarLinks_1} />
        <div className='menu'>
          <button className='navbar__btn'>
            <MenuIcon />
          </button>
        </div>
        <NavbarLogo />
        <NavbarLinks links={navBarLinks_2} />

        <div className='cart'>
          <button className='navbar__btn '>
            <CartIcon />
          </button>
        </div>
      </nav>
    </div>
  </Header>
);

export default Navbar;
