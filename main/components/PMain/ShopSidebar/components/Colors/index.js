import React from 'react'
import { Text, View } from 'react-native'
import './index.styl'

const data = ['red', 'pink', 'blue', 'yellow', 'green', 'purple']

const Colors = () => {
  return pug`
    View.root
      Text.title color
      View.body
        each color, index in data
          View.color(key=color style={backgroundColor: color}, styleName=[{first: index === 0}])
    `
}

export default Colors
