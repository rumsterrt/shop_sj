import React from 'react'
import { Text, View, Image } from 'react-native'
import { Rating } from 'components'
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

const TopRated = () => {
  return pug`
    View.root
      Text.title Top rated products
      View.body
        each card, index in ratingData
          View.rateCard(key=index styleName=(index === 0 ? 'first' : ''))
            Image.rateImage(source=card.url)
            View.rateInfo
              Text.text #{card.name}
              Rating.rating(value=3)
              Text.ratePrice #{card.price}
      `
}

export default TopRated
