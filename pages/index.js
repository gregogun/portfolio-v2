import { Heading } from '@chakra-ui/react';
import Container from '../components/container';

export default function Home() {
  return (
    <Container>
      <Heading as="h1" variant="h1">
        Homepage
      </Heading>
    </Container>
  );
}
