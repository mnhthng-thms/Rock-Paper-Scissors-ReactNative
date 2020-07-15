import { memoizer } from './utils/fp'

// both in miliseconds
const DURATION = 5000
const TIME_GAP = 0

const choices = ["rock", "paper", "scissors"]

/* randomChoice :: Void -> Number
    * @return: a natural number in range of 1..3
*/
const randomChoice = () => Math.floor(Math.random() * 3) + 1 

/* _getRoundResult :: String/Number -> String/Number -> Enum<Number>
   * @args:   
      - `0` means undefined
      - `1` is the same as `rock`
      - `2` is the same as `paper`
      - `3` is the same as `scissors`
   * @return: 
      - `-1` means that the player loses 
      - `0` means tie
      - `1` means that the player wins
*/
const getRoundResult = (computerChoice) => (playerChoice) => {
  const isRock = x => (x == 1) || (x == choices[0])
  const isPaper = x => (x == 2) || (x == choices[1])
  const isScissors = x => (x == 3) || (x == choices[2])

  // in case player choice is undefined
  if (playerChoice === 0) return -1

  if (isRock (computerChoice)) {
    return (x => {
      if (isRock (x)) return 0
      if (isPaper (x)) return 1
      if (isScissors (x)) return -1
    }) (playerChoice)
  }

  if (isPaper (computerChoice)) {
    return (x => {
      if (isRock (x)) return -1
      if (isPaper (x)) return 0
      if (isScissors (x)) return 1
    }) (playerChoice)
  }

  if (isScissors (computerChoice)) {
    return (x => {
      if (isRock (x)) return 1
      if (isPaper (x)) return -1
      if (isScissors (x)) return 0
    }) (playerChoice)
  }

  // in case computer choice is undefined, which is not likely to happen
  return 1
}

export {
  DURATION, 
  TIME_GAP, 
  getRoundResult,
  randomChoice
}