import React from 'react'
import { Text, View } from 'react-native'
import './index.styl'

const Breadcrumb = () => {
  return pug`
    View.root
      View.wrapper
        Text.title Shop
        View.nav
          Text.navElem HOME
          Text.navElem.slice /
          Text.navElem.select SHOP
  `
}

export default Breadcrumb
