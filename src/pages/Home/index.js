import React from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'

import Header from '../../components/Header'
import Balance from '../../components/Balance'
import Actions from '../../components/Actions'
import Moviments from '../../components/Movements'

const list = [
  {
    id: 1,
    label: 'Boleto',
    value: '300,90',
    date: '17/09/2022',
    type: 0,
  },
  {
    id: 2,
    label: 'Pix',
    value: '400,90',
    date: '17/09/2022',
    type: 1,
  },
]

function Home() {
  return (
    <View style={styles.container}>
      <Header name={'Luiz Fernando'} />
      <Balance saldo={'900,00'} gastos={'-400,00'} />
      <Actions />
      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={item => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <Moviments data={item} />}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  },
})
