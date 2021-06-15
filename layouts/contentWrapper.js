import { VStack } from '@chakra-ui/layout';

export const ContentWrapper = ({ children }) => {
  return <VStack spacing={{ base: '10rem', lg: '15rem' }}>{children}</VStack>;
};
