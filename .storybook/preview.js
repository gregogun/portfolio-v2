import { Button, ChakraProvider, Flex, useColorMode } from '@chakra-ui/react';
import '@fontsource/montserrat/500.css';
import '@fontsource/sora/700.css';
import customTheme from '../styles/theme';
import React from 'react';

const Nav = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex p="0.5rem" justifyContent="space-between" align="center">
      {children}
      <Button onClick={toggleColorMode}>
        Lights
        {colorMode === 'light' ? ' off' : ' on'}
      </Button>
    </Flex>
  );
};

export const decorators = [
  (Story) => (
    <ChakraProvider theme={customTheme}>
      <Nav>
        <Story />
      </Nav>
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
