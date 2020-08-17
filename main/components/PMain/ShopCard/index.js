import React from 'react'
import { Text, View } from 'react-native'
import { Button } from 'components'
import './index.styl'

const ShopProducts = ({ data, isFull, style }) => {
  const { img, name, cost, category, description, isSale } = data
  const styleAdd = !isFull ? 'nofull' : 'full'

  return pug`
    View.root(style=style styleName=styleAdd)
      View.image(styleName=styleAdd style={backgroundImage: 'url('+img+')'})
        if isSale && !isFull
          View.saleAddon
            Text SALE
      View.info(styleName=styleAdd)
        View.infoMain(styleName=styleAdd)
          Text.infoName(styleName=styleAdd) #{name}
          Text.infoCost(styleName=styleAdd) #{cost}
        if !isFull
          Text.category #{category}
        else
          Text.description #{description}
          View.buttons
            Button.button(text='ADD TO CARD')
            Button.button.last(icon={color:'#E3E2E2',name:'heart',size:'s'})
  `
}

export default ShopProducts
