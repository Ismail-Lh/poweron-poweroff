import { v4 as uuidv4 } from 'uuid';
import { RiFocus2Line, RiMentalHealthLine } from 'react-icons/ri';
import { MdMemory } from 'react-icons/md';
import { GiEmbrassedEnergy, GiNightSleep } from 'react-icons/gi';
import { BiBrain, BiPlus } from 'react-icons/bi';
import { FaEquals } from 'react-icons/fa';

export const navBarLinks_1 = [
  {
    id: uuidv4(),
    link: 'poweron',
    route: '/products/power-on',
  },
  {
    id: uuidv4(),
    link: 'poweroff',
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

export const powerOnFeature = [
  {
    id: uuidv4(),
    icon: <RiFocus2Line />,
    title: 'focus',
    text: 'Helps support the healthy production of dopamine, the key neurotransmitter for focus',
  },
  {
    id: uuidv4(),
    icon: <MdMemory />,
    title: 'memory',
    text: 'Contains ingredients clinically shown to support memory',
  },
  {
    id: uuidv4(),
    icon: <GiEmbrassedEnergy />,
    title: 'energy',
    text: 'Supports ATP, your brain’s energy currency',
  },
  {
    id: uuidv4(),
    icon: <RiMentalHealthLine />,
    title: 'mental edge',
    text: 'Supports blood flow to the brain',
  },
  {
    id: uuidv4(),
    icon: <BiBrain />,
    title: 'brain health',
    text: 'Provides nutrients to support healthy neurotransmitter production during the day',
  },
];

export const powerOffContent = {
  title: "get a better night's sleep",
  subtitle: 'Sleep better, without risk of dependency',
  route: '/',
  imgSrc: '/assets/power-off-product.png',
  imgAlt: 'power-off-product',
  bgColor: '#1d1d1d',
};

export const powerOffFeature = [
  {
    id: uuidv4(),
    icon: <GiNightSleep />,
    title: 'sleep support',
    text: 'Helps your brain power down for sleep',
  },
  {
    id: uuidv4(),
    icon: <BiPlus />,
    title: 'recovery',
    text: 'Supports sleep quality so you wake up feeling rested',
  },
  {
    id: uuidv4(),
    icon: <FaEquals />,
    title: 'relaxation',
    text: 'Promotes calmness before and during sleep',
  },
  {
    id: uuidv4(),
    icon: <BiBrain />,
    title: 'brain health',
    text: 'Provides nutrients to support neurotransmitters during rest',
  },
];

export const footerLinks = [
  {
    id: uuidv4(),
    title: 'products',
    links: [
      { linkId: uuidv4(), link: 'power on', route: '/' },
      { linkId: uuidv4(), link: 'power off', route: '/' },
    ],
  },
  {
    id: uuidv4(),
    title: 'more info',
    links: [
      { linkId: uuidv4(), link: 'science', route: '/' },
      { linkId: uuidv4(), link: 'faq', route: '/' },
      { linkId: uuidv4(), link: 'about us', route: '/' },
      { linkId: uuidv4(), link: 'privacy policy', route: '/' },
    ],
  },
  {
    id: uuidv4(),
    title: 'help & support',
    links: [
      { linkId: uuidv4(), link: 'contact us', route: '/' },
      { linkId: uuidv4(), link: 'returns & exchanges', route: '/' },
      { linkId: uuidv4(), link: 'shipping policy', route: '/' },
      { linkId: uuidv4(), link: 'terms of use', route: '/' },
    ],
  },
];
