import React from 'react'
import { Button, Icon } from 'components'
import { Text, Image, View } from 'react-native'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
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
    View.root
      Button.closeButton(icon={color:'black', size:'xl', name: 'times'} onPress=() => onClose && onClose())
      View.main
        Text.title Shopping Cart
        View.cards
          each card in data
            View.card
              Image.cardImage(source=card.url)
              View.cardInfo
                Text.cardName #{card.name}
                Text.cardCommon #{card.common}
              Icon.cardTrash(icon=faTrash color='black' size='l')
        View.total
          Text.totalText #{'Total: '}
            span $ 120
        View.buttons
          Button.button(color='#E3E2E2' shape='squared' textColor='rgb(93, 93, 93)' size='l' variant="flat") VIEW CART
          Button.button.last(color='#E3E2E2' shape='squared' textColor='rgb(93, 93, 93)' size='l' variant="flat") CHECKOUT

  `
}

export default CurLangSidebar
