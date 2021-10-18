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
      <HeroSection />
      <ProductFeatureSection
        {...powerOffContent}
        productFeature={powerOffFeature}
      />
      <ProductFeatureSection
        {...powerOnContent}
        productFeature={powerOnFeature}
      />
    </Layout>
  );
};

export default HomePage;
