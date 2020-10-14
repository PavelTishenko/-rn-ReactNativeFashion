import { createTheme, createText, BaseTheme } from '@shopify/restyle'

const palette = {
  purpleLight: '#8C6FF7',
  purplePrimary: '#5A31F4',
  purpleDark: '#3F22AB',

  greenLight: '#56DCBA',
  greenPrimary: '#0ECD9D',
  greenDark: '#0A906E',

  black: '#0B0B0B',
  white: '#F0F2F3',
};


const theme: BaseTheme = createTheme({
  colors: {
    primary: '#2CB9B0',
    title1: '#0C0D34',
    title2: '#0C0D34',
    text: 'rgba(12, 13, 52, 0.4)',
    white: 'white',
    grey: 'rgba(12, 13, 52, 0.05)',
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
   
  },
  textVariants: {
    hero: {
       fontSize: 80,
       lineHeight: 80,
       fontFamily: 'System',
       color: 'white',
       textAlign: 'center'
    },
    title1: {
        fontSize: 28,
        fontFamaly: 'System',
        color: '#0C0D34',
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      fontFamaly: 'System'
    },
    body:{
        fontSize: 16,
        lineHeight: 24,
        fontFamaly: 'System',
        
    },
    button: {
      fontSize: 15,
      lineHeight: 24,
      fontFamaly: 'System',
      color: 'text'
    }
}
});
export const Text = createText<Theme>();
export type Theme = typeof theme;
export default theme;