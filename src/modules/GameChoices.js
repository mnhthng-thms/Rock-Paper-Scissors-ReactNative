import React from 'react'
import { StyleSheet, View } from 'react-native'
import ChoiceButton from '../components/ChoiceButton'
import colours from '../styles/colours'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItem: 'center',
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
    <View
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