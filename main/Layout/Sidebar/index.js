import React, { useEffect, useState } from 'react'
import { observer, useLocal } from 'startupjs'
import './index.styl'
import { View, Dimensions } from 'react-native'
import CartSidebar from 'main/components/CartSidebar'
import CurLangSidebar from 'main/components/CurLangSidebar'
import SearchSidebar from 'main/components/SearchSidebar'
import _ from 'lodash'

const Sidebar = () => {
  const [sidebar, $sidebar] = useLocal('_session.sidebar')
  const [lastSidebar, setLastSidebar] = useState()

  useEffect(() => {
    if (sidebar) {
      setLastSidebar(sidebar)
    }
  }, [sidebar])

  const content = () => {
    switch (_.get(lastSidebar, 'render')) {
      case 'search':
        return pug`
          SearchSidebar(onClose=() => $sidebar.set(false))
            `
      case 'cart':
        return pug`
          CartSidebar(onClose=() => $sidebar.set(false))
        `
      case 'lang':
        return pug`
          CurLangSidebar(onClose=() => $sidebar.set(false))
        `
    }
    return null
  }

  const transform = `translateX(${!sidebar ? Dimensions.get('window').width : 0}px)`

  return pug`
    View.overlay(styleName=[{active: !!sidebar, hide: _.get(lastSidebar, 'noOverlay')}])
    View.wrapper(styleName=[{active: !!sidebar}] style={transform})
      = content()
  `
}

export default observer(Sidebar)
