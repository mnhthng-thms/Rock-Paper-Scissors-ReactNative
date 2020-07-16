import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colours, fonts } from '../styles/index'

import CountdownCircle from '../components/CountdownCircle'
import GameBoardIcon from '../components/GameBoardIcon'

const styles = StyleSheet.create({
  container: {
    flex: 9,
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center', 
    borderColor: colours.minsk,
    backgroundColor: colours.lavender1,
    borderWidth: 3,
    borderRadius: 15,
    marginVertical: 10, 
    marginHorizontal: 3 + '%',
  },
  iconContainer: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center', 
    alignItems: 'center', 
  }, 
  timerContainer: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    marginTop: 40
  },
  txt: {
    fontFamily: fonts.primaryBold,
    fontWeight: 'bold',
    fontSize: 18,
    paddingBottom: 8,
  }
})

const GameBoard = ({playerChoice, timerKey,...props}) => {
  return (
    <View
      style={styles.container}
    >
      <View style={styles.iconContainer}>
        <Text style={styles.txt}>
          Computer
        </Text>
        <GameBoardIcon type="machine"/>
      </View>
      <View style={styles.timerContainer}>
        <CountdownCircle 
          key={timerKey}
        />
      </View>
      <View style={styles.iconContainer}>
        <Text style={styles.txt}>
          You
        </Text>
        <GameBoardIcon type={playerChoice} />
      </View>
    </View>
  )
}

export default GameBoard