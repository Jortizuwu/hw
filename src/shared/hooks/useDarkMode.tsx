import { useColorScheme } from 'react-native'
import { COLORS } from '../theme'

export const useDarkMode = () => {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStylePrimary = {
    backgroundColor: isDarkMode ? COLORS.darkPrimary : COLORS.lightPrimary,
  }
  const backgroundStyleSecondary = {
    backgroundColor: isDarkMode ? COLORS.darkSecondary : COLORS.lightSecondary,
  }

  const textColorPrimary = {
    color: isDarkMode ? COLORS.textDarkPrimary : COLORS.textLightPrimary,
  }
  const textColorSecondary = {
    color: isDarkMode ? COLORS.textDarkSecondary : COLORS.textDarkSecondary,
  }

  return {
    backgroundStylePrimary,
    backgroundStyleSecondary,
    textColorPrimary,
    textColorSecondary,
    isDarkMode,
  }
}
