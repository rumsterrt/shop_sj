import React from 'react'
import { Div } from '@startupjs/ui'
import { Text } from 'react-native'
import './index.styl'

const Breadcrumb = () => {
  return pug`
    Div.root
      Div.wrapper
        Text.title Shop
        Div.nav
          Text.navElem HOME
          = ' / '
          Text.navElem.select SHOP
  `
}

export default Breadcrumb
