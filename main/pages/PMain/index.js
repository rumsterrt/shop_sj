import React from 'react'
import { View } from 'react-native'
import Breadcrump from 'main/components/PMain/Breadcrumb'
import ShopSidebar from 'main/components/PMain/ShopSidebar'
import ShopProducts from 'main/components/PMain/ShopProducts'
import './index.styl'

const PMain = () => {
  return pug`
    View.layout
      View.wrapper
        Breadcrump
        View.main
          ShopSidebar.sidebar
          ShopProducts
  `
}

export default PMain
