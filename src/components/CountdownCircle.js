import React from 'react'
import { StyleSheet, Text, View, Animated } from 'react-native'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'

import { TIME_GAP, DURATION } from '../gameplay'

import colours from '../styles/colours'
const green = colours.greenZelyoni
const yellow = colours.yellowSunshine
const red = colours.redVenetian

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  remainingTimeTxt: {
    fontSize: 14,
  }
})

const CountdownCircle = () => {
  return (
    <View style={styles.container}>
      <CountdownCircleTimer
        isPlaying
        size={50}
        duration={DURATION}
        colors={[[green, 0.4], [yellow, 0.3], [red, 0.3]]}
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