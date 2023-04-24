import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'

import { useDarkMode } from '@shared/hooks/useDarkMode'
import { RootStackLibraryParamList } from '@components/app/routes/stack/library/library.model'

const windowWidth = Dimensions.get('window').width

type NavigationProps = StackNavigationProp<RootStackLibraryParamList>

interface Props {
  id: string
}

const Card = ({ id }: Props) => {
  const { textColorSecondary } = useDarkMode()
  const navigate = useNavigation<NavigationProps>()

  const HandlePress = () => {
    navigate.navigate('DetailsLibrary', {
      id,
    })
  }

  return (
    <TouchableOpacity
      onPress={HandlePress}
      style={{
        ...styles.container,
        width: windowWidth * 0.45,
      }}
      activeOpacity={0.8}>
      <ImageBackground
        source={{
          uri: 'https://th.bing.com/th/id/OIP.ql2VGSQp7iFMmfUiFPGg_QAAAA?pid=ImgDet&rs=1',
        }}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.imageContent}>
          <LinearGradient
            colors={['rgba(221, 215, 215, 0)', 'rgba(34,34,34,0.7)']}>
            <Text style={styles.imageTitle}>Inside</Text>
          </LinearGradient>
          <Text
            style={{
              ...styles.totalPages,
              backgroundColor: textColorSecondary.color,
            }}>
            109
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  )
}

export default Card

const styles = StyleSheet.create({
  container: {
    height: 300,
    marginHorizontal: 5,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: { width: '100%', height: '100%' },
  imageContent: {
    justifyContent: 'flex-end',
    height: '100%',
  },
  totalPages: {
    alignContent: 'center',
    borderRadius: 5,
    fontWeight: '700',
    color: '#000',
    position: 'absolute',
    paddingHorizontal: 5,
    fontSize: 12,
    top: 10,
    left: 5,
  },
  imageTitle: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    padding: 10,
  },
})
