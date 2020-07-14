import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { View } from 'react-native-ui-lib'
import colours from '../styles/colours'

import CountdownCircle from '../components/CountdownCircle'
import GameBoardIcon from '../components/GameBoardIcon'

const styles = StyleSheet.create({
  container: {
    borderColor: colours.minsk,
    backgroundColor: colours.lavender1,
    borderWidth: 3,
    borderRadius: 15,
    marginHorizontal: 3 + '%',
  },
  inside: {
    fontWeight: 'bold',
    color: colours.white,
    paddingHorizontal: 2 + '%',
  }
})

const GameBoard = (props) => {
  return (
    <View flex-8 row center marginV-10
      style={styles.container}
    >
      <GameBoardIcon type={props.computerChoice} />
      <CountdownCircle />
      <GameBoardIcon type={props.playerChoice} />
    </View>
  )
}

export default GameBoard