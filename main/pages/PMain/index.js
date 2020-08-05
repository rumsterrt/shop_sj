import React from 'react'
import { Div } from '@startupjs/ui'
import Breadcrump from 'main/components/PMain/Breadcrumb'
import ShopSidebar from 'main/components/PMain/ShopSidebar'
import ShopProducts from 'main/components/PMain/ShopProducts'
import './index.styl'

const PMain = () => {
  return pug`
    Div.layout
      Div.wrapper
        Breadcrump
        Div.main
          ShopSidebar.sidebar
          ShopProducts
  `
}

export default PMain
