import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import { RootStackLibraryParamList } from './library.model'
import { HomeLibrary } from '../../../../../screens'
import { useDarkMode } from '../../../../../shared/hooks/useDarkMode'
import { View } from 'react-native'
import Button from '../../../../../shared/components/ui/Button'

const Stack = createStackNavigator<RootStackLibraryParamList>()

const HeaderRight = () => {
  return (
    <View style={styles.headerRight}>
      <Button type="ICON" name="search-outline" />
      <Button type="ICON" name="filter" />
      <Button type="ICON" name="ellipsis-vertical" />
    </View>
  )
}

const StackNavigator = () => {
  const { backgroundStylePrimary, textColorPrimary } = useDarkMode()

  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          flex: 1,
          backgroundColor: backgroundStylePrimary.backgroundColor,
        },
        headerMode: 'screen',
        headerTintColor: textColorPrimary.color,
        headerStyle: {
          backgroundColor: backgroundStylePrimary.backgroundColor,
          elevation: 0,
          shadowOpacity: 0,
        },
      }}>
      <Stack.Screen
        name="HomeLibrary"
        component={HomeLibrary}
        options={{
          headerTitle: 'Library',
          // eslint-disable-next-line react/no-unstable-nested-components
          headerRight: () => <HeaderRight />,
        }}
      />
    </Stack.Navigator>
  )
}

export default StackNavigator

const styles = StyleSheet.create({
  headerRight: {
    width: 150,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})
