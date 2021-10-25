/* eslint-disable react/no-unescaped-entities */
import { NewsletterForm } from '@components';
import {
  Wrapper,
  ContentContainer,
  TextContainer,
  Title,
  Text,
  IconContainer,
} from './NewsletterSectionStyles';

import { LetterIcon } from '@icons';

const NewsletterSection = () => {
  return (
    <Wrapper>
      <ContentContainer className='container'>
        <TextContainer>
          <Title>newsletter</Title>
          <Text>Stay up to date with our latest news and products</Text>
        </TextContainer>
        <NewsletterForm />
        <Text className='lightGrey'>
          Your email is safe with us, we don't spam.
        </Text>
      </ContentContainer>

      <IconContainer>
        <div className='outlineCircle'>
          <LetterIcon />
        </div>
      </IconContainer>
    </Wrapper>
  );
};

export default NewsletterSection;
