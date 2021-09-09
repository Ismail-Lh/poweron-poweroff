const easing = [0.6, -0.05, 0.01, 0.99];

const transition = {
  transition: {
    type: 'spring',
    bounce: 0,
    ease: easing,
  },
};

export const fadeIn = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { ease: easing },
  },
};

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const cartVariants = {
  initial: { opacity: 0, x: '100%', transition: transition },
  animate: {
    opacity: 1,
    x: 0,
    transition: transition,
  },
};

export const menuVariants = {
  initial: { opacity: 0, x: '-100%', transition: transition },
  animate: {
    opacity: 1,
    x: 0,
    transition: transition,
  },
};

export const productModalVariants = {
  initial: { opacity: 0, zIndex: '-100', transition: transition },
  animate: { opacity: 1, zIndex: '100', x: 0, transition: transition },
};
