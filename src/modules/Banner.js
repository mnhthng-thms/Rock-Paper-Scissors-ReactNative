import React,{ useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { fonts, colours } from '../styles/index'
import { normalise } from '../helpers/Constants'

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center',
    marginBottom: normalise(10), 
    borderRadius: normalise(15),
    marginHorizontal: 3 + '%',
  },
  txt: {
    fontFamily: fonts.headline,
    fontSize: normalise(24),
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
    <View
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
