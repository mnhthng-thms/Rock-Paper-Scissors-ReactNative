import React from 'react'
import { Image } from 'react-native'
import { imageAssets } from '../styles/index'

const GameBoardIcon = (props) => {

  const getImage = () => {
    switch (props.type) {
      case "rock":
        return imageAssets.icons.rock1
      case "paper":
        return imageAssets.icons.paper1
      case "scissors":
        return imageAssets.icons.scissors1
      case "machine": 
        return imageAssets.icons.machine
      default: 
        return imageAssets.icons.unknown
    }
  }

  return (
    <Image
      style={{ width: 120, height: 120 }}
      source={getImage()}
    />
  )
}

export default GameBoardIcon