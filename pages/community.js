import { Heading, Text } from '@chakra-ui/layout';
import Container from '../components/container';
import ContentWrapper from '../components/contentWrapper';

const Community = () => {
  return (
    <Container>
      <ContentWrapper>
        <Heading as="h1" variant="h2">
          Community 🌍
        </Heading>
        <Text>
          This page will contain information about inspirations behind the
          design/code solutions of this site, as well as contributors.
        </Text>
      </ContentWrapper>
    </Container>
  );
};

export default Community;
