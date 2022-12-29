import { defineStyleConfig, extendBaseTheme } from '@chakra-ui/react';

import createPallette from './createPalette';

const Heading = defineStyleConfig({
  baseStyle: {
    fontFamily: 'Equinox Regular',
  },
  variants: {
    default: (props) => ({
      color: props.theme.colors[props.colorScheme]?.main,
    }),
  },
  defaultProps: {
    colorScheme: 'primary',
    variant: 'default',
  },
});

const Link = defineStyleConfig({
  variants: {
    default: (props) => ({
      color: props.theme.colors[props.colorScheme]?.main,
      _hover: {
        bg: props.theme.colors[props.colorScheme]?.bg1,
      },
    }),
    active: (props) => ({
      color: props.theme.colors[props.colorScheme]?.main,
      _hover: {
        bg: props.theme.colors[props.colorScheme]?.bg1,
      },
    }),
  },
  defaultProps: {
    colorScheme: 'primary',
    variant: 'default',
  },
});

const rawColors = {
  red: createPallette(0),
  deepOrange: createPallette(15),
  orange: createPallette(35),
  amber: createPallette(45),
  yellow: createPallette(55),
  lime: createPallette(75),
  green: createPallette(120),
  teal: createPallette(160),
  cyan: createPallette(180),
  blue: createPallette(200),
  indigo: createPallette(230),
  deepPurple: createPallette(260),
  purple: createPallette(290),
  magenta: createPallette(330),

  grey: {
    main: 'hsl(0, 0%, 97%)',
    light1: 'hsl(0, 0%, 98%)',
    light2: 'hsl(0, 0%, 99%)',
    light3: 'hsl(0, 0%, 100%)',

    dark1: 'hsl(0, 0%, 80%)',
    dark2: 'hsl(0, 0%, 75%)',
    dark3: 'hsl(0, 0%, 70%)',

    bg1: 'hsl(0, 0%, 10%)',
    bg2: 'hsl(0, 0%, 5%)',
    bg3: 'hsl(0, 0%, 2.5%)',
  },
};

export const colors = {
  primary: rawColors.blue,
  secondary: rawColors.yellow,

  success: rawColors.green,
  warning: rawColors.deepOrange,
  error: rawColors.red,
  ...rawColors,
};

const theme = extendBaseTheme({
  colors,
  styles: {
    global: {
      'html, body': {
        fontFamily: 'Space Grotesk',
        background: 'primary.bg3',
        color: 'primary.main',
      },
    },
  },
  components: { Heading, Link },
});

export default theme;
