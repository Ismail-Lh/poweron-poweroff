import { Layout } from '@components';
import { HeroSection, ProductFeatureSection } from '@sections';
import {
  powerOffContent,
  powerOffFeature,
  powerOnContent,
  powerOnFeature,
} from '@utils/constants';

const HomePage = () => {
  return (
    <Layout>
      {/* <HeroSection />
      <ProductFeatureSection
        {...powerOnContent}
        productFeature={powerOnFeature}
      />
      <ProductFeatureSection
        {...powerOffContent}
        productFeature={powerOffFeature}
      /> */}
      <h1>Hello World</h1>
    </Layout>
  );
};

export default HomePage;
