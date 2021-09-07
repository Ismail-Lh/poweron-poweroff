import Link from 'next/link';

import { List } from './NavbarLinksStyles';

const NavbarLinks = ({ links }) => {
  return (
    <List>
      {links?.map(({ id, link, route }) => (
        <li key={id} className='list__items'>
          <Link href={route}>
            <a>{link}</a>
          </Link>
        </li>
      ))}
    </List>
  );
};

export default NavbarLinks;
