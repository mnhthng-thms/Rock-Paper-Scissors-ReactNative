import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native'

import { STATUS_BAR_HEIGHT } from './src/helpers/Constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: STATUS_BAR_HEIGHT,
  }
})

import Banner from './src/modules/Banner'
import GameBoard from './src/modules/GameBoard'
import GameChoices from './src/modules/GameChoices'

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Banner />
        <GameBoard
          computerChoice='rock'
          playerChoice='paper'
        />
        <GameChoices />
      </SafeAreaView>
    </>
  )
}

export default App
