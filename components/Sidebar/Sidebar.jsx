import { Overlay } from '@components';
import { Wrapper, SidebarContainer } from './SidebarStyles';

const Sidebar = ({ children, cart, handleClick }) => {
  return (
    <Wrapper>
      <Overlay handleClick={handleClick} />
      <SidebarContainer cart={cart}>{children}</SidebarContainer>
    </Wrapper>
  );
};

export default Sidebar;
