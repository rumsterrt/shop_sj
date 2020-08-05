import React from 'react'
import { observer, useValue, useLocal } from 'startupjs'
import './index.styl'
import { Row, Div, Button } from '@startupjs/ui'
import { Image, Platform } from 'react-native'
import { faBars, faSearch, faShoppingBag, faTimes } from '@fortawesome/free-solid-svg-icons'
import { BASE_URL } from '@env'
import navBarArray from './navBarData'
import MobileNavbar from '../MobileNavbar'
import DesktopNavbar from '../DesktopNavbar'
const base = BASE_URL

const Header = ({ children }) => {
  const [, $sidebar] = useLocal('_session.sidebar')
  const [menuOpen, $menuOpen] = useValue(false)

  const handleBurger = () => {
    if (Platform.OS === 'web') {
      $sidebar.set('lang')
      return
    }

    $menuOpen.set(!menuOpen)
  }

  return pug`
    Row.root
      Div.header
        Div.topHeader
          Image.logo(source={uri:base + '/img/logo.png'})
          DesktopNavbar(data=navBarArray)
          Div.buttons
            Button.button(color='black' size='l' variant="text" icon=faSearch onPress=() => $sidebar.set('search'))
            Button.button(color='black' size='l' variant="text"  icon=faShoppingBag onPress=() => $sidebar.set('cart'))
            Button.button(color='black' shape="squared" size='l' icon=(menuOpen ? faTimes : faBars) onPress=handleBurger)
        MobileNavbar(data=navBarArray isOpen=menuOpen)
      Div.body= children
    Div.headerSpace
  `
}

export default observer(Header)
