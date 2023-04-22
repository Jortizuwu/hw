import React from 'react'

import Ionicons from 'react-native-vector-icons/Ionicons'
import { IconButtonProps } from 'react-native-vector-icons/Icon'

const Icon = ({ name, color, size }: IconButtonProps) => {
  return <Ionicons name={name} size={size} color={color} />
}

export default Icon
