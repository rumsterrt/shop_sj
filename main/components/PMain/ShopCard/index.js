import React from 'react'
import { Text, View } from 'react-native'
import { Button } from 'components'
import './index.styl'

const ShopProducts = ({ img, isFull, style }) => {
  const styleAdd = !isFull ? 'nofull' : 'full'

  return pug`
    View.root(style=style styleName=styleAdd)
      View.image(styleName=styleAdd style={backgroundImage: 'url('+img+')'})
      View.info(styleName=styleAdd)
        View.infoMain(styleName=styleAdd)
          Text.infoName(styleName=styleAdd) WOODEN FURNITURE
          Text.infoCost(styleName=styleAdd) $110.00
        if !isFull
          Text.category Electronic
        else
          Text.description Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor in ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exercl itatio ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur
          View.buttons
            Button.button(text='ADD TO CARD')
            Button.button.last(icon={color:'#E3E2E2',name:'heart',size:'s'})

  `
}

export default ShopProducts
