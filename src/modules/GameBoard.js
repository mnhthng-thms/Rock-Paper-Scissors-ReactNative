import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import colours from '../styles/colours'

import CountdownCircle from '../components/CountdownCircle'

const styles = StyleSheet.create({
  container: {
    flex: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 1 + '%',
    marginVertical: 1 + '%',
    backgroundColor: colours.neonBlue,
    borderColor: colours.black,
  },
  inside: {
    fontWeight: 'bold',
    color: colours.white,
    paddingVertical: 2 + '%',
    paddingHorizontal: 2 + '%',
  }
})

const GameBoard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.inside}>Board Game here</Text>
      <CountdownCircle />
    </View>
  )
}

export default GameBoard