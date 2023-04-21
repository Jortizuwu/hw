const COLORS = {
  primary: '#312651',
  secondary: '#444262',
  tertiary: '#FF7754',

  gray: '#838292',
  gray2: '#C1C0C8',

  white: '#F3F4F8',
  dark: '#121212',

  lightWhite: '#FAFAFC',
  darkWhite: '#2a2929',
}

const FONT = {
  regular: 'DMRegular',
  medium: 'DMMedium',
  bold: 'DMBold',
}

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
}

const SHADOWS = {
  small: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: '#737373',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
}

export { COLORS, FONT, SIZES, SHADOWS }
