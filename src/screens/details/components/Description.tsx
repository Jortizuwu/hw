import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import Icon from '@shared/components/ui/Icon'
import LinearGradient from 'react-native-linear-gradient'
import { useDarkMode } from '@shared/hooks/useDarkMode'

const Description = () => {
  const { textColorPrimary, backgroundStylePrimary, textColorSecondary } =
    useDarkMode()
  const [showMore, setShowMore] = useState<number | undefined>(50)
  const [isShowMore, setIsShowMore] = useState(false)

  const handelShowMore = () => {
    setShowMore(undefined)
    setIsShowMore(true)
  }

  const handelReset = () => {
    setShowMore(50)
    setIsShowMore(false)
  }
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={isShowMore ? handelReset : handelShowMore}
      style={{ ...styles.btn }}>
      <Text
        style={{
          ...styles.description,
          height: showMore,
          ...textColorPrimary,
        }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>
      <LinearGradient
        locations={[0, 1]}
        colors={[
          'rgba(255, 255, 255, 0)',
          backgroundStylePrimary.backgroundColor,
        ]}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{ ...styles.gradient, bottom: isShowMore ? -20 : 0 }}>
        <Icon
          style={styles.icon}
          color={textColorSecondary.color}
          name={isShowMore ? 'chevron-up-outline' : 'chevron-down-outline'}
          size={30}
        />
      </LinearGradient>
    </TouchableOpacity>
  )
}

export default Description

const styles = StyleSheet.create({
  btn: {
    padding: 0,
    marginBottom: 20,
    zIndex: 1000,
  },
  description: {
    textAlign: 'justify',
    // overflow: 'hidden',
  },
  icon: {},
  gradient: {
    alignItems: 'center',
    width: '100%',
    height: 30,
    // padding: 10,
    position: 'absolute',
  },
})
