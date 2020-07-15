import React from 'react'
import { Image } from 'react-native'
import { imageAssets } from '../styles/index'

const HistoryIcon = ({value,...props}) => {

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
        width: 48, 
        height: 48,
        marginHorizontal: 2 + '%'  
      }}
      source={getImage()}
    />
  )
}

export default HistoryIcon