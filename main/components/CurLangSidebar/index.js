import React from 'react'
import { Div, Button, Icon } from '@startupjs/ui'
import { Text, Image } from 'react-native'
import { faTimes, faTrash } from '@fortawesome/free-solid-svg-icons'
import './index.styl'

const data = [
  {
    name: 'HANDCRAFTED MUG',
    common: '1 x $140.00',
    url: 'https://demo.hasthemes.com/neha-preview-tm/neha/assets/img/cart/1.jpg'
  },
  {
    name: 'HANDCRAFTED MUG',
    common: '1 x $140.00',
    url: 'https://demo.hasthemes.com/neha-preview-tm/neha/assets/img/cart/1.jpg'
  },
  {
    name: 'HANDCRAFTED MUG',
    common: '1 x $140.00',
    url: 'https://demo.hasthemes.com/neha-preview-tm/neha/assets/img/cart/1.jpg'
  }
]

const CurLangSidebar = ({ onClose }) => {
  return pug`
    Div.root
      Button.closeButton(color='black' size='xxl' variant="text" icon=faTimes onPress=() => onClose && onClose())
      Div.main
        Text.title Shopping Cart
        Div.cards
          each card in data
            Div.card
              Image.cardImage(source=card.url)
              Div.cardInfo
                Text.cardName #{card.name}
                Text.cardCommon #{card.common}
              Icon.cardTrash(icon=faTrash color='black' size='l')
        Div.total
          Text.totalText #{'Total: '}
            span $ 120
        Div.buttons
          Button.button(color='#E3E2E2' shape='squared' textColor='rgb(93, 93, 93)' size='l' variant="flat") VIEW CART
          Button.button.last(color='#E3E2E2' shape='squared' textColor='rgb(93, 93, 93)' size='l' variant="flat") CHECKOUT

  `
}

export default CurLangSidebar
