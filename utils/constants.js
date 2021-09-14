import { v4 as uuidv4 } from 'uuid';

export const navBarLinks_1 = [
  {
    id: uuidv4(),
    link: 'power on',
    route: '/products/power-on',
  },
  {
    id: uuidv4(),
    link: 'power off',
    route: '/products/power-off',
  },
];

export const navBarLinks_2 = [
  {
    id: uuidv4(),
    link: 'ingredients',
    route: '/pages/ingredients',
  },
  {
    id: uuidv4(),
    link: 'science',
    route: '/pages/science',
  },
  {
    id: uuidv4(),
    link: 'account',
    route: '/pages/account',
  },
];

export const mobileMenuLinks_1 = [
  {
    id: uuidv4(),
    link: 'power ON',
    route: '/products/power-on',
    powerOn: true,
  },
  {
    id: uuidv4(),
    link: 'power OFF',
    route: '/products/power-off',
    powerOff: true,
  },
  {
    id: uuidv4(),
    link: 'ingredients',
    route: '/pages/ingredients',
  },
  {
    id: uuidv4(),
    link: 'science',
    route: '/pages/science',
  },
];

export const mobileMenuLinks_2 = [
  {
    id: uuidv4(),
    link: 'account',
    route: '/pages/account',
  },
  {
    id: uuidv4(),
    link: 'about us',
    route: '/pages/about-us',
  },
  {
    id: uuidv4(),
    link: 'contact us',
    route: '/pages/contact-us',
  },
  {
    id: uuidv4(),
    link: 'returns & exchanges',
    route: '/pages/returns-exchanges',
  },
  {
    id: uuidv4(),
    link: 'shipping policy',
    route: '/pages/shipping-policy',
  },
  {
    id: uuidv4(),
    link: 'privacy policy',
    route: '/pages/privacy-policy',
  },
  {
    id: uuidv4(),
    link: 'terms of use',
    route: '/pages/terms',
  },
];

export const powerOnContent = {
  title: 'get focused, without the jitters',
  subtitle: 'Enhance productivity without overstimulation',
  route: '/',
  imgSrc: '/assets/power-on-product.png',
  imgAlt: 'power-on-product',
  bgColor: '#f7f7fb',
  primary: true,
};

export const powerOffContent = {
  title: "get a better night's sleep",
  subtitle: 'Sleep better, without risk of dependency',
  route: '/',
  imgSrc: '/assets/power-off-product.png',
  imgAlt: 'power-off-product',
  bgColor: '#1d1d1d',
};
