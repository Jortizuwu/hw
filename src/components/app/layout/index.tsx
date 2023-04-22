import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native'
import { useDarkMode } from '@shared/hooks/useDarkMode'

import Main from '../routes'

const Layout = (): JSX.Element => {
  const { backgroundStylePrimary, isDarkMode } = useDarkMode()

  return (
    <SafeAreaView
      style={{
        ...backgroundStylePrimary,
        ...styles.sectionContainer,
      }}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStylePrimary.backgroundColor}
      />
      <View style={{ ...backgroundStylePrimary, ...styles.sectionContainer }}>
        <Main />
      </View>
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
