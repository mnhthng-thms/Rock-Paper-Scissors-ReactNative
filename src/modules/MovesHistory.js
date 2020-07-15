import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Text } from 'react-native-ui-lib'
import { colours, fonts } from '../styles/index'

const FONT_SIZE = 14

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 3+'%',
    marginVertical: 3+'%'
  }, 
  labelContainer: {
    position: 'absolute',
    backgroundColor: colours.white,
    top: -(FONT_SIZE - 1),
    left: FONT_SIZE * 2,
    padding: 5,
    zIndex: 2
  }, 
  boxContainer: {
    borderWidth: 2, 
    height: 95+'%',
    borderColor: colours.minsk,
    justifyContent: 'flex-end',
    borderRadius: 12,
  }, 
  txt: {
    fontFamily: fonts.primaryBold,
    fontWeight: 'bold',
    fontSize: FONT_SIZE
  }
})

const MovesHistory = ({ values, ...props}) => {
  return (
    <View flex-3 row center marginT-10
      style={styles.container}
    >
      <View style={styles.labelContainer}>
        <Text style={styles.txt}>
          Computer's Past Moves 
        </Text>
      </View>
      <View flex-1 paddingH-20
        style={styles.boxContainer}
      >
        <Text>{values}</Text>
      </View>
    </View>
  )
} 

export default MovesHistory