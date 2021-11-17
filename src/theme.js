export const theme = {
  global: {
    colors: {
      brand: '#044229',
    },
    font: {
      family: 'Rota, sans-serif',
      size: '16px',
      height: `${16 * 1.4}px`,
    },
  },
  anchor: {
    hover: {
      textDecoration: 'none',
    },
    textDecoration: 'none',
    extend: ({ letterSpacing }) => {
      return {
        'letter-spacing': letterSpacing && `${letterSpacing}px`,
      };
    },
  },
  text: {
    extend: ({ letterSpacing }) => {
      return {
        'letter-spacing': letterSpacing && `${letterSpacing}px`,
      };
    },
  },
  button: {
    default: {
      font: { weight: '600' },
    },
  },
};
