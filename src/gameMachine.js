import { Machine, assign } from 'xstate'
import * as gameplay from './gameplay'
import { enqueue } from './utils/DataStructures'

const NUM_MOVES = 5

/* This machine is completely decoupled from React */
const gameMachine = Machine(
  {
    id: 'game',
    context: {
      // store up the latest 5 past moves
      computerPastMoves: [],
      lastGameResult: undefined,
      computerChoice: 0,
      playerChoice: 0,
      computerScore: 0, 
      playerScore: 0
    },  
    initial: 'WAITING', 
    states: {
      WAITING: { 
        /* Entry actions: have computer made random choice */
        entry: ['updateComputerChoice'],
        after: {
          DURATION: 'JUDGEMENT.LOSE'
        }, 
        on: {
          playerMadeChoice: {
            actions: ['updatePlayerChoice']
          }, 
          processGame: [
            { target: 'JUDGEMENT.WIN', cond: 'didWin' },
            { target: 'JUDGEMENT.LOSE', cond: 'didLose' }, 
            { target: 'JUDGEMENT.TIE' }
          ]
        },
      }, 
      JUDGEMENT: {
        initial: 'TIE',
        states: {
          TIE: {
            // update last game result to `0`
            entry: ['updateLastGameResult']
          },
          LOSE: {
            // last game result: `-1`; computer score ++
            entry: ['increaseComputerScore']
          }, 
          WIN: {
            // last game result: `1`; player score ++
            entry: ['increasePlayerScore']
          }
        }, 
        after: {
          TIME_GAP: 'WAITING'
        }, 
        exit: ['resetChoices']
      }
    }
  }, 
  {
    actions: {
      /* Actions implementation */
      updateComputerChoice: assign({
        computerChoice: () => gameplay.randomChoice()
      }),
      updatePlayerChoice: assign({
        playerChoice: (_, event) => event.value    
      }),
      updateLastGameResult: assign({
        lastGameResult: 0
      }),
      increaseComputerScore: assign({
        lastGameResult: -1, 
        computerScore: (context) => context.computerScore + 1
      }), 
      increasePlayerScore: assign({
        lastGameResult: 1,
        playerScore: (context) => context.playerScore + 1
      }),
      resetChoices: assign({
        computerPastMoves: (context) => 
          enqueue(NUM_MOVES)(context.computerPastMoves)(context.computerChoice),
        playerChoice: 0, 
        computerChoice: 0
      })
    }, 
    guards: {
      didWin: (context) => 
        gameplay.getRoundResult(context.computerChoice)(context.playerChoice) == 1, 
      didLose: (context) => 
        gameplay.getRoundResult(context.computerChoice)(context.playerChoice) == -1
    },
    delays: {
      DURATION: gameplay.DURATION, 
      TIME_GAP: gameplay.TIME_GAP
    }  
  }
)

// gameMachine.transition(WAITING, { type: 'playerMadeChoice', value: 1 })

export default gameMachine
