import {
  Box,
  Grid,
  Heading,
  List,
  Text,
  Container as ChakraContainer
} from '@chakra-ui/layout';
import Container from '@/layouts/container';
import { ContentWrapper } from '@/layouts/contentWrapper';
import { ProjectCard } from '@/components/projectCard';
import projects from '@/data/projects';

const Projects = () => {
  return (
    <Container title="Projects | Greg Ogun">
      <ContentWrapper>
        <Intro />
      </ContentWrapper>
    </Container>
  );
};

const Intro = () => {
  return (
    <Box w="90%" as="section" mb="2rem">
      <Heading pl="1rem" as="h1" variant="h1">
        Projects
      </Heading>
      <Text pl="1rem" variant="subtitle" mb="4rem" w="80%">
        Here are some projects that I've recently worked on.
      </Text>
      <ProjectList />
    </Box>
  );
};

const ProjectList = () => {
  return (
    <List
      mx="auto"
      justifyContent="space-between"
      display={{ base: 'block', '2xl': 'flex' }}
      flexWrap="wrap"
    >
      {projects.map((project) => (
        <ProjectCard
          mb="8rem"
          logo={project.logo}
          title={project.title}
          description={project.description}
          tools={project.tools}
          live={project.live}
          proto={project.proto}
          repo={project.repo}
          key={project.id}
        />
      ))}
    </List>
  );
};

export default Projects;
