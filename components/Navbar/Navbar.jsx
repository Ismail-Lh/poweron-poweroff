import { navBarLinks_1, navBarLinks_2 } from '@utils/constants';
import { NavbarLinks, NavbarLogo } from '@components';

import { Header, NavbarContainer } from './NavbarStyles';
import { useGlobalContext } from '@contexts/global_context';
import { CartIcon, MenuIcon } from '@icons';

const Navbar = () => {
  const { openMenu, openCart } = useGlobalContext();

  return (
    <Header>
      <NavbarContainer className='navbar'>
        <NavbarLinks links={navBarLinks_1} left={true} handleClick={openMenu}>
          <MenuIcon />
        </NavbarLinks>

        <NavbarLogo />

        <NavbarLinks links={navBarLinks_2} right={true} handleClick={openCart}>
          <CartIcon />
        </NavbarLinks>
      </NavbarContainer>
    </Header>
  );
};

export default Navbar;
