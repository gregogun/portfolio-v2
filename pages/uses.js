import { Heading, Text } from '@chakra-ui/layout';
import Container from '../components/container';
import ContentWrapper from '../components/contentWrapper';

const Uses = () => {
  return (
    <Container>
      <ContentWrapper>
        <Heading as="h1" variant="h2">
          Uses 🔌
        </Heading>
        <Text>
          This page will contain information about what software and hardware I
          currently use day-to-day.
        </Text>
      </ContentWrapper>
    </Container>
  );
};

export default Uses;
