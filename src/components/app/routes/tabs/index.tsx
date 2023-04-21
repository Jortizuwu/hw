import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

import StackNavigator from '../stack'
import { RootTabsParamList } from './tabs.model'

const Tab = createMaterialBottomTabNavigator<RootTabsParamList>()

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Library" component={StackNavigator} />
    </Tab.Navigator>
  )
}

export default TabNavigation
