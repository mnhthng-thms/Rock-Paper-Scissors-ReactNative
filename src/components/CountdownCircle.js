import React from 'react'
import { StyleSheet, Animated } from 'react-native'
import { View } from 'react-native-ui-lib'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import fonts from '../styles/fonts'
import { TIME_GAP, DURATION } from '../gameplay'

import colours from '../styles/colours'
const green = colours.greenZelyony
const yellow = colours.mySin
const red = colours.redVenetian

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  remainingTimeTxt: {
    fontFamily: fonts.primaryBold,
    fontSize: 18
  }
})

const CountdownCircle = () => {
  return (
    <View flex-1 center
      style={styles.container}
    >
      <CountdownCircleTimer
        //isPlaying
        size={48}
        strokeWidth={5}
        duration={DURATION / 1000}
        colors={[[green, 0.4], [yellow, 0.3], [red]]}
        onComplete={() => { return [true, TIME_GAP] }}
      >
        {({ remainingTime, animatedColour }) => (
          <Animated.Text
            style={{ ...styles.remainingTimeTxt, color: animatedColour }}
          >
            {remainingTime}
          </Animated.Text>
        )}
      </CountdownCircleTimer>
    </View>
  )
}

export default CountdownCircle