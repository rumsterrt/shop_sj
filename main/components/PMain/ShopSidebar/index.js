import React from 'react'
import { Text, Image, TextInput, View } from 'react-native'
import { Icon, Rating } from 'components'
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
    View.root(style=style)
      View.widget
        Text.sidebarTitle Search Products
        View.widgetBody.sidebarSearch
          TextInput.searchInput(icon=faSearch iconPosition="right" placeholder="Search Products...")
          Icon.searchIcon(icon=faSearch color='red' size='l')
      View.widget
        Text.sidebarTitle Categories
        View.widgetBody.sidebarCategories
          View.category.first
            Text.text Accessories
            Text.text 4
          View.category
            Text.text Book
            Text.text 9
          View.category
            Text.text Clothing
            Text.text 5
          View.category
            Text.text Homelife
            Text.text 3
          View.category
            Text.text Kids & Baby
            Text.text 4
      View.widget
        Text.sidebarTitle color
        View.widgetBody.productColor
          View.color.first(style={backgroundColor: 'red'})
          View.color(style={backgroundColor: 'pink'})
          View.color(style={backgroundColor: 'blue'})
          View.color(style={backgroundColor: 'yellow'})
          View.color(style={backgroundColor: 'green'})
          View.color(style={backgroundColor: 'purple'})
      View.widget
        Text.sidebarTitle size
        View.widgetBody.productSize
          Text.sizeText.first XL
          Text.sizeText M
          Text.sizeText L
          Text.sizeText ML
          Text.sizeText LM
      View.widget
        Text.sidebarTitle Top rated products
        View.widgetBody.topRatedAll
          each card, index in ratingData
            View.rateCard(key=index styleName=(index === 0 ? 'first' : ''))
              Image.rateImage(source=card.url)
              View.rateInfo
                Text.text #{card.name}
                Rating.rating(value=3)
                Text.text #{card.price}
  `
}

export default ShopSidebar
