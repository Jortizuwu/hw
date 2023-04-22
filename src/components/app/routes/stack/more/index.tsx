import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { RootMoreStackParamList } from './more.model'
import { useDarkMode } from '@shared/hooks/useDarkMode'
import { MoreScreen } from '@screens/index'

const Stack = createStackNavigator<RootMoreStackParamList>()

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
        name="HomeMore"
        component={MoreScreen}
        options={{
          headerTitle: 'More',
        }}
      />
    </Stack.Navigator>
  )
}

export default StackNavigator
