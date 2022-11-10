import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import {MotiView, MotiText} from 'moti'

function Header({name}) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#8000ff'} animated />
      <MotiView
        style={styles.content}
        from={{
          translateY: -150,
          opacity: 0,
        }}
        animate={{
          translateY: 0,
          opacity: 1,
        }}
        transition={{
          type: 'timing',
          duration: 800,
          delay: 300,
        }}
      >
        <MotiText
          style={styles.username}
          from={{
            translateX: -300,
          }}
          animate={{
            translateX: 0,
          }}
          transition={{
            type: 'timing',
            duration: 800,
            delay: 800,
          }}
        >
          Olá, {name}
        </MotiText>
        <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
          <Feather name={'user'} size={27} color={'#fff'} />
        </TouchableOpacity>
      </MotiView>
    </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({
  statusbar: {
    backgroundColor: '#8000ff',
  },
  container: {
    backgroundColor: '#8000ff',
    paddingTop: 22,
    flexDirection: 'row',
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 44,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  username: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonUser: {
    width: 44,
    height: 44,
    backgroundColor: 'rgba(255,255,255,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 99,
  },
})
