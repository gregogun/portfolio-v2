import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import { styles } from './styles';
import { colors } from './colors';
import { Heading, Text, fonts, textStyles } from './typography';
import { Button } from './components/button';

const breakpoints = createBreakpoints({
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '90em',
  '3xl': '120em'
});

const overrides = {
  breakpoints,
  styles,
  colors,
  fonts,
  textStyles,
  components: {
    Button,
    Heading,
    Text
  }
};

export default extendTheme(overrides);
