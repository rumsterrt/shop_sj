import React, { useState } from 'react'
import { Icon, Div } from '@startupjs/ui'
import { faBars, faTh } from '@fortawesome/free-solid-svg-icons'
import ShopCard from '../ShopCard'
import { Text, Picker } from 'react-native'
import './index.styl'
import { BASE_URL } from '@env'
const base = BASE_URL
const PickerItem = Picker.Item

const cards = [
  base + '/img/pic1.jpg',
  base + '/img/pic2.jpg',
  base + '/img/pic3.jpg',
  base + '/img/pic4.jpg',
  base + '/img/pic5.jpg',
  base + '/img/pic6.jpg',
  base + '/img/pic7.jpg',
  base + '/img/pic1.jpg',
  base + '/img/pic1.jpg',
  base + '/img/pic1.jpg',
  base + '/img/pic1.jpg',
  base + '/img/pic1.jpg'
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
    Div.root
      Div.shopBar
        Text.itemsInfo 23 Product Found of 50
        Div.shopFoundSelector
          Text.selectorLabel Sort By:
          Picker.sortSelector(value=sort onChange=value => setSort(value))
            each option in sortItems
              PickerItem(label=option value=option key=option)
        Div.shopFilterTab
          Icon(icon=faTh color=(!gridView ? '#ff4136' :'#6c6c6c') size='xxl' onPress=() => setGridView(false))
          Icon.lastTabButton(icon=faBars color=(gridView ? '#ff4136' :'#6c6c6c') size='xxl' onPress=() => setGridView(true))
      Div.shopContentWrapper 
        Div.shopContent(styleName=(gridView? 'grid' : ''))
          each card, index in cards
            ShopCard.card(key=index img=card isFull=gridView styleName=(index === 0 ? 'first' : ''))
  `
}

export default ShopProducts
