import { NextLink } from '@components';

import { LinksContainer, List, ListItem } from './NavbarLinksStyles';

const NavbarLinks = ({ links, children, right, left, handleClick }) => {
  return (
    <LinksContainer right={right} left={left}>
      <List>
        {links?.map(({ id, link, route }) => (
          <ListItem key={id}>
            <NextLink route={route} link={link} />
          </ListItem>
        ))}
      </List>
      <button onClick={handleClick}>{children}</button>
    </LinksContainer>
  );
};

export default NavbarLinks;
