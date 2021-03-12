
import * as headless from './headless.js'
import { istrav } from '../node_modules/istrav/api/index.js'

window.istrav = istrav
window.scripts = headless.scripts
window.doHelloWorld = headless.doHelloWorld
window.doRun = headless.doRun