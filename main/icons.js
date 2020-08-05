// Build icons library ( https://goo.gl/ov6Dsj )
// Add any icons you want to use as <FontAwesomeIcon icon='coffee'> here

import { library } from '@fortawesome/fontawesome-svg-core'
//import { faBar } from '@fortawesome/free-regular-svg-icons'
import { faTimes, faSearch, faShoppingBag, faBars } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook, faInstagram, faGithub, faDribbble } from '@fortawesome/free-brands-svg-icons'

library.add(faTwitter, faFacebook, faInstagram, faGithub, faDribbble, faTimes, faSearch, faBars, faShoppingBag)
