import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { View } from 'react-native-ui-lib'
import ChoiceButton from '../components/ChoiceButton'
import colours from '../styles/colours'

const styles = StyleSheet.create({
  container: {
    marginTop: 6 + '%',
    marginBottom: 9 + '%',
    paddingHorizontal: 2 + '%'
  },
  inside: {
    fontWeight: 'bold',
    color: colours.white
  }
})

const GameChoices = (props) => {
  return (
    <View flex-1 row centerV spread
      style={styles.container}
    >
      <ChoiceButton 
        type="rock" 
        onPress={props.onRockPressed}
      />
      <ChoiceButton
        type="paper" 
        onPress={props.onPaperPressed}
      />
      <ChoiceButton 
        type="scissors" 
        onPress={props.onScissorsPressed}  
      />
    </View>
  )
}

export default GameChoices