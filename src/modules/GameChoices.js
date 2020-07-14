import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import colours from '../styles/colours'

const styles = StyleSheet.create({
  container: {
    backgroundColor: colours.orange1,
    flex: 4, 
    flexDirection: 'row',
    paddingHorizontal: 2+'%',
    marginBottom: 3+'%',
    justifyContent: 'center',
    alignItems: 'center', 
  }, 
  inside: {
    fontWeight: 'bold',
    color: colours.white
  }
})

const GameChoices = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.inside}>Game Choices here</Text>
    </View>
  )
}

export default GameChoices