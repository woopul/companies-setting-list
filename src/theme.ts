const theme = {
  palette: {
    background: {
      checkBoxList: '#f5f5f5',
    },
    button: {
      active: '#282828',
      focus: '#E5E5E5',
      hover: '#FF858C',
      primary: '#FF4A55',
      default: '#ced0d9',
    },
    text: {
      primary: '#000',
      secondary: '#FFF'
    }
  },
  spacing: (multiplier = 1) => `${4 * multiplier}px`,
  typography: {
    h1: {
      'font-weight': '400',
      'font-size': '32px'
    },
    h3: {
      'font-weight': 'bold',
      'font-size': '20px'
    },
    body: {
      'font-weight': 'normal',
      'font-size': '16px'
    },
    button: {
      'font-weight': '500',
      'font-size': '16px'
    },
  }
};

export default theme;
