import { navBarLinks_1, navBarLinks_2 } from '@utils/constants';
import { NavbarLinks, NavbarLogo } from '@components';

import { Header, NavbarContainer } from './NavbarStyles';
import { useGlobalContext } from '@contexts/global_context';
import { CartIcon, MenuIcon } from '@icons';

const Navbar = () => {
  const { openMenu, openCart } = useGlobalContext();

  return (
    <Header>
      <div className='container'>
        <NavbarContainer className='navbar '>
          <NavbarLinks links={navBarLinks_1} menu={true} handleClick={openMenu}>
            <MenuIcon />
          </NavbarLinks>

          <NavbarLogo />

          <NavbarLinks links={navBarLinks_2} cart={true} handleClick={openCart}>
            <CartIcon />
          </NavbarLinks>
        </NavbarContainer>
      </div>
    </Header>
  );
};

export default Navbar;
