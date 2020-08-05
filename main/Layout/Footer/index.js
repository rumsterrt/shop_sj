import React from 'react'
import { View, Text, Image } from 'react-native'
import { Link, Icon } from 'components'
import { emit } from 'startupjs'
import { faTwitter, faTwitch, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { BASE_URL } from '@env'
import './index.styl'

const base = BASE_URL

const Footer = () => {
  return pug`
    View.root
      View.top
        Text.title
        = '20 Years Experience'
        View.icons
          Icon.icon(icon=faTwitter size='xl' color='#3f3f3f' styleName='first')
          Icon.icon(icon=faTwitch size='xl' color='#3f3f3f')
          Icon.icon(icon=faFacebookF size='xl' color='#3f3f3f')
          Icon.icon(icon=faInstagram size='xl' color='#3f3f3f')
      View.middle
        Image.logo(source={uri:base + '/img/logo.png'})
        View.nav
          Text.navElem.first HOME
          Text.navElem ABOUT US
          Text.navElem SHOP
          Text.navElem BLOG
          Text.navElem PAGES
        View.navBorder
        Text.copyright 
          = 'Copyright © '
          Link(onPress=() => emit('url', 'https://twitter.com/ajlkn'))
          = 'neha' 
          = ' 2018 . All Right Reserved.' 
      View.bottom
        View.tableRow
          Text.tableName PHONE:
          Text.tableValue +012 345 678 102
        View.tableRow
          Text.tableName EMAIL:
          Text.tableValue info@example.com
        View.tableRow
          Text.tableName ADDRESS:
          Text.tableValue Dhaka Bangladesh
    `
}

export default Footer
