import { NextLink } from '@components';
import { footerLinks } from '@utils/constants';
import { Wrapper, List, ListItem } from './FooterLinksStyles';

const FooterLinks = () => {
  return (
    <Wrapper>
      {footerLinks.map(({ id, title, links }) => (
        <div key={id}>
          <h3>{title}</h3>
          <List>
            {links.map(({ linkId, link, route }) => (
              <ListItem key={linkId}>
                <NextLink link={link} route={route} />
              </ListItem>
            ))}
          </List>
        </div>
      ))}
    </Wrapper>
  );
};

export default FooterLinks;
