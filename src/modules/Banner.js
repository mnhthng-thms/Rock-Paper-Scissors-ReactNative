import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { View } from 'react-native-ui-lib'
import { fonts, colours } from '../styles/index'

const styles = StyleSheet.create({
  container: {
    backgroundColor: colours.pumpkin,
    borderRadius: 15,
    marginHorizontal: 3 + '%',
  },
  txt: {
    fontFamily: fonts.headline,
    fontSize: 24,
    color: colours.white
  }
})

const Banner = () => {
  return (
    <View flex-2 row center marginB-10
      style={styles.container}
    >
      <Text style={styles.txt}>Fuck this shit I'm real</Text>
    </View>
  )
}

export default Banner
