import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

import { LibraySack, MoreStack } from '../stack'
import { RootTabsParamList, TABS } from './tabs.model'
import { useDarkMode } from '@shared/hooks/useDarkMode'
import Icon from '@shared/components/ui/Icon'

const TABS_ROUTES: TABS[] = [
  {
    id: 'library',
    name: 'Library',
    component: LibraySack,
    Icon: 'library-outline',
  },
  {
    id: 'updates',
    name: 'Updates',
    component: LibraySack,
    Icon: 'alert-circle-outline',
  },
  {
    id: 'history',
    name: 'History',
    component: LibraySack,
    Icon: 'time-outline',
  },

  {
    id: 'browse',
    name: 'Browse',
    component: LibraySack,
    Icon: 'compass-outline',
  },
  {
    id: 'more',
    name: 'More',
    component: MoreStack,
    Icon: 'ellipsis-horizontal',
  },
]

const Tab = createMaterialBottomTabNavigator<RootTabsParamList>()

const TabNavigation = () => {
  const { backgroundStyleSecondary, textColorPrimary, textColorSecondary } =
    useDarkMode()

  return (
    <Tab.Navigator
      initialRouteName="Library"
      barStyle={{
        backgroundColor: backgroundStyleSecondary.backgroundColor,
      }}
      inactiveColor={textColorPrimary.color}
      activeColor={textColorSecondary.color}>
      {TABS_ROUTES.map(val => (
        <Tab.Screen
          key={val.id}
          name={val.name}
          component={val.component}
          options={{
            tabBarLabel: val.name,
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({ color }) => (
              <Icon key={val.id} size={25} name={val.Icon} color={color} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  )
}

export default TabNavigation
