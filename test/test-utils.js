import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@/styles/theme';

const ChakraRenderer = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

const customRender = (ui, options) =>
  render(ui, {
    wrapper: ChakraRenderer,
    ...options
  });

export * from '@testing-library/jest-dom';
export * from '@testing-library/react';
export { customRender as render };
