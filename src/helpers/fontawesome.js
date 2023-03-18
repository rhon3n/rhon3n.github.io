/* Use this file to create a custom Font Awesome library to reduce
 * download size.  
*/

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons';
import {
    faHandshake,
    faPrayingHands,
    faHandPointRight,
    faComments,
} from '@fortawesome/free-solid-svg-icons'

// For MVP, we are just importing the entire brand library from FA
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(
    fab,
    fas,
    faHandshake,
    faPrayingHands,
    faHandPointRight,
    faComments,
)
