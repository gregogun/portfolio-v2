import { Button, ChakraProvider, Flex, Text } from '@chakra-ui/react';
import customTheme from '../styles/theme';
import React from 'react';

export const decorators = [
  (Story) => (
    <ChakraProvider theme={customTheme}>
      <Story />
    </ChakraProvider>
  )
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};
