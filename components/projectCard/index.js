import {
  Box,
  Center,
  Heading,
  HStack,
  List,
  ListItem,
  Text,
  VStack
} from '@chakra-ui/layout';
import { useColorModeSwitcher } from '@/utils/hooks/useColorModeSwitcher';
import Icon from '@chakra-ui/icon';
import { Button } from '@chakra-ui/button';
import PropTypes from 'prop-types';

export const ProjectCard = ({
  logo,
  title,
  description,
  tools,
  live,
  proto,
  repo,
  ...props
}) => {
  const { colorDark, colorGrey, colorLight } = useColorModeSwitcher();
  return (
    <Box
      as="li"
      mb={{ base: '2rem', '2xl': 0 }}
      mx="1rem"
      listStyleType="none"
      border="1px solid"
      borderColor={colorGrey}
      w={{ base: '90%', md: '30rem' }}
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
        {logo}
      </Center>
      <VStack px="2rem" align="start" spacing="2rem">
        <Heading data-testid="project-title" as="h3" variant="h3">
          {title}
        </Heading>
        <Text data-testid="project-description">{description}</Text>
        <List display="flex" flexDirection="row">
          {tools.map((tool) => (
            <ListItem key={tool.id} p="0.5rem">
              <Icon
                aria-label={tool.name}
                transitionDuration="300ms"
                boxSize="1.5rem"
                as={tool.icon}
                _hover={{ fill: tool.color }}
              />
            </ListItem>
          ))}
        </List>
        <HStack pb="2rem">
          {live && (
            <Button as="a" href={live} variant="primary">
              Visit Site
            </Button>
          )}
          {proto && (
            <Button as="a" href={proto} variant="primary">
              Prototype
            </Button>
          )}
          <Button as="a" href={repo} variant="secondary">
            View Code
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

ProjectCard.propTypes = {
  logo: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tools: PropTypes.array.isRequired,
  live: PropTypes.string,
  proto: PropTypes.string,
  repo: PropTypes.string.isRequired
};
