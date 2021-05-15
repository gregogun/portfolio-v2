import {
  Box,
  Center,
  Heading,
  HStack,
  List,
  Text,
  VStack
} from '@chakra-ui/layout';
import { useColorModeSwitcher } from '../utils/hooks/useColorModeSwitcher';
import Icon from '@chakra-ui/icon';
import { Button } from '@chakra-ui/button';
import projects from '@/data/projects';

const Projects = () => {
  return (
    <List
      mx="auto"
      justifyContent="space-between"
      display={{ base: 'block', '2xl': 'flex' }}
    >
      {projects.map((project) => (
        <ProjectCard project={project} key={project.id} />
      ))}
    </List>
  );
};

const ProjectCard = ({ project, ...props }) => {
  const { colorDark, colorGrey, colorLight } = useColorModeSwitcher();
  return (
    <Box
      as="li"
      mb={{ base: '2rem', '2xl': 0 }}
      mx="1rem"
      listStyleType="none"
      border="1px solid"
      borderColor={colorGrey}
      w={{ base: '100%', md: '30rem' }}
      {...props}
    >
      <Center
        borderRadius={0}
        fill={colorLight}
        mb="3rem"
        w="100%"
        h="8rem"
        bg={colorDark}
      >
        {project.logo}
      </Center>
      <VStack px="2rem" align="start" spacing="2rem">
        <Heading as="h3" variant="h3">
          {project.title}
        </Heading>
        <Text>{project.description}</Text>
        <List display="flex" flexDirection="row">
          {project.tools.map((tool) => (
            <Icon
              transitionDuration="300ms"
              boxSize="1.5rem"
              as={tool.icon}
              key={tool.id}
              _hover={{ fill: tool.color }}
              mr="1rem"
            />
          ))}
        </List>
        <HStack pb="2rem">
          {project.live && (
            <Button as="a" href={project.live} variant="secondary">
              Visit Site
            </Button>
          )}
          <Button as="a" href={project.repo} variant="secondary">
            Visit Repo
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Projects;
