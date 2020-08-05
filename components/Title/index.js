import React from 'react'
import { Text, View } from 'react-native'
import './index.styl'

const Title = ({ text, style }) => {
  return pug`
    Text.text(style=style) #{text}
    View.major
  `
}

export default Title
