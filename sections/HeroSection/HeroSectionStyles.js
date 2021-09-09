import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled(motion.div)`
  /* display: grid;
  grid-template-columns: ${({ powerOnWidth }) => `${powerOnWidth}%`} ${({
    powerOffWidth,
  }) => `${powerOffWidth}%`}; */
  height: 100vh;
  width: 100vw;
  display: flex;
`;
