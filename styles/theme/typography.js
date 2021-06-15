export const fonts = {
  heading: 'Sora, Tahoma, sans-serif',
  body: 'Montserrat, Verdana, sans-serif'
};

export const Heading = {
  sizes: null,
  variants: {
    h1: {
      textStyle: 'h1'
    },
    h2: {
      textStyle: 'h2'
    },
    h3: {
      textStyle: 'h3'
    },
    h4: {
      textStyle: 'h4'
    }
  }
};

export const Text = {
  sizes: null,
  variants: {
    preTitle: (props) => ({
      textStyle: 'preTitle',
      color: props.colorMode === 'light' ? 'neutral.600' : 'neutral.100'
    }),
    subtitle: (props) => ({
      textStyle: 'subtitle',
      color: props.colorMode === 'light' ? 'neutral.600' : 'neutral.100'
    }),
    body: (props) => ({
      textStyle: 'body',
      color: props.colorMode === 'light' ? 'neutral.600' : 'neutral.200'
    }),
    bodyLight: (props) => ({
      textStyle: 'bodyLight',
      color: props.colorMode === 'light' ? 'neutral.700' : 'neutral.200'
    }),
    small: {
      textStyle: 'small'
    }
  },
  defaultProps: {
    variant: 'body'
  }
};

export const textStyles = {
  h1: {
    fontSize: { base: '32px', lg: '56px' },
    fontWeight: 700,
    lineHeight: { base: '140%', lg: '125%' }
  },
  h2: {
    fontSize: { base: '24px', xl: '36px' },
    fontWeight: 700,
    lineHeight: { base: '150%', lg: '130%' }
  },
  h3: {
    fontSize: { base: '20px', xl: '28px' },
    fontWeight: 700,
    lineHeight: { base: '150%', lg: '140%' }
  },
  h4: {
    fontSize: { base: '18px', xl: '24px' },
    fontWeight: 700,
    lineHeight: { base: '150%', lg: '140%' }
  },
  subtitle: {
    fontSize: { base: '18px', xl: '24px' },
    fontWeight: 400,
    lineHeight: { base: '24px', lg: '140%' }
  },
  preTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    casing: 'uppercase',
    lineHeight: '150%'
  },
  body: {
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '150%'
  },
  bodyLight: {
    fontSize: '16px',
    fontWeight: 300,
    lineHeight: '150%'
  },
  small: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '160%'
  }
};
