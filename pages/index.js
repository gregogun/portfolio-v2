import { Heading, Link, Text } from '@chakra-ui/react';
import Container from '../components/container';
import ContentWrapper from '../components/contentWrapper';

export default function Home() {
  return (
    <Container>
      <ContentWrapper>
        <Heading as="h1" variant="h2">
          site under construction 🏗
        </Heading>
        <Text>
          You can see me building the project live{' '}
          <Link href="https://youtube.com/playlist?list=PLMEsKADcHjg6Zw_qr6mDsE5lgHRpOWBma">
            here
          </Link>
        </Text>
        <Text>
          Feel free to also navigate through the pages to find out what content
          will be on there!
        </Text>
      </ContentWrapper>
    </Container>
  );
}
