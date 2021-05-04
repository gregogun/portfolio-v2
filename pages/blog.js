import { Heading, Link, Text } from '@chakra-ui/layout';
import Container from '../components/container';
import ContentWrapper from '../components/contentWrapper';

const Blog = () => {
  return (
    <Container>
      <ContentWrapper>
        <Heading as="h1" variant="h2">
          Blog 🖊
        </Heading>
        <Text>
          This page will soon be my{' '}
          <Link href="https://joelhooks.com/digital-garden">
            digital garden
          </Link>{' '}
          <span>🌱</span>
        </Text>
        <Text>
          It will be home to all of my thoughts and ideas around web development
          and design.{' '}
        </Text>
      </ContentWrapper>
    </Container>
  );
};

export default Blog;
