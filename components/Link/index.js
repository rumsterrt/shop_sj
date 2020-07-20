import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import './index.styl'

export default ({ onPress, children, style = {} }) => {
  return pug`
    TouchableOpacity.root(onPress=onPress)
      Text.span(style=style)= children
  `
}
