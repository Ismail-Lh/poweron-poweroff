import { fadeIn } from '@utils/animations';
import { Wrapper } from './OverlayStyles';

const Overlay = ({ handleClick }) => {
  return <Wrapper variants={fadeIn} onClick={handleClick} />;
};

export default Overlay;
