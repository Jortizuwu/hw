import { FlatList, RefreshControl, StyleSheet, View } from 'react-native'
import React from 'react'

import { Props } from './home.model'
import Card from '@shared/components/ui/Card'

const DATA = [
  { id: '1' },
  { id: '2' },
  { id: '3' },
  { id: '4' },
  { id: '5' },
  { id: '8' },
  { id: '9' },
]

const Home = ({}: Props) => {
  const [refreshing, setRefreshing] = React.useState(false)

  const onRefresh = React.useCallback(() => {
    setRefreshing(true)
    setTimeout(() => {
      setRefreshing(false)
    }, 2000)
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => <Card id={item.id} />}
        keyExtractor={item => item.id}
        ListFooterComponent={() => <View style={styles.separator} />}
        numColumns={2}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  color: { color: 'red' },
  separator: {
    height: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
})
