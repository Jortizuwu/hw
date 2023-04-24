import React from 'react'

import Ionicons from 'react-native-vector-icons/Ionicons'
import { IconButtonProps } from 'react-native-vector-icons/Icon'

const Icon = ({ name, color, size, ...rest }: IconButtonProps) => {
  return <Ionicons {...rest} name={name} size={size} color={color} />
}

export default Icon
