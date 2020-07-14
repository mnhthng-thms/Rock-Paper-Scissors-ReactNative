import React from 'react'
import { View, Assets } from 'react-native-ui-lib'
import { Image } from 'react-native'
import { loadImageAssets } from '../styles/index'

const GameBoardIcon = (props) => {
  loadImageAssets()

  const getImage = () => {
    switch (props.type) {
      case "rock":
        return Assets.icons.rock1
      case "paper":
        return Assets.icons.paper1
      case "scissors":
        return Assets.icons.scissors1
    }
  }

  return (
    <View flex-3 center>
      <Image
        style={{ width: 125, height: 125 }}
        source={getImage()}
      />
    </View>
  )
}

export default GameBoardIcon