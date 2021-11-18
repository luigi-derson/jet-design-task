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
    extend: ({ letterSpacing, decoration, family, lineHeight }) => {
      return {
        'letter-spacing': letterSpacing && `${letterSpacing}px`,
        'text-decoration': decoration && decoration,
        'font-family': family && family,
        'line-height': lineHeight && lineHeight,
      };
    },
  },
  paragraph: {
    extend: ({ letterSpacing, fontWeight }) => {
      return {
        'letter-spacing': letterSpacing && `${letterSpacing}px`,
        'font-weight': fontWeight && fontWeight,
      };
    },
  },
  heading: {
    font: {
      family: 'Ravioli',
    },
  },
  box: {
    extend: ({
      position,
      top,
      left,
      right,
      bottom,
      attachment,
      display,
      textAlign,
    }) => {
      return {
        position: position && position,
        top: top && top,
        left: left && left,
        right: right && right,
        bottom: bottom && bottom,
        'background-attachment': attachment && attachment,
        display: display && display,
        'text-align': textAlign && textAlign,
      };
    },
  },
  button: {
    default: {
      font: { weight: '600' },
    },
    primary: {
      background: 'transparent',
      border: {
        color: '#044229',
        width: '1px',
        radius: '55px',
      },
    },
    secondary: {
      background: 'transparent',
      border: {
        color: '#fff',
        width: '1px',
        radius: '55px',
      },
    },
    extend: ({ background }) => {
      return {
        'background-color': background && background,
      };
    },
  },
};
