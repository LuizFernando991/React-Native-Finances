import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

function Actions() {
  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name={'addfolder'} size={26} color={'#000'} />
        </View>
        <Text style={styles.buttonLabel}>Entradas</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name={'tagso'} size={26} color={'#000'} />
        </View>
        <Text style={styles.buttonLabel}>Compras</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name={'creditcard'} size={26} color={'#000'} />
        </View>
        <Text style={styles.buttonLabel}>Carteira</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name={'barcode'} size={26} color={'#000'} />
        </View>
        <Text style={styles.buttonLabel}>Boletos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name={'qrcode'} size={26} color={'#000'} />
        </View>
        <Text style={styles.buttonLabel}>Pix</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name={'setting'} size={26} color={'#000'} />
        </View>
        <Text style={styles.buttonLabel}>Conta</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default Actions

const styles = StyleSheet.create({
  container: {
    maxHeight: 84,
    marginBottom: 14,
    marginTop: 18,
    paddingEnd: 14,
    paddingStart: 14,
  },
  actionButton: {
    alignItems: 'center',
    marginRight: 32,
  },
  areaButton: {
    backgroundColor: '#ecf0f1',
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelButton: {
    marginTop: 4,
    textAlign: 'center',
    fontWeight: 'bold',
  },
})
