import React from 'react'

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native'

const styles = StyleSheet.create({
})

import Banner from './src/modules/Banner'
import GameBoard from './src/modules/GameBoard'
import GameChoices from './src/modules/GameChoices'

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <Banner/>
        <GameBoard/>
        <GameChoices/>
      </SafeAreaView>
    </>
  )
}

export default App
