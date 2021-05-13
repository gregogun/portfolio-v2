import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  List,
  ListItem,
  Text,
  VStack
} from '@chakra-ui/layout';
import { useColorModeSwitcher } from '../utils/hooks/useColorModeSwitcher';
import { SiReact } from 'react-icons/si';
import Icon from '@chakra-ui/icon';
import { Button } from '@chakra-ui/button';
import { Logo } from './custom/logo';

const ProjectCard = ({ ...props }) => {
  const { colorDark, colorGrey, colorLight } = useColorModeSwitcher();
  return (
    <Box
      border="2px solid"
      borderColor={colorGrey}
      w={{ base: '100%', md: '30rem' }}
      // py="2rem"
      // px="3rem"
      {...props}
    >
      <Center fill={colorLight} mb="3rem" w="100%" h="8rem" bg={colorDark}>
        <Logo />
      </Center>
      <VStack px="2rem" align="start" spacing="2rem">
        <Heading as="h3" variant="h3">
          Project Title
        </Heading>
        <Text>
          This is a basic, consice description of what the project is about.
          Blah, blah, blah, blah, blah.{' '}
        </Text>
        <List display="flex" flexDirection="row">
          <ReactIcon />
          <ReactIcon />
          <ReactIcon />
        </List>
        <HStack pb="2rem">
          <Button variant="secondary">Visit Site</Button>
          <Button variant="secondary">Visit Repo</Button>
        </HStack>
      </VStack>
    </Box>
  );
};

const ReactIcon = () => {
  return (
    <ListItem mr="1rem">
      <Icon boxSize="1.5rem" as={SiReact} />
    </ListItem>
  );
};

export default ProjectCard;
