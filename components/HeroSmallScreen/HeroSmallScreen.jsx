import { HeroSmallScreenContent } from '@components';

const HeroSmallScreen = () => {
  return (
    <>
      <HeroSmallScreenContent
        bgColor='#f7f7fb'
        imgSrc='/assets/power-on-product.png'
        imgAlt='power-on-product'
        title='get focused, without the jitters'
        subtitle='Enhance productivity without overstimulation'
        primary={true}
      />
      <HeroSmallScreenContent
        bgColor='#1d1d1d'
        imgSrc='/assets/power-off-product.png'
        imgAlt='power-off-product'
        title="get a better night's sleep"
        subtitle='Sleep better, without risk of dependency'
      />
    </>
  );
};

export default HeroSmallScreen;
