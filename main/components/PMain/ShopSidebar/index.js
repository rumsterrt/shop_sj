import React from 'react'
import { Text, TextInput, View } from 'react-native'
import { Icon } from 'components'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Categories from './components/Categories'
import Colors from './components/Colors'
import Sizes from './components/Sizes'
import TopRated from './components/TopRated'
import './index.styl'

const ShopSidebar = ({ style }) => {
  return pug`
    View.root(style=style)
      View.widget
        Text.sidebarTitle Search Products
        View.widgetBody.sidebarSearch
          TextInput.searchInput(icon=faSearch iconPosition="right" placeholder="Search Products...")
          Icon.searchIcon(icon=faSearch color='red' size='l')
      Categories
      Colors
      Sizes
      TopRated
  `
}

export default ShopSidebar
