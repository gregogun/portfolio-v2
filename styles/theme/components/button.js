export const Button = {
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
        color: props.colorMode === 'light' ? 'default.light' : 'default.dark'
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
};
