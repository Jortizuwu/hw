import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import Card from '@shared/components/ui/Card'
import { GLOBAL_THEME } from '@shared/theme'
import Main from './Main'

const DATA = [
  { id: '1' },
  { id: '2' },
  { id: '3' },
  { id: '4' },
  { id: '5' },
  { id: '8' },
  { id: '9' },
]

const List = () => {
  return (
    <View
      style={{
        ...styles.continer,
        ...GLOBAL_THEME.container,
      }}>
      <FlatList
        ListHeaderComponent={<Main />}
        showsVerticalScrollIndicator={false}
        data={DATA}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => <Card id={item.id} />}
        keyExtractor={item => item.id}
        numColumns={2}
        ListFooterComponent={() => <View style={styles.separator} />}
      />
    </View>
  )
}

export default List

const styles = StyleSheet.create({
  continer: { marginTop: 20 },
  separator: {
    height: 10,
  },
})
