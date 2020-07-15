import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { View } from 'react-native-ui-lib'
import { colours, fonts } from '../styles/index'

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
  txt: {
    fontFamily: fonts.primaryBold,
    fontWeight: 'bold',
    fontSize: 18,
    paddingBottom: 8,
  }
})

const GameBoard = (props) => {
  return (
    <View flex-9 row center marginV-10
      style={styles.container}
    >
      <View flex-3 column center>
        <Text style={styles.txt}>
          Computer
        </Text>
        <GameBoardIcon type="machine"/>
      </View>
      <View flex center marginT-40>
        <CountdownCircle />
      </View>
      <View flex-3 column center>
        <Text style={styles.txt}>
          You
        </Text>
        <GameBoardIcon type={props.playerChoice} />
      </View>
    </View>
  )
}

export default GameBoard