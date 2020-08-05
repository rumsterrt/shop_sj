import React from 'react'
import { View } from 'react-native'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Icon from '../Icon'
import './index.styl'
const AMOUNT = 5
const ITEMS = Array(AMOUNT).fill(null)

const Rating = ({ style, value = 0 }) => {
  return pug`
    View.root(style=style)
      each ITEM, index in ITEMS
        View.iconWrap(key=index styleName=[{first: index === 0}])
          Icon.icon(styleName=[{active:index < Math.round(value)}] icon=faStar size=12)
  `
}

export default Rating
