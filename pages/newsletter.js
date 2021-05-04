import { Heading, Text } from '@chakra-ui/layout';
import Container from '../components/container';
import ContentWrapper from '../components/contentWrapper';

const Newsletter = () => {
  return (
    <Container>
      <ContentWrapper>
        <Heading as="h1" variant="h2">
          Newsletter 📧
        </Heading>
        <Text>
          This page will contain my newsletter sign up form, as well as
          additional information about the newsletter content and schedule.
        </Text>
      </ContentWrapper>
    </Container>
  );
};

export default Newsletter;
