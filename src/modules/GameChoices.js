import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { View } from 'react-native-ui-lib'
import ChoiceButton from '../components/ChoiceButton'
import colours from '../styles/colours'

const styles = StyleSheet.create({
  container: {
    marginVertical: 6 + '%',
    paddingHorizontal: 3 + '%',
  },
  inside: {
    fontWeight: 'bold',
    color: colours.white
  }
})

const GameChoices = () => {
  return (
    <View flex-1 row centerV spread
      style={styles.container}
    >
      <ChoiceButton type="rock" />
      <ChoiceButton type="paper" />
      <ChoiceButton type="scissors" />
    </View>
  )
}

export default GameChoices