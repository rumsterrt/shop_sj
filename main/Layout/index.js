import React from 'react'
import { View } from 'react-native'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import './index.styl'

const Layout = ({ children }) => {
  return pug`
    View.layout
      Sidebar
      Header
      = children
      Footer
  `
}

export default Layout
