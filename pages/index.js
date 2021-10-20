import { Layout } from '@components';
import {
  HeroSection,
  ProductFeatureSection,
  NewsletterSection,
} from '@sections';
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
      <NewsletterSection />
    </Layout>
  );
};

export default HomePage;
