import { Button } from '@chakra-ui/button';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input';
import { Box, Heading, Text } from '@chakra-ui/layout';
import Container from '../components/container';
import ContentWrapper from '../components/contentWrapper';

const Newsletter = () => {
  return (
    <Container>
      <ContentWrapper>
        <Heading as="h1" variant="h2">
          Newsletter 📧
        </Heading>
        <Text>
          This page will contain my newsletter sign up form, as well as
          additional information about the newsletter content and schedule.
        </Text>
      </ContentWrapper>
    </Container>
  );
};

export const NewsletterCard = ({ ...props }) => {
  return (
    <Box border="1px solid" p="2rem" {...props}>
      <Heading variant="h3">Subscribe to my newsletter</Heading>
      <Text mb="1rem">
        Here’s a short summary of why you should subscribe to my newsletter
      </Text>
      <InputGroup>
        <Input />
        <InputRightElement w="8rem">
          <Button variant="primaryThemed">Subscribe</Button>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

export default Newsletter;
