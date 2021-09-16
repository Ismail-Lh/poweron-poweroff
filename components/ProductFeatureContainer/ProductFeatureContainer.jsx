import {
  Wrapper,
  ProductFeature,
  Icon,
  Content,
  Title,
  Text,
} from './ProductFeatureContainerStyles';

const ProductFeatureContainer = ({ productFeature, primary }) => {
  return (
    <Wrapper>
      {productFeature.map(({ id, icon, title, text }) => (
        <ProductFeature primary={primary} key={id}>
          <Icon>{icon}</Icon>
          <Content>
            <Title>{title}</Title>
            <Text>{text}</Text>
          </Content>
        </ProductFeature>
      ))}
    </Wrapper>
  );
};

export default ProductFeatureContainer;
