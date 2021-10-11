/* eslint-disable @next/next/no-img-element */
import { stagger } from '@utils/animations';
import { Wrapper } from './HeroSliderContentStyles';

const HeroSliderContent = ({ powerOn, children }) => {
  return (
    <Wrapper
      powerOn={powerOn}
      variants={stagger}
      initial='initial'
      animate='animate'
      exit='initial'>
      {children}
    </Wrapper>
  );
};

export default HeroSliderContent;
