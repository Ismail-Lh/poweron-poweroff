import { NextLink, Sidebar } from '@components';
import { useGlobalContext } from '@contexts/global_context';
import { CloseIcon } from '@icons';
import { menuVariants } from '@utils/animations';
import { mobileMenuLinks_1, mobileMenuLinks_2 } from '@utils/constants';
import { MenuHeader, MenuList, MenuListItem } from './MobileMenuStyles';

const MobileMenu = () => {
  const { closeMenu } = useGlobalContext();

  return (
    <Sidebar handleClick={closeMenu} menu={true} variants={menuVariants}>
      <MenuHeader>
        <button onClick={closeMenu}>
          <CloseIcon />
        </button>
      </MenuHeader>

      <MenuList>
        {mobileMenuLinks_1.map(({ id, route, link }) => (
          <MenuListItem key={id}>
            <NextLink route={route} link={link} />
          </MenuListItem>
        ))}
      </MenuList>

      <MenuList secondary>
        {mobileMenuLinks_2.map(({ id, route, link }) => (
          <MenuListItem secondary key={id}>
            <NextLink route={route} link={link} />
          </MenuListItem>
        ))}
      </MenuList>
    </Sidebar>
  );
};

export default MobileMenu;
