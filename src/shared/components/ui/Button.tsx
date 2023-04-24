import { useDarkMode } from '@shared/hooks/useDarkMode'
import React from 'react'
import {
  StyleSheet,
  StyleProp,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'
import { IconButtonProps } from 'react-native-vector-icons/Icon'
import Icon from 'react-native-vector-icons/Ionicons'

interface BtnTextProps {
  title: string
  style?: StyleProp<TouchableOpacityProps>
}

interface BtnProps {
  type: 'ICON' | 'ICONTEXT'
  name?: string
  iconName?: string
  color?: string
  style?: StyleProp<TouchableOpacityProps>
}

interface BtnIconTextProps extends BtnTextProps {
  iconName: string
}

const IconButton = ({ name, color }: IconButtonProps) => {
  return (
    <TouchableOpacity style={styles.icon} activeOpacity={0.3}>
      <Icon name={name} size={25} color={color} />
    </TouchableOpacity>
  )
}
const TextButton = ({ title }: BtnTextProps) => {
  return (
    <TouchableOpacity style={{ ...styles.content }} activeOpacity={0.3}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}
const IconTextButton = ({ iconName, title }: BtnIconTextProps) => {
  const { textColorSecondary, textColorPrimary } = useDarkMode()

  return (
    <TouchableOpacity
      style={{ ...styles.content, width: '50%' }}
      activeOpacity={0.3}>
      <Icon name={iconName} size={30} style={{ ...textColorSecondary }} />
      <Text style={{ ...styles.title, ...textColorPrimary }}>{title}</Text>
    </TouchableOpacity>
  )
}

const Button = ({
  type,
  name = '',
  color = '#FAFAFC',
  iconName = '',
  style,
}: BtnProps) => {
  if (type === 'ICON') {
    return <IconButton name={name} color={color} />
  }

  if (type === 'ICONTEXT') {
    return <IconTextButton iconName={iconName} title={name} style={style} />
  }

  return <TextButton title={name} style={style} />
}

export default Button

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    borderRadius: 20,
    padding: 10,
    width: '100%',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  icon: {
    padding: 10,
    borderRadius: 15,
  },
})
