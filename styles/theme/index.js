import { extendTheme } from '@chakra-ui/react';
import { styles } from './styles';
import { colors } from './colors';
import { Heading, Text, fonts, textStyles } from './typography';
import { Button } from './components/button';

const overrides = {
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
