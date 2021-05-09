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
import { useColorModeSwitcher } from '../utils/hooks/useColorModeSwitcher';

export default function Home() {
  return (
    <Container>
      <ContentWrapper>
        <Hero />
        <FeaturedProjects />
        <FeaturedArticles />
      </ContentWrapper>
    </Container>
  );
}

const Hero = () => {
  const [isLarge] = useMediaQuery('(min-width: 992px)');
  return (
    <Flex>
      <Box w={{ base: '100%', lg: '596px' }} h="100%">
        <Heading as="h1" variant="h1">
          Hi, I’m Greg Ogun.
        </Heading>
        <Text mb={{ base: '4rem', lg: '6rem' }} as="h2" variant="subtitle">
          Welcome to my corner of the internet, where you can find my works,
          thoughts, favourite coffee and other random things.
        </Text>
        <Heading as="h3" variant="h3" mb="0.5rem">
          Ok, but who are you?
        </Heading>
        <Text mb="2rem">
          I’m a curiosity-driven, design-focused developer, building rich,
          user-centric, inclusive experiences on the web.
        </Text>
        <Text mb={{ base: '1rem', lg: '2rem' }}>
          Feel free to have a look around, and learn more about myself and what
          I like to work on.{' '}
        </Text>
        <Button w="184px" h="50px" variant="primaryThemed" size="md">
          Get in touch
        </Button>
      </Box>
      {isLarge && (
        <Center border="1px solid" boxSize="600px">
          <Text>Hero Visual</Text>
        </Center>
      )}
    </Flex>
  );
};

const FeaturedProjects = () => {
  const [isLarge] = useMediaQuery('(min-width: 992px)');
  return (
    <Box w="100%" m="auto">
      <FeatureHeading>Featured Projects</FeatureHeading>
      <Flex
        mb="2.5rem"
        direction={{ base: 'column', lg: 'row' }}
        justify="space-evenly"
      >
        <Center
          mb={!isLarge && '2.5rem'}
          border="1px solid"
          boxSize={{ base: '20rem', lg: '30rem' }}
        >
          Project 1
        </Center>
        <Center border="1px solid" boxSize={{ base: '20rem', lg: '30rem' }}>
          Project 2
        </Center>
      </Flex>
      <Text textAlign="center">See all projects</Text>
    </Box>
  );
};

const FeaturedArticles = () => {
  const [isLarge] = useMediaQuery('(min-width: 992px)');
  return (
    <Box w="100%" m="auto">
      <FeatureHeading>Featured Articles</FeatureHeading>
      <ArticleCard />
      <ArticleCard />
      <Text textAlign="center">Read all articles</Text>
    </Box>
  );
};

const ArticleCard = () => {
  const { colorGrey } = useColorModeSwitcher();
  return (
    <Box
      mx="auto"
      mb={{ base: '2.5rem', lg: '4rem' }}
      p="2rem"
      border="1px solid"
      borderColor={colorGrey}
      w={{ base: '21em', lg: '57.5rem' }}
    >
      <Heading textTransform="capitalize" as="h3" variant="h3" mb="0.5rem">
        A heading for my amazing blog post
      </Heading>
      <Text variant="subtitle" mb="2rem">
        This is some arbitrary subtitle for my amazing blog post that you should
        most definitely read!
      </Text>
      <Flex>
        <Text>Read more</Text>
        <Text>
          <span>→</span>
        </Text>
      </Flex>
    </Box>
  );
};

const ContentWrapper = ({ children }) => {
  return <VStack spacing={{ base: '10rem', lg: '15rem' }}>{children}</VStack>;
};

const FeatureHeading = ({ children }) => {
  return (
    <Heading
      textAlign="center"
      mb={{ base: '2.5rem', lg: '4rem' }}
      as="h2"
      variant="h2"
    >
      {children}
    </Heading>
  );
};
