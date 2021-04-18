import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        overflowX: 'hidden',
        color: props.colorMode === 'light' ? 'dark' : 'light',
        bg: props.colorMode === 'light' ? 'light' : 'dark'
      }
    })
  },
  components: {
    Button: {
      // Styles for the base style
      baseStyle: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        borderRadius: 'sm'
      },
      // Styles for the size variations
      sizes: {
        sm: {
          fontSize: 'xs',
          px: '0.75rem',
          py: '0.5rem'
        },
        md: {
          fontSize: 'md',
          px: '1rem',
          py: '0.5rem'
        },
        lg: {
          fontSize: 'lg',
          px: '1.5rem',
          py: '0.75rem'
        }
      },
      // Styles for the visual style variations
      variants: {
        primary: {
          border: '1px solid',
          borderColor: 'default.dark',
          color: 'default.dark',
          _hover: {
            bg: 'default.dark',
            color: 'default.light'
          },
          _active: {
            bg: 'default.dark',
            color: 'default.light'
          },
          _disabled: {
            borderColor: 'neutral.200',
            color: 'neutral.200'
          }
        },
        secondary: {
          bg: 'default.dark',
          color: 'default.light',
          _hover: {
            bg: 'neutral.600'
          },
          _active: {
            bg: 'default.dark'
          },
          _disabled: {
            bg: 'neutral.100',
            color: 'neutral.200'
          }
        },
        primaryThemed: (props) => ({
          border: '1px solid',
          borderColor:
            props.colorMode === 'light' ? 'primary.500' : 'secondary.300',
          color: props.colorMode === 'light' ? 'primary.500' : 'secondary.300',
          _hover: {
            bg: props.colorMode === 'light' ? 'primary.600' : 'secondary.400',
            color:
              props.colorMode === 'light' ? 'default.light' : 'default.dark'
          }
        }),
        secondaryThemed: (props) => ({
          bg: props.colorMode === 'light' ? 'primary.500' : 'secondary.300',
          color: props.colorMode === 'light' ? 'default.light' : 'default.dark',
          _hover: {
            bg: props.colorMode === 'light' ? 'primary.600' : 'secondary.400'
          }
        })
      },
      // The default `size` or `variant` values
      defaultProps: {
        size: 'md',
        variant: 'primary'
      }
    }
  },
  colors: {
    default: {
      light: '#fcfcfc',
      dark: '#232323'
    },
    primary: {
      100: '#D1C1F4',
      200: '#B199E7',
      300: '#9C7DE4',
      400: '#8F67D7',
      500: '#805AD5',
      600: '#744EC8',
      700: '#311968'
    },
    secondary: {
      100: '#E6FFFA',
      200: '#B2F5EA',
      300: '#81E6D9',
      400: '#4FD1C5',
      500: '#38B2AC',
      600: '#319795',
      700: '#2C7A7B'
    },
    neutral: {
      100: '#F4F4F4',
      200: '#D9D9D9',
      300: '#A6A6A6',
      400: '#8C8C8C',
      500: '#737373',
      600: '#595959',
      700: '#404040'
    }
  },
  fonts: {
    heading: 'Sora',
    body: 'Sora'
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false
  }
});

export default theme;
