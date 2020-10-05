import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import Icon from '../Icon'
import './index.styl'

const Button = ({ text, onPress = () => {}, style, type = '', icon }) => {
  return pug`
    TouchableOpacity.root(onPress=onPress style=style styleName=[type, {icon: !!icon} ])
      if text
        Text.text(styleName=type) #{text}
      if icon
        Icon.icon(name=icon.name size=icon.size || 's' color=icon.color || 'white')
    `
}

export default Button
