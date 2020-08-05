import React from 'react'
import { observer, useValue } from 'startupjs'
import './index.styl'
import { Icon } from 'components'
import { Text, View } from 'react-native'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const MobileNavbar = ({ isOpen, data }) => {
  const [subMenuOpen, $subMenuOpen] = useValue(data.reduce((acc, { name }) => ({ ...acc, [name]: false }), {}))

  const handleSubmenuClick = (name) => () => $subMenuOpen.set({ ...subMenuOpen, [name]: !subMenuOpen[name] })

  return pug`
    View.nav(styleName=(isOpen? 'active': ''))
      each navElem in data
        View.navElem(key=navElem onPress=handleSubmenuClick(navElem.name))
          Text.navElemText #{navElem.name}
          if navElem.subNavs && navElem.subNavs.length > 0
            Icon(icon=faPlus color='black' size='xs')
        if subMenuOpen[navElem.name]
          each subnavElem in (navElem.subNavs || [])
            Text.subnavElem(key=subnavElem.name) #{subnavElem.name}
  `
}

export default observer(MobileNavbar)
