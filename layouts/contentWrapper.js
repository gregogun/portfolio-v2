import { VStack } from '@chakra-ui/layout';

const ContentWrapper = ({ children }) => {
  return (
    <VStack
      maxW="550px"
      textAlign="center"
      border="2px solid"
      borderColor="neutral.400"
      p={8}
      spacing={8}
    >
      {children}
    </VStack>
  );
};

export default ContentWrapper;
