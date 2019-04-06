/* Use this file to create a custom Font Awesome library to reduce
 * download size.  
*/

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons';
import {
    faHandshake,
    faPrayingHands,
    faEnvelope,
    faPhone,
} from '@fortawesome/free-solid-svg-icons'

// For MVP, we are just importing the entire brand library from FA
import { fab } from '@fortawesome/free-brands-svg-icons'
import { 
    faLinkedin,
    faGithubSquare,
    faGitSquare,
    faReact,
    faJsSquare,
    faNodeJs,
    faCss3,
    faHtml5,
    faEthereum,
    faWix,
    faFreeCodeCamp,
} from '@fortawesome/free-brands-svg-icons';

library.add(
    fab,
    fas,
    faHandshake,
    faPrayingHands,
)
