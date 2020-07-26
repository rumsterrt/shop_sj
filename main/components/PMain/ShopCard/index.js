import React from 'react'
import { Text } from 'react-native'
import { Row, Div, Button } from '@startupjs/ui'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
//import Image from 'react-native-scalable-image'
import './index.styl'

const ShopProducts = ({ img, isFull, style }) => {
  const styleAdd = !isFull ? 'nofull' : 'full'

  console.log('img', img)
  return pug`
    Div.root(style=style styleName=styleAdd)
      Div.image(styleName=styleAdd style={backgroundImage: 'url('+img+')'})
      Div.info(styleName=styleAdd)
        Row.infoMain(styleName=styleAdd)
          Text.infoName(styleName=styleAdd) WOODEN FURNITURE
          Text.infoCost(styleName=styleAdd) $110.00
        if !isFull
          Text.category Electronic
        else
          Text.description Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor in ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exercl itatio ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur
          Row.buttons
            Button.button(color='#E3E2E2' shape='squared' textColor='rgb(93, 93, 93)' size='l' variant="outlined") ADD TO CARD
            Button.button.last(color='#E3E2E2' shape='squared' icon=faHeart size='l' variant="outlined")

  `
}

export default ShopProducts
