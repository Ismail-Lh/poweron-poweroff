import { Overlay } from '@components';
import { stagger } from '@utils/animations';
import { Wrapper, SidebarContainer } from './SidebarStyles';

const Sidebar = ({ children, cart, handleClick, variants }) => {
  return (
    <Wrapper
      variants={stagger}
      initial='initial'
      animate='animate'
      exit='initial'>
      <Overlay handleClick={handleClick} />
      <SidebarContainer variants={variants} cart={cart}>
        {children}
      </SidebarContainer>
    </Wrapper>
  );
};

export default Sidebar;
