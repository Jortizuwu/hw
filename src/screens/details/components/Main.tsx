import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Button from '@shared/components/ui/Button'
import { useDarkMode } from '@shared/hooks/useDarkMode'
import Description from './Description'

const Main = () => {
  const { textColorPrimary } = useDarkMode()

  return (
    <View>
      <View style={styles.main}>
        <Image
          style={styles.mainImage}
          source={{
            uri: 'https://th.bing.com/th/id/OIP.ql2VGSQp7iFMmfUiFPGg_QAAAA?pid=ImgDet&rs=1',
          }}
        />
        <View>
          <Text style={{ ...styles.title, ...textColorPrimary }}>TITLE</Text>
          <Text style={{ ...styles.subTitle, ...textColorPrimary }}>Autor</Text>
          <Text style={{ ...styles.subTitle, ...textColorPrimary }}>
            More info
          </Text>
        </View>
      </View>
      <View style={styles.iconsContent}>
        <Button type="ICONTEXT" iconName="heart-sharp" name="In library" />
        <Button
          type="ICONTEXT"
          iconName="globe-outline"
          name="In library"
          color={textColorPrimary.color}
        />
      </View>
      <Description />
    </View>
  )
}

export default Main

const styles = StyleSheet.create({
  main: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginTop: 150,
  },
  mainImage: {
    width: 150,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  title: {
    fontSize: 30,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 20,
    textTransform: 'capitalize',
    fontWeight: '500',
  },
  iconsContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
})
