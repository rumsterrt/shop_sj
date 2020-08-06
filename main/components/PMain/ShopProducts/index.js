import React, { useState } from 'react'
import { Icon } from 'components'
import { faBars, faTh } from '@fortawesome/free-solid-svg-icons'
import ShopCard from '../ShopCard'
import { Text, Picker, View } from 'react-native'
import './index.styl'
import { BASE_URL } from '@env'
const base = BASE_URL
const PickerItem = Picker.Item

const cards = [
  {
    img: base + '/img/pic1.jpg',
    name: 'WOODEN FURNITURE',
    cost: '$110.00',
    category: 'Electronic',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor in ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exercl itatio ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur',
    isSale: true
  },
  {
    img: base + '/img/pic2.jpg',
    name: 'WOODEN FURNITURE',
    cost: '$110.00',
    category: 'Electronic',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor in ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exercl itatio ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur',
    isSale: false
  },
  {
    img: base + '/img/pic3.jpg',
    name: 'WOODEN FURNITURE',
    cost: '$110.00',
    category: 'Electronic',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor in ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exercl itatio ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur',
    isSale: true
  },
  {
    img: base + '/img/pic4.jpg',
    name: 'WOODEN FURNITURE',
    cost: '$110.00',
    category: 'Electronic',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor in ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exercl itatio ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur',
    isSale: false
  },
  {
    img: base + '/img/pic5.jpg',
    name: 'WOODEN FURNITURE',
    cost: '$110.00',
    category: 'Electronic',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor in ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exercl itatio ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur',
    isSale: true
  },
  {
    img: base + '/img/pic6.jpg',
    name: 'WOODEN FURNITURE',
    cost: '$110.00',
    category: 'Electronic',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor in ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exercl itatio ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur',
    isSale: false
  },
  {
    img: base + '/img/pic7.jpg',
    name: 'WOODEN FURNITURE',
    cost: '$110.00',
    category: 'Electronic',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor in ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exercl itatio ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur',
    isSale: false
  },
  {
    img: base + '/img/pic8.jpg',
    name: 'WOODEN FURNITURE',
    cost: '$110.00',
    category: 'Electronic',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor in ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exercl itatio ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur',
    isSale: false
  },
  {
    img: base + '/img/pic9.jpg',
    name: 'WOODEN FURNITURE',
    cost: '$110.00',
    category: 'Electronic',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor in ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exercl itatio ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur',
    isSale: false
  },
  {
    img: base + '/img/pic10.jpg',
    name: 'WOODEN FURNITURE',
    cost: '$110.00',
    category: 'Electronic',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor in ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exercl itatio ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur',
    isSale: false
  }
]

const sortItems = ['Default', 'A to Z', 'Z to A', 'In Stock']

const ShopProducts = () => {
  const [gridView, setGridView] = useState(false)
  const [sort, setSort] = useState('Default')

  const cardStyle = []
  if (gridView) {
    cardStyle.push('grid')
  }

  return pug`
    View.root
      View.shopBar
        Text.itemsInfo 
          Text.redText 23 
          = ' Product Found of '
          Text.redText 50
        View.shopFoundSelector
          Text.selectorLabel Sort By:
          Picker.sortSelector(value=sort onChange=value => setSort(value))
            each option in sortItems
              PickerItem(label=option value=option key=option)
        View.shopFilterTab
          Icon(icon=faTh color=(!gridView ? '#ff4136' :'#6c6c6c') size='l' onPress=() => setGridView(false))
          Icon.lastTabButton(icon=faBars color=(gridView ? '#ff4136' :'#6c6c6c') size='l' onPress=() => setGridView(true))
      View.shopContentWrapper 
        View.shopContent(styleName=(gridView? 'grid' : ''))
          each card, index in cards
            ShopCard.card(key=index data=card isFull=gridView styleName=(index === 0 ? 'first' : ''))
  `
}

export default ShopProducts
