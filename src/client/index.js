
import { performAction } from './js/app'
import { removeAction } from './js/removeTrip'

import './styles/style.scss'

if (document.getElementById("generete") != null) {
    document.getElementById("generete").addEventListener('click', performAction);
}

if (document.getElementById("remove") != null) {
    document.getElementById("remove").addEventListener('click', removeAction);
}

export { performAction, removeAction }
//module.exports = {performAction, removeAction}

alert('I exist')

