import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/montserrat/500.css';
import '@fontsource/sora/700.css';
import customTheme from '../styles/theme';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
