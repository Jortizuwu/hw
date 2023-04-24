import { Dimensions, Image, StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'
import { Props } from './details.model'
import LinearGradient from 'react-native-linear-gradient'
import { useDarkMode } from '@shared/hooks/useDarkMode'
import List from './components/List'

const windowHeight = Dimensions.get('window').height

const Details = ({ navigation }: Props) => {
  const { backgroundStylePrimary } = useDarkMode()

  useEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
    })
  }, [navigation])

  return (
    <View style={{ ...styles.container, height: windowHeight * 1 }}>
      <LinearGradient
        locations={[0.1, 0.6]}
        colors={[
          'rgba(255, 255, 255, 0)',
          backgroundStylePrimary.backgroundColor,
        ]}
        style={{ ...styles.greadient, height: windowHeight * 0.6 }}>
        <Image
          source={{
            uri: 'https://th.bing.com/th/id/OIP.ql2VGSQp7iFMmfUiFPGg_QAAAA?pid=ImgDet&rs=1',
          }}
          style={{ ...styles.image, height: windowHeight * 0.6 }}
        />
      </LinearGradient>
      <List />
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    position: 'relative',
  },
  greadient: {
    width: '100%',
    position: 'absolute',
  },
  image: {
    width: '100%',
    position: 'absolute',
    zIndex: -10,
    opacity: 0.5,
    resizeMode: 'cover',
  },
})
