import React from 'react'
import { Image } from 'react-native'
import { imageAssets } from '../styles/index'
import { normalise } from '../helpers/Constants'

const HistoryIcon = ({value, opacityWeight,...props}) => {

  const opacityWeights = [0.6, 0.6, 0.6, 0.8, 1]
  const getOpacity = i => 
    (i >= opacityWeights.length) ? 1 : opacityWeights[i]
  
    const getImage = () => {
    switch (value) {
      case 1:
        return imageAssets.icons.rock1
      case 2:
        return imageAssets.icons.paper1
      case 3:
        return imageAssets.icons.scissors1
      default: 
        return imageAssets.icons.unknown
    }
  }

  return (
    <Image
      style={{ 
        opacity: getOpacity(opacityWeight),
        width: normalise(48), 
        height: normalise(48),
        marginHorizontal: 2 + '%'  
      }}
      source={getImage()}
    />
  )
}

export default HistoryIcon