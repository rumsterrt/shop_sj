import React from 'react'
import { observer, useValue, useLocal } from 'startupjs'
import { Button } from 'components'
import { Image, Dimensions, View } from 'react-native'
import { BASE_URL } from '@env'
import navBarArray from './navBarData'
import MobileNavbar from '../MobileNavbar'
import DesktopNavbar from '../DesktopNavbar'
import './index.styl'

const base = BASE_URL

const Header = ({ children }) => {
  const [, $sidebar] = useLocal('_session.sidebar')
  const [menuOpen, $menuOpen] = useValue(false)

  const handleBurger = () => {
    if (Dimensions.get('window').width > 768) {
      $sidebar.set({ render: 'lang' })
      return
    }

    $menuOpen.set(!menuOpen)
  }

  return pug`
    View.root
      View.header
        View.topHeader
          Image.logo(source={uri:base + '/img/logo.png'})
          DesktopNavbar(data=navBarArray)
          View.buttons
            Button.button.first(icon={color:'black', size:'s', name:'search'} onPress=() => $sidebar.set({render:'search', noOverlay: true}))
            Button.button(icon={color:'black', size:'s', name:'shopping-bag'} onPress=() => $sidebar.set({render:'cart'}))
            Button.button.burger(icon={color:'black', size:'s', name:menuOpen ? 'times' : 'bars'} onPress=handleBurger)
        MobileNavbar(data=navBarArray isOpen=menuOpen)
      View.body= children
    View.headerSpace
  `
}

export default observer(Header)
