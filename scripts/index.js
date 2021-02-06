
import * as dashboard from './dashboard.js'
import { istrav } from '../node_modules/istrav/api/index.js'

window.istrav = istrav
window.scripts = dashboard.scripts
window.doHelloWorld = dashboard.doHelloWorld
window.doRun = dashboard.doRun