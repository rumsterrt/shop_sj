import React from 'react'
import { observer, useValue } from 'startupjs'
import './index.styl'
import { Div, Icon } from '@startupjs/ui'
import { Text } from 'react-native'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const MobileNavbar = ({ isOpen, data }) => {
  const [subMenuOpen, $subMenuOpen] = useValue(data.reduce((acc, { name }) => ({ ...acc, [name]: false }), {}))

  const handleSubmenuClick = (name) => () => $subMenuOpen.set({ ...subMenuOpen, [name]: !subMenuOpen[name] })

  return pug`
    Div.nav(styleName=(isOpen? 'active': ''))
      each navElem in data
        Div.navElem(key=navElem onPress=handleSubmenuClick(navElem.name))
          Text.navElemText #{navElem.name}
          if navElem.subNavs && navElem.subNavs.length > 0
            Icon(icon=faPlus color='black' size='l')
        if subMenuOpen[navElem.name]
          each subnavElem in (navElem.subNavs || [])
            Text.subnavElem(key=subnavElem.name) #{subnavElem.name}
  `
}

export default observer(MobileNavbar)
