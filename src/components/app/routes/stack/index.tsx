// import { StyleSheet } from 'react-native'
import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { RootStackParamList } from './stack.model'
import Home from '../../../../screens/home'

const Stack = createStackNavigator<RootStackParamList>()

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}

export default StackNavigator

// const styles = StyleSheet.create({})
