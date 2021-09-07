import { MenuIcon } from '@icons';
import { Menu } from './MobileMenuStyles';

const MobileMenu = () => {
  return (
    <Menu>
      <button className='menu__btn'>
        <MenuIcon />
      </button>
    </Menu>
  );
};

export default MobileMenu;
