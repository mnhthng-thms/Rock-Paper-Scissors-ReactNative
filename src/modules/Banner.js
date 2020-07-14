import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import colours from '../styles/colours'

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'row',
    backgroundColor: colours.orange1, 
    marginTop: 3+'%', 
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  txt: {
    fontWeight: 'bold',
    color: colours.white
  }
})

const Banner = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Fuck this shit I'm real</Text>
    </View>
  )
}

export default Banner
