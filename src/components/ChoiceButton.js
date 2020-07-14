import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { Assets, Button } from 'react-native-ui-lib'
import { loadImageAssets, colours } from '../styles/index'

const styles = StyleSheet.create({
  container: {
    width: 97,
    height: 60,
    marginHorizontal: 4 + '%',
    shadowColor: colours.redVenetian,
    elevation: 2,                   // Android only
  },
  icon: {
    width: 32,
    height: 32,
  }
})

const ChoiceButton = (props) => {
  loadImageAssets()

  const getImage = () => {
    switch (props.type) {
      case "rock":
        return Assets.icons.rock
      case "paper":
        return Assets.icons.paper
      case "scissors":
        return Assets.icons.scissors
    }
  }

  return (
    <Button
      flex center
      outline
      outlineColor={colours.purple1}
      color={colours.minsk}
      animateTo='right'
      activeOpacity={0.5}
      round
      size='large'
      iconSource={getImage()}
      iconStyle={styles.icon}
      style={styles.container}
      onPress={() => alert('pressed!')}
    />
  )
}

export default ChoiceButton