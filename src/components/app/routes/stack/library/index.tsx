import React from 'react'
import { StyleSheet, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import { RootStackLibraryParamList } from './library.model'
import { useDarkMode } from '@shared/hooks/useDarkMode'
import Button from '@shared/components/ui/Button'
import { HomeLibrary, DetailsScreen } from '@screens/index'

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
        presentation: 'transparentModal',
      }}>
      <Stack.Screen
        name="HomeLibrary"
        component={HomeLibrary}
        options={{
          headerTitle: 'Library',
          headerRight: () => <HeaderRight />,
        }}
      />
      <Stack.Screen
        name="DetailsLibrary"
        component={DetailsScreen}
        options={{
          headerTitle: '',
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
