import {
  Center,
  Heading,
  Flex,
  Text,
  VStack,
  Box,
  useMediaQuery,
  Button
} from '@chakra-ui/react';
import Container from '../components/container';

export default function Home() {
  return (
    <Container>
      <Hero />
    </Container>
  );
}

const Hero = () => {
  const [isLarge] = useMediaQuery('(min-width: 992px)');
  return (
    <Flex w="100%">
      <VStack>
        <VStack align="left" h="100%">
          <Heading as="h1" variant="h1">
            Hi, I’m Greg Ogun.
          </Heading>
          <Text variant="subtitle">
            Welcome to my corner of the internet, where you can find my works,
            thoughts, favourite coffee and other random things.
          </Text>
          <Heading as="h2" variant="h3">
            Ok, but who are you?
          </Heading>
          <Text>
            I’m a curiosity-driven, design-focused developer, building rich,
            user-centric, inclusive experiences on the web.
          </Text>
          <Text>
            Feel free to have a look around, and learn more about myself and
            what I like to work on.{' '}
          </Text>
          <Button w="184px" h="50px" variant="primaryThemed" size="md">
            Get in touch
          </Button>
        </VStack>
      </VStack>
      {isLarge && (
        <Center border="1px solid" boxSize="600px">
          <Text>Hero Visual</Text>
        </Center>
      )}
    </Flex>
  );
};
