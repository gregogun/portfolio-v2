import {
  Button,
  ChakraProvider,
  Flex,
  IconButton,
  useColorMode,
  useMediaQuery
} from '@chakra-ui/react';
import '@fontsource/montserrat/500.css';
import '@fontsource/sora/700.css';
import customTheme from '../styles/theme';
import React from 'react';
import { IoMoon, IoSunnyOutline } from 'react-icons/io5';

const Nav = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isLarge] = useMediaQuery('(min-width: 992px)');
  return (
    <Flex p="0.5rem" justifyContent="space-between" align="center">
      {children}
      {isLarge ? (
        <Button
          position="absolute"
          top="1rem"
          right="1rem"
          onClick={toggleColorMode}
        >
          Lights
          {colorMode === 'light' ? ' off' : ' on'}
        </Button>
      ) : (
        <IconButton
          borderRadius="sm"
          variant="icon"
          onClick={toggleColorMode}
          aria-label={
            colorMode === 'light' ? 'Toggle dark mode' : 'Toggle light Mode'
          }
          icon={
            colorMode === 'light' ? (
              <IoMoon size="1.25rem" />
            ) : (
              <IoSunnyOutline size="1.25rem" />
            )
          }
        />
      )}
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
