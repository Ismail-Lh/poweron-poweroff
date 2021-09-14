import { Layout } from '@components';
import { HeroSection, ProductFeatureSection } from '@sections';
import { powerOffContent, powerOnContent } from '@utils/constants';

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <ProductFeatureSection {...powerOnContent} />
      <ProductFeatureSection {...powerOffContent} />
    </Layout>
  );
};

export default HomePage;
