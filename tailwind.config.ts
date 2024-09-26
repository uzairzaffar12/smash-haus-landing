import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/interfaces/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      screens: {
        lg: '1025px',
      },
      colors: {
        black: '#1B1B1B',
        blue: {
          60: '#3706FD',
          70: '#5b33ff',
        },
      },
      boxShadow: {
        grey: '0px 4px 73px 0px #BEBEBE40',
      },
      fontFamily: {
        SFProDisplayMed: ['SFProDisplayMed'],
        SFProDisplayReg: ['SFProDisplayReg'],
        SFProDisplayBold: ['SFProDisplayBold'],
        PoppinsMed: ['PoppinsMed'],
        PoppinsBold: ['PoppinsBold'],
      },
    },
  },
  plugins: [],
};
export default config;
