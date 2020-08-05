import React from 'react'
import { observer, useValue } from 'startupjs'
import './index.styl'
import { Div } from '@startupjs/ui'
import { Text } from 'react-native'

const DesktopNavbar = ({ data }) => {
  const [subMenuOpen, $subMenuOpen] = useValue(null)

  return pug`
    Div.nav
      each navElem in data
        Div.navElem(key=navElem onPress=() => $subMenuOpen.set(subMenuOpen === navElem.name ? null : navElem.name))
          Text.navElemText #{navElem.name}
          if subMenuOpen === navElem.name && navElem.subNavs && navElem.subNavs.length > 0
            Div.subnav
              each subnavElem in (navElem.subNavs || [])
                Text.subnavElem(key=subnavElem.name) #{subnavElem.name}
  `
}

export default observer(DesktopNavbar)
