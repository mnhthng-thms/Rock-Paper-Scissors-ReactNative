import React from 'react'
import { Image } from 'react-native'
import { imageAssets } from '../styles/index'
import { normalise } from '../helpers/Constants'


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
      style={{ 
        width: normalise(120), 
        height: normalise(120) 
      }}
      source={getImage()}
    />
  )
}

export default GameBoardIcon