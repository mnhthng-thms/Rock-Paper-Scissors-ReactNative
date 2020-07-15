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
  
  const sendByChoice = (choiceCode) => {
    const payload = { value: choiceCode }
    send('playerMadeChoice', payload)
  }

  useEffect(() => {
    /* update `computerChoice` & `bannerState` */
    const judgementState = gameState.value['JUDGEMENT']
    if (judgementState) {
      switch (judgementState) {
        case 'WIN': 
          setBannerState(1)
        case 'LOSE': 
          setBannerState(-1)
      }
    }
  
    /* update `playerScore` & `comScore`*/
    setCompScore(getContextValue('computerScore'))
    setPlayerScore(getContextValue('playerScore'))
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
        />
        <MovesHistory values={compPastMoves}/>
        <GameChoices 
          onRockPressed={() => {
            setPlayerChoice('rock')
            send('playerMadeChoice', { value: 1 })
          }}
          onPaperPressed={() => {
            setPlayerChoice('paper')
            send('playerMadeChoice', { value: 2 })
          }}
          onScissorsPressed={() => {
            setPlayerChoice('scissors')
            send('playerMadeChoice', { value: 3 })
          }}
        />
      </SafeAreaView>
    </>
  )
}

export default App
