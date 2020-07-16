import React from 'react'
import { StyleSheet, FlatList, View, Text } from 'react-native'
import { colours, fonts } from '../styles/index'
import { HistoryIcon } from '../components/index'

const FONT_SIZE = 14

const styles = StyleSheet.create({
  container: {
    flex: 3, 
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center',
    marginHorizontal: 3 + '%',
    marginVertical: 3 + '%'
  }, 
  labelContainer: {
    position: 'absolute',
    backgroundColor: colours.white,
    top: -(FONT_SIZE - 1),
    left: FONT_SIZE,
    padding: 5,
    zIndex: 2
  }, 
  boxContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center',
    paddingHorizontal: 20,
    borderWidth: 2, 
    height: 95+'%',
    borderColor: colours.minsk,
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
    <View 
      style={styles.container}
    >
      <View style={styles.labelContainer}>
        <Text style={styles.txt}>
          Computer's Past Moves
        </Text>
      </View>
      <View
        style={styles.boxContainer}
      >
        <FlatList
          numColumns={5}
          data={values}
          renderItem={({item}) => (<HistoryIcon value={item}/>)}
          keyExtractor={(_, idx) => `${idx}`}
        />
      </View>
    </View>
  )
} 

export default MovesHistory