import React from 'react'
import { observer } from 'startupjs'
import './index.styl'
import { Button, Icon } from 'components'
import { TextInput, View } from 'react-native'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchSidebar = ({ onClose }) => {
  return pug`
    View.wrapper
      View.root
        Button.closeButton(icon={color:'white', size:'xl', name:'times'} onPress=onClose)
        View.search
          TextInput.searchInput(icon=faSearch iconPosition="right" placeholder="Search Entire Store")
          Icon.searchIcon(icon=faSearch color='white' size='l')
    `
}

export default observer(SearchSidebar)
