import React from 'react'
import { TouchableOpacity } from 'react-native'
import './index.styl'

const types = {
  primary: 'primary',
  secondary: 'secondary',
  transparent: 'transparent'
}

const Button = ({ text, onPress, style, type }) => {
  return pug`
    TouchableOpacity.root(onPress=onPress && onPress() style=style)
      = text
    `
}

export default Button
