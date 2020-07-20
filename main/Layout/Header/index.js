import React from 'react'
import { observer, useValue, useLocal } from 'startupjs'
import './index.styl'
import { Row, Div, Button, Icon } from '@startupjs/ui'
import { Image, Text } from 'react-native'
import { faBars, faSearch, faShoppingBag, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'
import { BASE_URL } from '@env'
import navBarArray from './navBarData'
const base = BASE_URL

const Header = ({ children }) => {
  const [, $sidebar] = useLocal('_session.sidebar')
  const [menuOpen, $menuOpen] = useValue(false)
  const [subMenuOpen, $subMenuOpen] = useValue(navBarArray.reduce((acc, { name }) => ({ ...acc, [name]: false }), {}))

  const handleSubmenuClick = (name) => () => $subMenuOpen.set({ ...subMenuOpen, [name]: !subMenuOpen[name] })

  return pug`
    Row.root
      Div.header
        Div.topHeader
          Image.logo(source={uri:base + '/img/logo.png'})
          Div.buttons
            Button.button(color='black' size='l' variant="text" icon=faSearch onPress=() => $sidebar.set('search'))
            Button.button(color='black' size='l' variant="text"  icon=faShoppingBag onPress=() => $sidebar.set('cart'))
            Button.button(color='black' shape="squared" size='l' icon=(menuOpen ? faTimes : faBars) onPress=() => $menuOpen.set(!menuOpen))
        Div.nav(styleName=(menuOpen? 'active': ''))
          each navElem in navBarArray
            Div.navElem(key=navElem onPress=handleSubmenuClick(navElem.name))
              Text.navElemText #{navElem.name}
              if navElem.subNavs && navElem.subNavs.length > 0
                Icon(icon=faPlus color='black' size='l')
            if subMenuOpen[navElem.name]
              each subnavElem in (navElem.subNavs || [])
                Text.subnavElem(key=subnavElem.name) #{subnavElem.name}
      Div.body= children
    Div.headerSpace
  `
}

export default observer(Header)
