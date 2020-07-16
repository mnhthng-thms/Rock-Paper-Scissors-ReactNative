import React from 'react'
import { StyleSheet, Image } from 'react-native'
import Ripple from 'react-native-material-ripple'
import { imageAssets, colours } from '../styles/index'

const styles = StyleSheet.create({
  container: {
    width: 89,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 5,
    marginHorizontal: 4 + '%',
    borderColor: colours.minsk,
    borderWidth: 2,
    borderRadius: 20,
    elevation: 3,                         // Android only
    shadowColor: colours.redVenetian,
  },
  icon: {
    width: 32,
    height: 32,
  }
})

Ripple.defaultProps.rippleContainerBorderRadius 
  = styles.container.borderRadius

const ChoiceButton = (props) => {

  const getImage = () => {
    switch (props.type) {
      case "rock":
        return imageAssets.icons.rock
      case "paper":
        return imageAssets.icons.paper
      case "scissors":
        return imageAssets.icons.scissors
    }
  }

  return (
    < Ripple
      rippleOpacity={0.4}
      style={styles.container}
      onPress={props.onPress}
    >
      <Image 
        style={styles.icon}
        source={getImage()}
      />
    </Ripple>
  )
}

export default ChoiceButton