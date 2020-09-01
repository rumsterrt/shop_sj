import React from 'react'
import { Text, View } from 'react-native'
import './index.styl'

const data = ['XL', 'M', 'L', 'ML', 'LM']

const Sizes = () => {
  return pug`
    View
      Text.title size
      View.body
        each size, index in data
          Text.text(key=size styleName=[{first: index === 0}]) #{size}
    `
}

export default Sizes
