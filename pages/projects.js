import { Heading, Text } from '@chakra-ui/layout';
import Container from '../components/container';
import ContentWrapper from '../components/contentWrapper';

const Projects = () => {
  return (
    <Container>
      <ContentWrapper>
        <Heading as="h1" variant="h2">
          Projects 🎲
        </Heading>
        <Text>
          This page will contain a list of projects I've made or have worked on.
        </Text>
        <Text>
          Each project will contain a summary, live link (if applicable) and a
          link to the project repository.
        </Text>
      </ContentWrapper>
    </Container>
  );
};

export default Projects;
