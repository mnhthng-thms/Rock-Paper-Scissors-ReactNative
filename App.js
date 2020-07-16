import React, { useState, useEffect } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native'
import { useMachine } from '@xstate/react'

import { STATUS_BAR_HEIGHT } from './src/helpers/Constants'
import { colours } from './src/styles/index' 
import gameMachine from './src/gameMachine'

import { 
  Banner, 
  GameBoard, 
  GameChoices, 
  MovesHistory 
} from './src/modules/index'
import { sendParent } from 'xstate'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.white,
    paddingTop: STATUS_BAR_HEIGHT,
  }
})

const App = () => {
  const [gameState, send] = useMachine(gameMachine)
  const getContextValue = (keyName) => gameState.context[keyName] 

  const [playerChoice, setPlayerChoice] = useState('')
  const [playerScore, setPlayerScore] = 
    useState(getContextValue('playerScore'))
  const [compScore, setCompScore] = 
    useState(getContextValue('computerScore'))
  const [compPastMoves, setMoves] = useState(getContextValue('computerPastMoves'))
  const [bannerState, setBannerState] = useState(0)
  const [timerKey, setTimerKey] = useState('0')
  

  useEffect(() => {
    let newPlayerScore = getContextValue('playerScore')
    let newCompScore = getContextValue('computerScore')
    /* update `bannerState` according to the last game result */
    setBannerState(getContextValue('lastGameResult'))

    /* update `playerScore` & `comScore`*/
    setCompScore(newCompScore)
    setPlayerScore(newPlayerScore)
    setMoves(getContextValue('computerPastMoves'))
  }, [gameState])

   return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Banner 
          computerScore={compScore}
          playerScore={playerScore}
          stateCode={bannerState}
        />
        <GameBoard
          playerChoice={playerChoice}
          timerKey={timerKey}
        />
        <MovesHistory 
          values={compPastMoves}
        />
        <GameChoices 
          onRockPressed={() => {
            setPlayerChoice('rock')
            send('playerMadeChoice', { value: 1 })
            send('processGame')
            setTimerKey(new Date().getTime())
          }}
          onPaperPressed={() => {
            setPlayerChoice('paper')
            send('playerMadeChoice', { value: 2 })
            send('processGame')
            setTimerKey(new Date().getTime())
          }}
          onScissorsPressed={() => {
            setPlayerChoice('scissors')
            send('playerMadeChoice', { value: 3 })
            send('processGame')
            setTimerKey(new Date().getTime())
          }}
        />
      </SafeAreaView>
    </>
  )
}

export default App
