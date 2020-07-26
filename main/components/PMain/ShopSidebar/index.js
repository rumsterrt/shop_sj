import React from 'react'
import { Text, Image, TextInput } from 'react-native'
import { Row, Icon, Div } from '@startupjs/ui'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './index.styl'

const ratingData = [
  {
    name: 'Flying Drone',
    rate: '2',
    price: '$140.00',
    url: 'https://demo.hasthemes.com/neha-preview-tm/neha/assets/img/cart/1.jpg'
  },
  {
    name: 'Flying Drone',
    rate: '2',
    price: '$140.00',
    url: 'https://demo.hasthemes.com/neha-preview-tm/neha/assets/img/cart/1.jpg'
  },
  {
    name: 'Flying Drone',
    rate: '2',
    price: '$140.00',
    url: 'https://demo.hasthemes.com/neha-preview-tm/neha/assets/img/cart/1.jpg'
  },
  {
    name: 'Flying Drone',
    rate: '2',
    price: '$140.00',
    url: 'https://demo.hasthemes.com/neha-preview-tm/neha/assets/img/cart/1.jpg'
  }
]

const ShopSidebar = ({ style }) => {
  return pug`
    Div.root(style=style)
      Div.widget
        Text.sidebarTitle Search Products
        Row.widgetBody.sidebarSearch(align='between' vAlign='center')
          TextInput.searchInput(icon=faSearch iconPosition="right" placeholder="Search Products...")
          Icon.searchIcon(icon=faSearch color='red' size='l')
      Div.widget
        Text.sidebarTitle Categories
        Div.widgetBody.sidebarCategories
          Row.category.first(align='between')
            Text.text Accessories
            Text.text 4
          Row.category(align='between')
            Text.text Book
            Text.text 9
          Row.category(align='between')
            Text.text Clothing
            Text.text 5
          Row.category(align='between')
            Text.text Homelife
            Text.text 3
          Row.category(align='between')
            Text.text Kids & Baby
            Text.text 4
      Div.widget
        Text.sidebarTitle color
        Row.widgetBody.productColor
          Div.color.first(style={backgroundColor: 'red'})
          Div.color(style={backgroundColor: 'pink'})
          Div.color(style={backgroundColor: 'blue'})
          Div.color(style={backgroundColor: 'yellow'})
          Div.color(style={backgroundColor: 'green'})
          Div.color(style={backgroundColor: 'purple'})
      Div.widget
        Text.sidebarTitle size
        Row.widgetBody.productSize
          Text.sizeText.first XL
          Text.sizeText M
          Text.sizeText L
          Text.sizeText ML
          Text.sizeText LM
      Div.widget
        Text.sidebarTitle Top rated products
        Div.widgetBody.topRatedAll
          each card, index in ratingData
            Row.rateCard(key=index styleName=(index === 0 ? 'first' : ''))
              Image.rateImage(source=card.url)
              Div.rateInfo
                Text.text #{card.name}
                Text.text #{card.price}
  `
}

export default ShopSidebar
