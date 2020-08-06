import React, { useEffect, useState } from 'react'
import { observer, useLocal } from 'startupjs'
import './index.styl'
import { Button, Icon } from 'components'
import { TextInput, View } from 'react-native'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import CartSidebar from 'main/components/CartSidebar'
import CurLangSidebar from 'main/components/CurLangSidebar'

const Sidebar = () => {
  const [render, $render] = useLocal('_session.sidebar')
  const [lastRender, setLastRender] = useState()

  useEffect(() => {
    if (render) {
      setLastRender(render)
    }
  }, [render])

  const content = () => {
    switch (lastRender) {
      case 'search':
        return pug`
          View.searchBar
            Button.closeButton(icon={color:'white', size:'xl', name:'times'} onPress=() => $render.set(false))
            View.search
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
    View.overlay(styleName=render? 'active': '')
    View.overlay.fake(styleName=render? 'active': '')
      = content()
  `
}

export default observer(Sidebar)
