import React from 'react'
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native'
import { COLORS } from '../../../shared/theme'
import Main from '../routes'

const Layout = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? COLORS.dark : COLORS.white,
  }

  return (
    <SafeAreaView
      style={{
        ...backgroundStyle,
        ...styles.sectionContainer,
      }}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {/* <ScrollView
        style={backgroundStyle}>
      </ScrollView> */}
      <Main />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
})

export default Layout
