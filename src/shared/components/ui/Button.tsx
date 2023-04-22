import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { IconButtonProps } from 'react-native-vector-icons/Icon'
import Icon from 'react-native-vector-icons/Ionicons'

export interface BtnTextProps {
  title: string
}

export interface BtnProps {
  type: 'ICON' | 'TEXT'
  name?: string
  color?: string
}

const IconButton = ({ name, color }: IconButtonProps) => {
  return (
    <TouchableOpacity style={styles.icon}>
      <Icon name={name} size={25} color={color} />
    </TouchableOpacity>
  )
}
const TextButton = ({ title }: BtnTextProps) => {
  return (
    <TouchableOpacity style={styles.content} activeOpacity={0.5}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

const Button = ({ type, name = '', color = '#FAFAFC' }: BtnProps) => {
  if (type === 'ICON') {
    return <IconButton name={name} color={color} />
  }

  return <TextButton title={name} />
}

export default Button

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    // backgroundColor: COLORS.primary,
    borderRadius: 20,
    padding: 18,
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    // color: COLORS.lightWhite,
  },
  icon: {
    // backgroundColor: COLORS.tertiary,
    padding: 10,
    borderRadius: 15,
  },
})
