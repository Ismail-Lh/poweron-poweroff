import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
  color: ${({ theme }) => theme.balticSea};
  position: relative;
  height: 100%;

  /* ${({ powerOn }) =>
    !powerOn &&
    css`
      grid-template-columns: 70% 30%;
      color: ${({ theme }) => theme.white};
    `} */
`;

// export const ImageContainer = styled(motion.div)`
//   img {
//     width: 100%;
//     height: 100%;
//   }
// `;

// export const ContentContainer = styled(motion.div)`
//   display: grid;
//   place-content: center;

//   ${({ powerOn }) =>
//     powerOn &&
//     css`
//       margin-left: 15rem;
//     `}

//   ${({ powerOff }) =>
//     powerOff &&
//     css`
//       margin-right: 15rem;
//     `}
// `;

// export const Title = styled.h3`
//   font-size: 6.4rem;
//   line-height: 6.4rem;
//   letter-spacing: -2px;
//   font-weight: 400;
//   text-transform: uppercase;
//   width: 12ch;
// `;

// export const SubTitle = styled.p`
//   margin: 2rem 0;
//   text-transform: capitalize;
//   font-size: 2.4rem;
//   line-height: 3rem;
//   width: 20ch;
// `;
