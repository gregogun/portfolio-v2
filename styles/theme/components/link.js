export const Link = {
  // style object for base or default style
  baseStyle: {
    textDecoration: 'underline'
  },
  // styles for different visual variants ("outline", "solid")
  variants: {
    default: (props) => ({
      color: props.colorMode === 'light' ? 'primary.500' : 'secondary.300'
    }),
    noStyle: {
      textDecoration: 'none',
      _hover: {
        textDecoration: 'none'
      }
    },
    subtle: (props) => ({
      color: props.colorMode === 'light' ? 'neutral.600' : 'default.light',
      textDecoration: 'none',
      _hover: {
        color: props.colorMode === 'light' ? 'default.dark' : 'neutral.200',
        textDecoration: 'none'
      }
    })
  },
  // default values for `size` and `variant`
  defaultProps: {
    variant: 'default'
  }
};
