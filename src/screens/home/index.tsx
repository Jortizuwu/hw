import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'

import { RootStackParamList } from '../../components/app/routes/stack/stack.model'

interface Props extends StackScreenProps<RootStackParamList, 'Home'> {}

const Home = ({}: Props) => {
  return (
    <View>
      <Text style={styles.color}>Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  color: { color: 'red' },
})
