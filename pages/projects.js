import { Heading, Text } from '@chakra-ui/layout';
import Container from '@/layouts/container';
import ContentWrapper from '@/layouts/contentWrapper';

const Projects = () => {
  return (
    <Container title="Projects | Greg Ogun">
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
