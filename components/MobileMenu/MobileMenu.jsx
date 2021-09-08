import { NextLink, Sidebar } from '@components';
import { useGlobalContext } from '@contexts/global_context';
import { CloseIcon } from '@icons';
import { mobileMenuLinks_1, mobileMenuLinks_2 } from '@utils/constants';
import { MenuContainer, MenuList, MenuListItem } from './MobileMenuStyles';

const MobileMenu = () => {
  const { closeMenu } = useGlobalContext();

  return (
    <Sidebar handleClick={closeMenu}>
      <MenuContainer>
        <div className='close__btn'>
          <button onClick={closeMenu}>
            <CloseIcon />
          </button>
        </div>

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
      </MenuContainer>
    </Sidebar>
  );
};

export default MobileMenu;
