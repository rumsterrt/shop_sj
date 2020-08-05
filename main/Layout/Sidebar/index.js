import React from 'react'
import { observer, useLocal } from 'startupjs'
import './index.styl'
import { Div, Button, Icon } from '@startupjs/ui'
import { TextInput } from 'react-native'
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
import CartSidebar from 'main/components/CartSidebar'
import CurLangSidebar from 'main/components/CurLangSidebar'

const Sidebar = () => {
  const [render, $render] = useLocal('_session.sidebar')

  const content = () => {
    switch (render) {
      case 'search':
        return pug`
          Div.searchBar
            Button.closeButton(color='white' size='xxl' variant="text" icon=faTimes onPress=() => $render.set(false))
            Div.search
              TextInput.searchInput(icon=faSearch iconPosition="right" placeholder="Search Entire Store")
              Icon.searchIcon(icon=faSearch color='white' size='l')
            `
      case 'cart':
        return pug`
          CartSidebar.cartSidebar(onClose=() => $render.set(false))
        `
      case 'lang':
        return pug`
          CurLangSidebar(onClose=() => $render.set(false))
        `
    }
    return null
  }

  return pug`
    Div.overlay(styleName=render? 'active': '')
    Div.overlay.fake(styleName=render? 'active': '')
      = content()
  `
}

export default observer(Sidebar)
