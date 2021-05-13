import {
  Center,
  Heading,
  Flex,
  Text,
  VStack,
  Box,
  useMediaQuery,
  Button,
  Link
} from '@chakra-ui/react';
import NextLink from 'next/link';
import Container from '../components/container';
import { HeroVisual } from '../components/custom/heroVisual';
import { useColorModeSwitcher } from '../utils/hooks/useColorModeSwitcher';
import NewsletterCard from '../components/newsletterCard';
import ProjectCard from '../components/projectCard';

export default function Home() {
  return (
    <Container>
      <ContentWrapper>
        <Hero />
        <FeaturedProjects />
        <FeaturedArticles />
        <NewsletterCard />
      </ContentWrapper>
    </Container>
  );
}

const Hero = () => {
  const [isXtraLarge] = useMediaQuery('(min-width: 1280px)');
  return (
    <Flex justify="space-between" w={{ base: '90%', sm: '100%' }}>
      <Box m={!isXtraLarge && 'auto'} w={{ base: '100%', xl: '50%' }}>
        <Heading mb="0.5rem" as="h1" variant="h1">
          Hi, I’m Greg Ogun.
        </Heading>
        <Text mb={{ base: '4rem', lg: '6rem' }} as="h2" variant="subtitle">
          Welcome to my corner of the internet, where you can find my works,
          thoughts, favourite coffee and other random things.
        </Text>
        <Heading as="h3" variant="h3" mb="0.5rem">
          Ok, but who are you?
        </Heading>
        <Text fontSize="xl" mb="2rem">
          I’m a curiosity-driven, design-focused developer, building rich,
          user-centric, inclusive experiences on the web.
        </Text>
        <Text fontSize="xl" mb={{ base: '1rem', lg: '2rem' }}>
          Feel free to have a look around, and learn more about myself and what
          I like to work on.{' '}
        </Text>
        <Button variant="primaryThemed" size="lg">
          Get in touch
        </Button>
      </Box>
      {isXtraLarge && <HeroVisual />}
    </Flex>
  );
};

const FeaturedProjects = () => {
  return (
    <VStack spacing="4rem" w="100%" m="auto">
      <FeatureHeading>Featured Projects</FeatureHeading>
      <Flex
        w="100%"
        mb="2.5rem"
        direction={{ base: 'column', xl: 'row' }}
        justify="space-evenly"
      >
        <ProjectCard mx="auto" mb={{ base: '2rem', lg: 0 }} />
        <ProjectCard mx="auto" />
      </Flex>
      <NextLink href="/projects" passHref>
        <Link
          display="block"
          textAlign="center"
          fontSize={{ base: 'lg', lg: '2xl' }}
        >
          See all projects
        </Link>
      </NextLink>
    </VStack>
  );
};

const FeaturedArticles = () => {
  return (
    <VStack spacing="4rem" w="100%" mx="auto">
      <FeatureHeading>Featured Articles</FeatureHeading>
      <ArticleCard />
      <ArticleCard />
      <NextLink href="/blog" passHref>
        <Link
          display="block"
          textAlign="center"
          fontSize={{ base: 'lg', lg: '2xl' }}
        >
          Read all articles
        </Link>
      </NextLink>
    </VStack>
  );
};

export const ArticleCard = () => {
  const { colorGrey } = useColorModeSwitcher();
  return (
    <Box
      mx="auto"
      p="2rem"
      border="2px solid"
      borderColor={colorGrey}
      w={{ base: '21em', lg: '57.5rem' }}
    >
      <Heading textTransform="capitalize" as="h4" variant="h4" mb="0.5rem">
        A heading for my amazing blog post
      </Heading>
      <Text variant="body" mb="2rem">
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
    <Heading textAlign="center" as="h2" variant="h2">
      {children}
    </Heading>
  );
};
