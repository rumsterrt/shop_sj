import React from 'react'
import { observer, useValue } from 'startupjs'
import { Text, View } from 'react-native'
import './index.styl'

const DesktopNavbar = ({ data }) => {
  const [subMenuOpen, $subMenuOpen] = useValue(null)

  return pug`
    View.nav
      each navElem, index in data
        View.navElem(key=index onPress=() => $subMenuOpen.set(subMenuOpen === navElem.name ? null : navElem.name))
          Text.navElemText #{navElem.name}
          if subMenuOpen === navElem.name && navElem.subNavs && navElem.subNavs.length > 0
            View.subnav
              each subnavElem in (navElem.subNavs || [])
                Text.subnavElem(key=subnavElem.name) #{subnavElem.name}
  `
}

export default observer(DesktopNavbar)
