import React,{ useEffect, useState } from 'react'
import { StyleSheet, Text } from 'react-native'
import { View } from 'react-native-ui-lib'
import { fonts, colours } from '../styles/index'

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    marginHorizontal: 3 + '%',
  },
  txt: {
    fontFamily: fonts.headline,
    fontSize: 24,
    color: colours.white
  }
})

const Banner = (props) => {

  const getBackgroundColor = () => {
    switch (props.stateCode) {
      case 0: 
        return colours.pumpkin
      case 1: 
        return colours.redScalet
      case -1:
        return colours.sahara
      default: 
        return colours.pumpkin
    }
  }

  return (
    <View flex-2 row center marginB-10
      style={[
        styles.container,
        { backgroundColor: getBackgroundColor() }
      ]}
    >
      <Text style={styles.txt}>{props.computerScore}:{props.playerScore}</Text>
    </View>
  )
}

export default Banner
