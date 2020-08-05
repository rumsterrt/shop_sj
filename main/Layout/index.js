import React from 'react'
import { Layout as UILayout } from '@startupjs/ui'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return pug`
    UILayout
      Sidebar
      Header
      = children
      Footer
  `
}

export default Layout
