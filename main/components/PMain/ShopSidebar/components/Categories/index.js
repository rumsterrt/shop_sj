import React from 'react'
import { Text, View } from 'react-native'
import './index.styl'

const data = [
  {
    name: 'Accessories',
    count: 4
  },
  {
    name: 'Book',
    count: 9
  },
  {
    name: 'Clothing',
    count: 5
  },
  {
    name: 'Homelife',
    count: 3
  },
  {
    name: 'Kids & Baby',
    count: 4
  }
]

const Categories = () => {
  return pug`
    View
      Text.title Categories
      View.body
        each category, index in data
          View.category(key=index styleName=[{first: index === 0}])
            Text.text #{category.name}
            Text.text #{category.count}
    `
}

export default Categories
