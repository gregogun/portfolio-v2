import { Button } from '@chakra-ui/button';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input';
import { Box, Heading, Text } from '@chakra-ui/layout';
import Container from '../components/container';
import ContentWrapper from '../components/contentWrapper';
import { useColorModeSwitcher } from '../utils/hooks/useColorModeSwitcher';

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
      <NewsletterCard />
    </Container>
  );
};

// add success and error messages as components, for storybook

export const NewsletterCard = ({ placeholder, ...props }) => {
  const { themed, colorGrey } = useColorModeSwitcher();
  return (
    <Box
      border="2px solid"
      borderColor={colorGrey}
      py="2rem"
      px="3rem"
      {...props}
    >
      <Heading variant="h3">Subscribe to my newsletter</Heading>
      <Text mb="1rem">
        Here’s a short summary of why you should subscribe to my newsletter
      </Text>
      <InputGroup mb="1rem" borderColor={themed}>
        <Input
          isRequired
          type="email"
          autoComplete="email"
          placeholder={placeholder}
          borderRadius="sm"
          placeholder="jimmy@choo.com"
        />
        <InputRightElement w="8rem">
          <Button variant="secondaryThemed">Subscribe</Button>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

export default Newsletter;
